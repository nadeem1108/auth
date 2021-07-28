var express = require('express');
var router = express.Router();
const SubCategory = require('../../controller/subCategory/subCategory');

/* Admin Route GET & POST. */
router.post('/', SubCategory);

module.exports = router;
