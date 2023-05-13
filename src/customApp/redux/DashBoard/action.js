const actions = {
  DASHBOARDTHONGTINBAOCAO_GET_LIST: "DASHBOARDTHONGTINBAOCAO_GET_LIST",
  DASHBOARDTHONGTINBAOCAO_GET_LIST_SUCCESS: "DASHBOARDTHONGTINBAOCAO_GET_LIST_SUCCESS",
  DASHBOARDTHONGTINBAOCAO_GET_LIST_ERROR: "DASHBOARDTHONGTINBAOCAO_GET_LIST_ERROR",

  getData: (filterData) => ({
    type: actions.DASHBOARDTHONGTINBAOCAO_GET_LIST,
    payload: { filterData },
  }),
};

export default actions;