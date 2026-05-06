const app = require("./app");
const connectDatabase = require("./config/database");

let isConnected = false;

const connectDBOnce = async () => {
  if (isConnected) return;

  await connectDatabase();
  isConnected = true;
};

module.exports = async (req, res) => {
  await connectDBOnce();
  return app(req, res);
};
