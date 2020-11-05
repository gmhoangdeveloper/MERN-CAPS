const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const paymentCartSchema = mongoose.Schema({
  
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    // required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  orderPayment: {
    type: String,
    required: true,
  },
  subtotalCart: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  
  },
  avatar: {
    type: String,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  codeorders:{
    type: String,
    required: true,
  },
  productCart: [
    {
      _id: {
        type: String,
      },
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      image1: {
        type: String,
      },
      image2: {
        type: String,
      },
      price: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
      size: {
        type: String,
      },
      status: {
        type: String,
      },
    },
  ],
});
paymentCartSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("paymentcart", paymentCartSchema);
