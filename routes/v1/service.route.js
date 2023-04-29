const express=require("express");
const servicesController=require("../../controllers/services.controller")

const router=express.Router();

router.route("/")
.post(servicesController.createService)
.get(servicesController.findAllService);


router.route("/:id")
  .get(servicesController.findById)
  
  module.exports=router;