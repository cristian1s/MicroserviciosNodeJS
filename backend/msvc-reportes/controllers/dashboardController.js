// controllers/reportController.js
const { QueryTypes } = require('sequelize');
const sequelize = require('../config/database');
const { clientsApi, productsApi } = require('../client/axios');

const getTopProducts = async (req, res) => {
  try {
    const topProducts = await sequelize.query(
      `SELECT p.id as productoId, p.nombre, SUM(dv.cantidad) as total_sales
       FROM tb_detalle_ventas dv
       JOIN tb_productos p ON dv.productoId = p.id
       GROUP BY p.id, p.nombre
       ORDER BY total_sales DESC
       LIMIT 5`,
      { type: QueryTypes.SELECT }
    );
    //agregando interconexion con el microservicios de productos
    const productIds = topProducts.map(product => product.productoId);
    const productDetails = await Promise.all(productIds.map(id => productsApi.get(`/api/products/${id}`)));
    
    const detailedTopProducts = topProducts.map((product, index) => ({
      ...product,
      productDetails: productDetails[index].data,
    }));

    res.json(detailedTopProducts);

    // res.json(topProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTopClients = async (req, res) => {
  try {
    const topCustomers = await sequelize.query(
      `SELECT v.cliente, SUM(v.total) as total_spent
       FROM tb_ventas v
       GROUP BY v.cliente
       ORDER BY total_spent DESC
       LIMIT 5`,
      { type: QueryTypes.SELECT }
    );

    const customerIds = topCustomers.map(client => client.cliente);
    const customerDetails = await Promise.all(customerIds.map(id => clientsApi.get(`/api/clients/${id}`)));

    const detailedTopCustomers = topCustomers.map((client, index) => ({
      ...client,
      clientDetails: customerDetails[index].data,
    }));

    res.json(detailedTopCustomers);

    // res.json(topCustomers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTopProducts,
  getTopClients,
};
