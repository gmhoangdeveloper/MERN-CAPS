const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const PaymentCart = require("../models/paymentcart");
const jwtfile = require("../jsonwebtoken/jsonwebtoken");

router.get("/all", async (req, res) => {
  try {
    const paginate = await PaymentCart.paginate(
      {},
      {
        page: page !== undefined ? page : 1,
        limit: limit !== undefined ? limit : 5,
        sort: { price: "asc" },
      }
    );
    res.json({ paginate, message: "Error in IF Search Product ." });
  } catch (err) {
    res.status(500).send({ err, message: "Error in Not Search Product ." });
  }
});

router.get("/", async (req, res) => {
  const email_search = req.query.email;
  var { page, limit } = req.query;

  try {
    if (email_search !== undefined) {
      const paymentCart = await PaymentCart.find();
      const Paymentcart = await paymentCart.filter((paymentCart) => {
        return (
          // paymentCart.email.toLowerCase().indexOf(email_search.toLowerCase()) !== -1
          paymentCart.email === email_search
        );
      });
      const paginate = await PaymentCart.paginate(
        { email: Paymentcart[0].email },
        {
          page: page !== undefined ? page : 1,
          limit: limit !== undefined ? limit : 5,
          sort: { date: "desc" },
        }
      );
      res.json({ paginate, message: "Error in IF Search Product ." });
    } else {
      const paginate = await PaymentCart.paginate(
        {},
        {
          page: page !== undefined ? page : 1,
          limit: limit !== undefined ? limit : 5,
          sort: { price: "asc" },
        }
      );
      res.json({ paginate, message: "Error in ELSE Search Product ." });
    }
  } catch (err) {
    res.status(500).send({ err, message: "Error in Not Search Product ." });
  }
});

router.get("/:paymentCartId", async (req, res) => {
  try {
    const paymentCart = await PaymentCart.findById(req.params.paymentCartId);

    // const paginatePaymentCart = await PaymentCart.paginate({
    //   _id: paymentCart["_id"],
    // },{});
    res.json(paymentCart);
  } catch (err) {
    res.json({ message: err, Hoang: "EROR" });
  }
});

router.post("/", async (req, res) => {
  const paymentCart = new PaymentCart({
    // id: req.body.title,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    note: req.body.note,
    date: req.body.date,
    orderPayment: req.body.orderPayment,
    subtotalCart: req.body.subtotalCart,
    status: req.body.status,
    password: req.body.password,
    avatar: req.body.avatar,
    dateofbirth: req.body.dateofbirth,
    codeorders: req.body.codeorders,
    productCart: req.body.productCart.map((productCart) => {
      return {
        _id: productCart._id,
        title: productCart.title,
        description: productCart.description,
        image1: productCart.image1,
        image2: productCart.image2,
        price: productCart.price,
        quantity: productCart.quantity,
        size: productCart.size,
        status: productCart.status,
      };
    }),
  });
  try {
    const savedPaymentCart = await paymentCart.save();
    res.json(savedPaymentCart);
  } catch (err) {
    res
      .status(500)
      .send({ err, paymentCart, message: "Error in Create Payment Cart." });
  }
});

router.put("/:productId", async (req, res) => {
  try {
    const paymentCart = await PaymentCart.findById(req.params.productId);
    if (paymentCart) {
      // id: req.body.title,
      (paymentCart.firstName = req.body.firstName),
        (paymentCart.lastName = req.body.lastName),
        (paymentCart.phoneNumber = req.body.phoneNumber),
        (paymentCart.email = req.body.email),
        (paymentCart.address = req.body.address),
        (paymentCart.city = req.body.city),
        (paymentCart.note = req.body.note),
        (paymentCart.date = req.body.date),
        (paymentCart.orderPayment = req.body.orderPayment),
        (paymentCart.subtotalCart = req.body.subtotalCart),
        (paymentCart.status = req.body.status),
        (paymentCart.password = req.body.password),
        (paymentCart.avatar = req.body.avatar),
        (paymentCart.dateofbirth = req.body.dateofbirth),
        (paymentCart.codeorders = req.body.codeorders),
        (paymentCart.productCart = req.body.productCart.map((productCart) => {
          return {
            _id: productCart._id,
            title: productCart.title,
            description: productCart.description,
            image1: productCart.image1,
            image2: productCart.image2,
            price: productCart.price,
            quantity: productCart.quantity,
            size: productCart.size,
            status: productCart.status,
          };
        }));
      const updatedPaymentCart = await paymentCart.save();
      if (updatedPaymentCart) {
        res.status(201).send(updatedPaymentCart);
      }
    }
  } catch (error) {
    res.status(500).send({ error, message: "Error in Updated Product." });
  }
});
router.delete("/:paymentCartId", async (req, res) => {
  try {
    const removedPaymentCartId = await PaymentCart.remove({
      _id: req.params.paymentCartId,
    });
    res.json(removedPaymentCartId);
  } catch (err) {
    res.status(500).send({ err, message: "Error in Delete Product." });
  }
});

module.exports = router;
