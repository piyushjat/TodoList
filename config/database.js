const mongoose = require("mongoose");

require("dotenv").config(); // loading environment variables from a .env file to process.env

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DC connection successful"))
    .catch((error) => {
      console.log("ISSUE IN DB");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
