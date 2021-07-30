var express = require("express");
var router = express.Router();
var products = require("../../controller/products/productsCreate");
var uploadMultiple = require("../../controller/multer/multer");

/* Admin Route GET & POST. */
router.post("/",uploadMultiple, products);

module.exports = router;

