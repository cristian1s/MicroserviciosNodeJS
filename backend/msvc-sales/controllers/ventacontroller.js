const { Venta, Cliente, DetalleVenta, Producto } = require('../models');

const createSale = async (req, res) => {
  const { cliente, fecha, total, detalles } = req.body;

  try {
    const venta = await Venta.create({
      cliente,
      fecha,
      total,
    });

    const detallesVentas = detalles.map(detalle => ({
      ...detalle,
      ventaId: venta.id,
    }));

    await DetalleVenta.bulkCreate(detallesVentas);

    res.status(201).json({ message: 'Venta creada exitosamente', venta });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la venta', error });
  }
};

const obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.findAll({
      include: [
        {
          model: Cliente,
          attributes: ['id', 'nombre', 'apellido'],
        },
        {
          model: DetalleVenta,
          include: [
            {
              model: Producto,
              attributes: ['id', 'nombre'],
            },
          ],
        },
      ],
    });

    res.json(ventas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las ventas' });
  }
};

const obtenerVentaPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const venta = await Venta.findByPk(id, {
      include: [
        {
          model: Cliente,
          attributes: ['id', 'nombre', 'apellido'],
        },
        {
          model: DetalleVenta,
          include: [
            {
              model: Producto,
              attributes: ['id', 'nombre'],
            },
          ],
        },
      ],
    });

    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }

    res.json(venta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la venta' });
  }
};

const getSales = async (req, res) => {
  try {
    const ventas = await Venta.findAll({
      include: [DetalleVenta],
    });
    res.status(200).json(ventas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las ventas', error });
  }
};

const deleteSale = async (req, res) => {
  const { id } = req.params;

  try {
    await DetalleVenta.destroy({ where: { ventaId: id } });
    await Venta.destroy({ where: { id } });

    res.status(200).json({ message: 'Venta eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la venta', error });
  }
};

module.exports = {
  createSale,
  obtenerVentas,
  deleteSale,
  obtenerVentaPorId,
};