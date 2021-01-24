import { put, takeLatest, call, delay } from "redux-saga/effects";
import {
  dataFetchInitated,
  dataFetchFailure,
  CART_ADD,
} from "../../actions/sagaActions";

function* handleDataFetchSagaemp(action) {
  try {

    yield put(dataFetchInitated());
    const response = action.payload;
    yield put(CART_ADD(response.data));
  } catch (error) {
    yield put(dataFetchFailure());
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchForHandleDataFetchemp() {
  yield takeLatest("MODAL_CLICKED", handleDataFetchSagaemp);
}
