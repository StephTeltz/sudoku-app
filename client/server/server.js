/* eslint-disable no-unused-vars */

import boardRouter from "./resources/board/board.router";

const express = require("express");
const cors = require("cors");
const path = require("path");

export default class Server {
  constructor(host, port, root) {
    this.host = host;
    this.port = port;
    this.root = root;
  }

  start() {
    const app = express();

    app.use(cors());

    // Serve client app at root
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('/', function(req, res) {
    
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

    /* const staticPath = path.join(this.root + "/static");

    app.use("/", express.static(this.root + "/index.js"));

    app.get("/", (req, res) => {
      res.sendFile(path.join(this.root + "/index.html"));
    }); */

    // Use a specialized router rather than the top-level router (app)
    // In a larger application this would allow for encapsulation of route-
    // specific details and make it easier to scale
    app.use("/sudoku/board", boardRouter);

    console.log(
      "Server hosting application at http://localhost:8080/ " +
        staticPath +
        " " +
        this.root
    );
    return app.listen(this.port, this.host);
  }
}
