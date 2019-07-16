const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");

const swaggerDocument = yaml.load(`${__dirname}../../swagger.yaml`);

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;