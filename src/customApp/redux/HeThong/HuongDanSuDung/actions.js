const actions = {
  HUONGDANSUDUNG_GET_LIST_REQUEST: "HUONGDANSUDUNG_GET_LIST_REQUEST",
  HUONGDANSUDUNG_GET_LIST_REQUEST_SUCCESS:
    "HUONGDANSUDUNG_GET_LIST_REQUEST_SUCCESS",
  HUONGDANSUDUNG_GET_LIST_REQUEST_ERROR:
    "HUONGDANSUDUNG_GET_LIST_REQUEST_ERROR",
  getList: (filterData) => ({
    type: actions.HUONGDANSUDUNG_GET_LIST_REQUEST,
    payload: { filterData },
  }),
};

export default actions;
