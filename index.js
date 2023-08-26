const express = require("express");
const app = express();


require("dotenv").config();
const PORT = process.env.PORT || 4000; 


app.use(express.json()); // 

//importing routes 
const todoRoutes = require("./routes/todo");

//mounting todo API routes
app.use("/api/v1", todoRoutes); // url will be like => PORT NO:/api/v1/{{our route}}


app.listen(PORT, () => {
  console.log(`Server successfully started at port ${PORT}`);
});


const dbConnect = require("./config/database");
dbConnect();


app.get("/", (req, res) => {
  res.send(`<h1> This is Homepage.</h1>`);
});
