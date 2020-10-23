var express = require("express");
var router = express.Router();

const {
  getAllContact,
  getContactById,
  updateContact,
  deleteContact,
  postContact,
} = require("./controller.contact");

router.get("/", getAllContact);
router.get("/:id", getContactById);
router.post("/", postContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;
