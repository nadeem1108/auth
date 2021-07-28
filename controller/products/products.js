const Product = require("../../modules/products/product");

module.exports = (req, res, next) => {
  var { name, src, des, subDes, price, discountPrice, size, qty } = req.body;

  var product = new Product({
    name: name,
    src: {
      originalname: originalname,
    },
    des: des,
    subDes: subDes,
    price: price,
    discountPrice: discountPrice,
    size: size,
    qty: qty,
    createdDate: new Date(),
    status: 1,
  });
  product
    .save()
    .then((result) => {
      res.status(201).json({
        msg: "SUCCESS",
        result: result,
      });
    })
    .catch((err) => {
      res.json({
        msg: "FAIL",
        err: err,
      });
    });
};
