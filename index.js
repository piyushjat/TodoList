const express = require("express");
const app = express();
const path=require("path");
var bodyParser = require('body-parser');
const cors=require("cors");
app.use(bodyParser.json()); 


require("dotenv").config();
const PORT = process.env.PORT || 4000; 


app.use(express.json()); // 

//importing routes 
const todoRoutes = require("./routes/todo");


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"));
});

//mounting todo API routes
app.use("/api/v1", todoRoutes); // url will be like => PORT NO:/api/v1/{{our route}}





const dbConnect = require("./config/database");
dbConnect();




app.listen(PORT, () => {
  console.log(`Server successfully started at port ${PORT}`);
});