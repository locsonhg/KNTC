import actions from "./action";

const initState = {
  DanhSachTrungDon: [],
  TotalRow: 0,
  DonThuID: 0,
  LoaiDoiTuongID: 0,
  tableLoading: true,
};

const ReducerTiepDan = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GETDATATIEPDANTRUCTIEP_INIT:
      return {
        ...state,
        tableLoading: true,
      };
    case actions.GETDATATIEPDANTRUCTIEP_INIT_SUCCESS:
      return {
        ...state,
        DanhSachTrungDon: payload.DanhSachTrungDon,
        TotalRow: payload.TotalRow,
        tableLoading: true,
      };
    case actions.GETDATATIEPDANTRUCTIEP_INIT_ERROR:
      return {
        ...state,
        DanhSachTrungDon: [],
        TotalRow: 0,
        tableLoading: false,
      };
    case actions.SETDONTHUTRUCTIEP:
      return {
        ...state,
        DonThuID: payload.DonThuID,
      };
    case actions.LOAIDOITUONG_ID:
      return {
        ...state,
        LoaiDoiTuongID: payload.ID,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ReducerTiepDan;
