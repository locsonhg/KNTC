import {all, takeEvery, put, call} from "redux-saga/effects";
import api from '../../../containers/HeThong/XoaDonThuLoi/config';
import actions from './actions'
function* getList({payload}) {
  try {
    const response = yield call(api.DanhSachDonThuLoi,payload.filterData)
    yield put({
      type : actions.DANHSACHDONTHULOI_GET_LIST_REQUEST_SUCCESS,
      payload : {
        DanhSachDonThuLoi : response.data.Data,
        TotalRow : response.data.TotalRow
      }
    })
  }
  catch (e) {
    yield put({
      type : actions.DANHSACHDONTHULOI_GET_LIST_REQUEST_ERROR
    })
  }
}
export default function* rootSaga() {
  yield all([yield takeEvery(actions.DANHSACHDONTHULOI_GET_LIST_REQUEST, getList)]);
}