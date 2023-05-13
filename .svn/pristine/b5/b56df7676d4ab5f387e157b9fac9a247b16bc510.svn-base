import actions from "./action";

const initState = {
  ThongTinBaoCao: {},
  TotalRow: 0,
  tableLoading: true,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.DASHBOARDTHONGTINBAOCAO_GET_LIST:
      return {
        ...state,
        tableLoading: true,
      };
    case actions.DASHBOARDTHONGTINBAOCAO_GET_LIST_SUCCESS:
      return {
        ...state,
        ThongTinBaoCao: payload.ThongTinBaoCao,
        TotalRow: payload.TotalRow,
        tableLoading: true,
      };
    case actions.DASHBOARDTHONGTINBAOCAO_GET_LIST_ERROR:
      return {
        ...state,
        ThongTinBaoCao: {},
        TotalRow: 0,
        tableLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
