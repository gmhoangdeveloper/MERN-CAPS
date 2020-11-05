const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  image: {
    type: String,
  },
});
module.exports = mongoose.model("Posts", PostSchema);
