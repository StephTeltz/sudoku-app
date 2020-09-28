import { crudControllers } from "../../utils/crud.js";
import { Board } from "./board.model.js";

export default crudControllers(new Board());
