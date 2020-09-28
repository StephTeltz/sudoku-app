/* eslint-disable */

import { ADD_ARTICLE, LOAD_BOARD, SET_LOCK } from "../constants/action-types";

const initialState = {
  board: [],
  locked: false,
  cellId: -1,
  cellValue: "",
};

function rootReducer(state = initialState, action) {
  if (action.type === LOAD_BOARD) {
    return Object.assign({}, state, {
      board: (state.board = action.payload),
    });
  }

  if (action.type === SET_LOCK) {
    const { isLocked, cellId, cellValue } = action.payload;
    return {
      ...state,
      locked: (state.locked = isLocked),
      cellId: (state.cellId = cellId),
      cellValue: (state.cellValue = cellValue),
    };
  }

  return state;
}

export default rootReducer;
