const { default: mongoose } = require("mongoose");

const serviceSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      description:{
        type: String,
        required: true,
        trim: true,
      } ,
      price:{
        type: Number,
        required: true,
        trim: true,
      },
      img:{
        type: String,
        required: true,
        trim: true,
      },
    },
      {
        timestamps: true,
      }
)

const Service=mongoose.model("Service",serviceSchema);
module.exports=Service;