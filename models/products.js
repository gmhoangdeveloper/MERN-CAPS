const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
});

// module.exports = mongoose.model("products", PostSchema);
productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("products", productSchema);

// myModel.paginate().then({}) // Usage
