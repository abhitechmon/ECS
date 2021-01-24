import { all, fork } from "redux-saga/effects";

import * as booksSagas from "./booksSagas";
import * as cart from "./CartSagas";

export default function* rootSaga() {
  yield all([...Object.values(booksSagas)].map(fork));
  yield all([...Object.values(cart)].map(fork));
}
