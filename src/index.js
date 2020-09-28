import Server from "./server/server.js";

const PORT = 8080;
const HOST = "0.0.0.0";
const root = __dirname;
console.log(root); // /dist
const server = new Server(HOST, PORT, root);
server.start();
