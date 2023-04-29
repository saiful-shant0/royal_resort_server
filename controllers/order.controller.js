const Order = require("../models/Order");

exports.createOrder = async (req, res, next) => {
  try {
    await Order.create(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully created the Order",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't create the Order",
    });
  }
};

exports.findAllOrder = async (req, res, next) => {

  const email = req.query.email;
  try {
    const result = await Order.find(email ? { email: email } : {});
    if (!result[0]) {
        return res.status(400).json({
          status: "fail",
          error: "Couldn't find Order",
        });
      }
      res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't Find the Order",
    });
  }
};

exports.findById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Order.findOne({ _id: id });
    if (!result) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't find a Order with this id",
      });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't find a Order with this id",
    });
  }
};

exports.deleteById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await Order.findOneAndDelete({ _id: id });
      if (!result) {
        return res.status(400).json({
          status: "fail",
          error: "Couldn't find a Order with this id",
        });
      }
      res.status(200).json({
        status: "Success",
        error: "Delete Successfully",
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        error: "Couldn't find a Order with this id",
      });
    }
  };
  