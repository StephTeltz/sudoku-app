import { Router } from "express";
import controllers from "./board.controllers.js";

const cors = require("cors");
const bodyParser = require("body-parser");

const router = Router();
var jsonParser = bodyParser.json();
router.use(jsonParser);

// /sudoku/board
router
  .route("/")
  .get(cors(), controllers.getOne)
  .put(cors(), controllers.updateOne);

export default router;
