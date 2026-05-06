const mongoose = require("mongoose");

const connectDatabase = async () => {
  mongoose.set("strictQuery", false);

  const uri = process.env.DB_URI;

  if (!uri) {
    throw new Error("MongoDB URI is missing");
  }

  const con = await mongoose.connect(uri);

  console.log(`MongoDB is connected to the host: ${con.connection.host}`);
};

module.exports = connectDatabase;
