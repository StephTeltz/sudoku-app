import { LOAD_BOARD, SET_LOCK } from "../constants/action-types";

export function loadBoard(payload) {
  return { type: LOAD_BOARD, payload };
}

export function setLockedCell(payload) {
  return { type: SET_LOCK, payload };
}
