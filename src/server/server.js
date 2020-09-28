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
    
    app.use(express.static(path.join(this.root, "build")));

    app.get("/", (req, res) => {
      res.sendFile(path.join(this.root, "build", "/index.html"));
    });

    // Use a specialized router rather than the top-level router (app)
    // In a larger application this would allow for encapsulation of route-
    // specific details and make it easier to scale
    app.use("/sudoku/board", boardRouter);

    console.log("Application live at http://localhost:8080/");
    return app.listen(this.port, this.host);
  }
}
