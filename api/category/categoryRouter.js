var express = require('express');
var router = express.Router();
var category = require("../../controller/category/category");

/* Admin Route GET & POST. */
router.post('/', category);

module.exports = router;
