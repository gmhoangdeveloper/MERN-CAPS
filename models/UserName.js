const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const userNameSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  dateofbirth: {
    type: String,
  },
});

userNameSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("UserName", userNameSchema);
