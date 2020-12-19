require("dotenv").config();
require("express-async-errors");
const server = require("./api/server.js");

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
