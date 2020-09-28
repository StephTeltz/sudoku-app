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

    // Serve client app at root (__dirname and this.root is /dist/server)

    app.use(express.static(path.join(this.root, "build")));

    //app.use("/", express.static(this.root + "/index.js"));

    app.get("/", (req, res) => {
      res.sendFile(path.join(this.root, "build", "/index.html"));
    });

    /* app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname, "/index.html"));
    }); */

    /* const staticPath = path.join(this.root + "/static");

    app.use("/", express.static(this.root + "/index.js"));

    app.get("/", (req, res) => {
      res.sendFile(path.join(this.root + "/index.html"));
    }); */

    // Use a specialized router rather than the top-level router (app)
    // In a larger application this would allow for encapsulation of route-
    // specific details and make it easier to scale
    app.use("/sudoku/board", boardRouter);

    console.log("Application live at http://localhost:8080/");
    return app.listen(this.port, this.host);
  }
}
