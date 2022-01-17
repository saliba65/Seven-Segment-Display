import { put, takeLatest } from "redux-saga/effects";
import { GET } from "../../utils/constants/verbs";
import requestAPI from "../../helpers/requestHelpers";
import { GET_NUMBER } from "../../utils/constants/endpoints";
import { Types } from "../ducks/number";

function* getNumber() {
  try {
    const number = yield requestAPI({
      verb: GET,
      endPoint: GET_NUMBER,
    });
    console.log({ number });
    yield put({
      number,
      type: Types.GET_NUMBER_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: Types.GET_NUMBER_FAIL,
      ...error.response,
    });
  }
}

export function* watchSagas() {
  yield takeLatest(Types.GET_NUMBER, getNumber);
}
