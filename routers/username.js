const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UserName = require("../models/UserName");
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
  //   limits: {
  //     fileSize: 1000000000,
  //   },
});
router.get("/", async (req, res) => {
  const email_search = req.query.email;
  const password_search = req.query.password;
  //   const { page, limit } = req.query;

  try {
    if (email_search !== undefined && password_search !== undefined) {
      const username = await UserName.find();
      const userEmail = await username.filter((username) => {
        return (
          username.email === email_search &&
          username.password === password_search
        );
      });
      //   const paginate = await UserName.paginate(
      //     { email: userEmail[0].email },
      //     {
      //       page: 1,
      //       limit: 5,
      //     }
      //   );
      res.json(userEmail);
    } else {
      const username = await UserName.find();
      const userEmail = await username.filter((username) => {
        return username.email === email_search;
      });

      res.json(userEmail);

      // res.status(500).send({ message: "PLease Select URL Email ", paginate });
    }
  } catch (err) {
    res.status(500).send({ message: "Error in Not Search UserName ." });
  }
});

router.get("/:usernameId", async (req, res) => {
  try {
    const username = await UserName.findById(req.params.usernameId);

    const paginate = await UserName.paginate({ _id: username["_id"] });
    res.json({ paginate, usernameđ: username });
  } catch (err) {
    res.json({ message: "Get User Name ERROR", err });
  }
});

router.post("/", upload.single("avatar"), async (req, res) => {
  const username = new UserName({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    password: req.body.password,
    avatar:
      req.file !== undefined
        ? `avatar/${file["avatar"][0].filename}`
        : req.body.avatar,
    dateofbirth: req.body.dateofbirth,
  });
  try {
    const savedUsername = await username.save();
    //   res.json(savedUsername);
    res.json(savedUsername);
  } catch (err) {
    res.status(500).send({ message: "Error in Create Product." });
  }
});

router.put("/:usernameId", upload.single("avatar"), async (req, res) => {
  try {
    const username = await UserName.findById(req.params.usernameId);

    if (username) {
      username.firstName = req.body.firstName;
      username.lastName = req.body.lastName;
      username.phoneNumber = req.body.phoneNumber;
      username.email = req.body.email;
      username.address = req.body.address;
      username.city = req.body.city;
      username.password = req.body.password;
      username.avatar =
        req.file !== undefined
          ? `avatar/${req.file["filename"]}`
          : username.avatar;
      //   username.avatar = req.body.avatar;
      // username.avatar = `/avatar/${file["avatar"][0].filename}`;
      username.dateofbirth = req.body.dateofbirth;

      const updatedUserName = await username.save();
      if (updatedUserName) {
        // var nameavatar = req.file;
        res.status(201).send({
          message: "New Product Updated",
          data: updatedUserName,
          //   Hoang: `${"-----------" + req.file}`,
          //   file: req.file !== null ? req.file["filename"] : "9999999999999",
          //   hahaha: "hhhhhhhhhh",
        });
      }
      res
        .status(500)
        .send({ message: "Error in Updated save Product.", error });
    }
  } catch (error) {
    res.status(500).send({ message: "Error in Updated Product.", error });
  }
});
router.delete("/:usernameId", async (req, res) => {
  try {
    const removedUsername = await UserName.remove({
      _id: req.params.usernameId,
    });
    res.json({ message: "Succers in Delete Username.", removedUsername });
  } catch (err) {
    res.status(500).send({ message: "Error in Delete Product." });
  }
});

module.exports = router;
