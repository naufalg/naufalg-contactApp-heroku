require("dotenv").config();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

const Contact = require("../../models/Contact");

module.exports = {
  getAllContact: (req, res) => {
    Contact.find()
      .then((result) => {
        res.status(200).json({
          message: "success get data Contact",
          result,
        });
      })
      .catch((err) => {
        res.status(404).json("cannot get data Contact");
      });
  },

  getContactById: async (req, res) => {
    const Contacts = await Contact.findById(req.params.id);

    try {
      res.json({
        message: "success get contact with id",
        Contacts,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  postContact: async (req, res) => {
    // console.log("Student", Student);
    const Contacts = await Contact.create(req.body);
    try {
      res.json({
        message: "success add contact",
        Contacts,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  updateContact: (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body)
      .then((result) => {
        result.save();
        res.status(200).send("update Contact success");
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },
  deleteContact: (req, res) => {
    Contact.findByIdAndDelete(req.params.id)
      .then((result) => {
        if (result) {
          res.status(200).send(`Contact id: ${req.params.id} has been deleted`);
        } else {
          res.send("delete Contact failed");
        }
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  },
};
