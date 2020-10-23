const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: String,
    photo: String,
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("contact", ContactSchema);

module.exports = Contact;
