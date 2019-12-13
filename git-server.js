const express = require("express");
const cors = require("cors");
const gitApi = require("@tinacms/api-git");
const server = express();

server.use(cors());
server.use("/___tina", gitApi.router());

const port = 8080;
server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});
