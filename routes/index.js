var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(
    'GET "/contact", GET "/contact/:id", POST "/contact", PUT "/contact/:id", DELETE "/contact/:id" '
  );
});

module.exports = router;
