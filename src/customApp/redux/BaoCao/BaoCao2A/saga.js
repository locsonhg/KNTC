import { message } from "antd";
import { all, takeEvery, put, call } from "redux-saga/effects";
import api from "../../../containers/BaoCao/2AReport/config";
import actions from "./action";

function* getThongTinBaoCao({ payload }) {
  try {
    const response = yield call(api.ThongTinBaoCao, payload.filterData);

    yield put({
      type: actions.GETBAOCAO_INIT_REQUEST_SUCCESS,
      payload: {
        ThongTinBaoCao: response.data.Data,
        TotalRow: response.data.TotalRow,
      },
    });
  } catch (e) {
    yield put({
      type: actions.GETBAOCAO_INIT_REQUEST_ERROR,
    });
  }
}

export default function* rootSaga() {
  yield all([yield takeEvery(actions.GETBAOCAO_INIT_REQUEST, getThongTinBaoCao)]);
}
