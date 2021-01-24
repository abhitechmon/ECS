import { put, takeLatest, call, delay } from "redux-saga/effects";
import {
  dataFetchInitated,
  dataFetchFailure,
  dataFetchSuccess,
} from "../../actions/sagaActions";
import axios from "axios";

function* handleDataFetchSaga(action) {
  try {
    yield put(dataFetchInitated());

    const response = yield call(
      axios.get,
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json`
    );
    yield delay(2000);
    yield put(dataFetchSuccess(response));
    // console.log("saga " + response)
  } catch (error) {
    yield put(dataFetchFailure());
  }
}

export function* watchForHandleDataFetch() {
  yield takeLatest("HANDLER_CLICKED", handleDataFetchSaga);
}
