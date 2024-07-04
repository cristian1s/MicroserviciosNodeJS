const express = require("express");
const bodyParser = require("body-parser");
const salesRoutes = require("./routes/ventasRoutes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use("/api", salesRoutes);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Sales microservice running on port ${port}`);
});
