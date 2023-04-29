const express = require("express");
const app = express();
const cors = require("cors");


const serviceRoute=require("./routes/v1/service.route");
const orderRoute=require("./routes/v1/order.route");


//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
  });

app.use("/api/v1/service",serviceRoute)  
app.use("/api/v1/order",orderRoute)  


module.exports = app;