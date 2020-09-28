import Server from "./server/server.js";

const PORT = 8080;
const HOST = "0.0.0.0";
const server = new Server(HOST, PORT, __dirname);
server.start();
