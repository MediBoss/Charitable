const mongoose = require("mongoose");
const schema = mongoose.Schema;

module.exports = mongoose.model("User", {
  firstName: String,
  lastName: String,
  organization: String,
  emailAdress: String,
  charityId: {
    type: schema.Types.ObjectId,
    ref: "Charity"
  }
});
