const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Products = require("../models/products");
const jwtfile = require("../jsonwebtoken/jsonwebtoken");
const multer = require("multer");
const path = require("path");
var app = require('../index');
const storage = multer.diskStorage({
  destination: "./uploads/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({
  storage: storage,
  //   limits: {
  //     fileSize: 1000000000,
  //   },
});

router.get("/", async (req, res) => {
  const email_search = req.query.title;
  const { page, limit } = req.query;

  try {
    if (email_search !== undefined) {
      const posts = await Products.find();
      const product = await posts.filter((posts) => {
        return (
          posts.title.toLowerCase().indexOf(email_search.toLowerCase()) !== -1
        );
      });
      const paginate = await Products.paginate(
        { title: product[0].title },
        {
          // page: 1,
          // limit: 5,
          sort: { price: "asc" },
        }
      );
      res.json({ paginate, Hoang: "DONE" });
    } else {
      const products = await Products.find();
      res.json(products);
    }
  } catch (err) {
    res.status(500).send({ message: "Error in Not Search Product ." });
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const products = await Products.findById(req.params.productId);
    const paginate = await Products.paginate({ _id: products["_id"] });
    res.json(paginate);
  } catch (err) {
    res.json({ message: err, Hoang: "EROR" });
  }
});

router.post(
  "/",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  async (req, res) => {
    const products = new Products({
      // id: req.body.title,
      title: req.body.title,
      description: req.body.description,
      image1:
        req.files !== undefined
          ? `http://${req.headers.host}/product/${req.files["image1"][0].filename}`
          : req.body.image1,
      image2:
        req.files !== undefined
          ? `http://${req.headers.host}/product/${req.files["image2"][0].filename}`
          : req.body.image2,
      price: req.body.price,
      quantity: req.body.quantity,
      size: req.body.size,
      status: req.body.status,
    });
    try {
      const savedProducts = await products.save();
      res.json(savedProducts);
    } catch (err) {
      console.log(req.files + " and exit");
      res.status(500).send({
        err,
        message: "Error in Create Product.",
      });
    }
 
    // console.log(res !== undefined ?req.headers.host:"Not Value");
    // // res.send({res});
    // res.end
 
  }
);

router.put(
  "/:productId",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const product = await Products.findById(req.params.productId);
      if (product) {
        product.title = req.body.title;
        product.description = req.body.description;
        product.image1 =
          req.files !== undefined
            ? `product/${req.files["image1"][0].filename}`
            : req.body.image2;
        product.image2 =
          req.files !== undefined
            ? `product/${req.files["image2"][0].filename}`
            : req.body.image2;
        product.price = req.body.price;
        product.quantity = req.body.quantity;
        product.size = req.body.size;
        product.status = req.body.status;
        const updatedProduct = await product.save();
        if (updatedProduct) {
          res.status(201).send({
            message: "New Product Updated",
            data: updatedProduct,
          });
        }
      }
    } catch (error) {
      res.status(500).send({ message: "Error in Updated Product." });
    }
  }
);
router.delete("/:productId", async (req, res) => {
  try {
    const removedPost = await Products.remove({ _id: req.params.productId });
    res.json(removedPost);
  } catch (err) {
    res.status(500).send({ message: "Error in Delete Product." });
  }
});

module.exports = router;
