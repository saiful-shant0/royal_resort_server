const Service = require("../models/Service");

exports.createService = async (req, res, next) => {
  try {
    await Service.create(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully created the Service",
    });
  } catch (error) {    res.status(400).json({
    status: "fail",
    error: "Couldn't create the Service"
  })}
};

exports.findAllService = async (req, res, next) => {
  try {
    const result=await Service.find()
    res.status(200).json(result);
  } catch (error) {  res.status(400).json({
    status: "fail",
    error: "Couldn't find the Service"
  })}
};

exports.findById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const result=await Service.findOne({ _id: id })
      if(!result){
        return res.status(400).json({
          status: "fail",
          error: "Couldn't find a service with this id"
        })
      }
      res.status(200).json(result);
    } catch (error) {  res.status(400).json({
      status: "fail",
      error: "Couldn't find a service with this id"
    })}
  };
  
