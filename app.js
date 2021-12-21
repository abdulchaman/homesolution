const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
const ejs = require("ejs");
const _ = require("lodash");
const request = require("request");
const date = require("./date")
const app = express();
const day = date.date();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
mongoose.connect("mongodb://localhost:27017/clientDB");
const clientSchema = {
  name: String,
  phone: Number,
  option: String,
  pDesc: String,
};
const Client = mongoose.model("Client", clientSchema);
app.get("/", (req, res) => {
  res.render("home");
});
app.post("/schdule", (req, res) => {
  const client = new Client({
    name: req.body.name,
    phone: req.body.phone,
    option: req.body.option,
    pDesc: req.body.pDesc,
  });
  client.save((err)=>{
      if(!err){
          res.send("Successfull!");
          
      }
  });
});
app.get("/admin",(req,res)=>{
    Client.find({},(err,resultFound)=>{
        if(!err){
            res.render("admin",{clients:resultFound,date:day})
        }
    })
})
app.listen(3000, () => {
  console.log("app has started");
});
