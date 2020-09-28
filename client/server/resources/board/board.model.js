import { generate, getRandom } from "./generator.js";
import Model from "../model.js";

export class Board extends Model {
  constructor() {
    super();
  }

  create() {
    const randomSeed = getRandom(9) + 1;
    const randomIndex = getRandom(81);
    return this.transform(generate(randomSeed, randomIndex));
  }

  update(reqBody) {
    let { cellId, cellValue } = reqBody;
    return this.transform(generate(cellValue, cellId));
  }

  // Helper function to transform a 2D array (internal format) to a 1D array (API format)
  transform(model) {
    const result = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        result.push(model[i][j]);
      }
    }
    return result;
  }
}
