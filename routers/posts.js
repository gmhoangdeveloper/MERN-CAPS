const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Post = require("../models/Post");
const jwtfile = require("../jsonwebtoken/jsonwebtoken");

const multer = require("multer");
const path = require("path");

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
  limits: {
    fileSize: 1000000000,
  },
}); //đi đến toàn bộ thư mục quản lý

router.post(
  "/",
  upload.fields([{ name: "productImage", maxCount: 3 }]),
  async (req, res) => {
    var file = req.files;
    const post = new Post({
      // id: req.body.title,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      image: `http://localhost:8080/productImage/${file["productImage"][0].filename}`,
    });
    try {
      const savedUsername = await post.save();
      res.json({ data: savedUsername, image: file["productImage"][0].path });
    } catch (err) {
      res.status(500).send({ message: "Error in Create Product." });
    }
  }
);

module.exports = router;
