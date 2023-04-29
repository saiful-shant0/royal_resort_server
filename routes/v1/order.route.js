const express = require("express");
const orderController = require("../../controllers/order.controller");

const router = express.Router();

router
  .route("/")
  .post(orderController.createOrder)
  .get(orderController.findAllOrder);

router
.route("/:id")
.get(orderController.findById)
.delete(orderController.deleteById)


module.exports = router;
