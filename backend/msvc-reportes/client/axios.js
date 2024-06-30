const axios = require('axios');

const clientsServiceUrl = process.env.CLIENTS_SERVICE_URL;
const productsServiceUrl = process.env.PRODUCTS_SERVICE_URL;

const clientsApi = axios.create({
  baseURL: clientsServiceUrl,
});

const productsApi = axios.create({
  baseURL: productsServiceUrl,
});

module.exports = {
  clientsApi,
  productsApi,
};
