const actions = {
  PHANQUYEN_GET_INIT_DATA_REQUEST: 'PHANQUYEN_GET_INIT_DATA_REQUEST',
  PHANQUYEN_GET_INIT_DATA_REQUEST_SUCCESS: 'PHANQUYEN_GET_INIT_DATA_REQUEST_SUCCESS',
  PHANQUYEN_GET_INIT_DATA_REQUEST_ERROR: 'PHANQUYEN_GET_INIT_DATA_REQUEST_ERROR',
  getInitData: () => ({
    type: actions.PHANQUYEN_GET_INIT_DATA_REQUEST
  }),

  PHANQUYEN_GET_LIST_REQUEST: 'PHANQUYEN_GET_LIST_REQUEST',
  PHANQUYEN_GET_LIST_REQUEST_SUCCESS: 'PHANQUYEN_GET_LIST_REQUEST_SUCCESS',
  PHANQUYEN_GET_LIST_REQUEST_ERROR: 'PHANQUYEN_GET_LIST_REQUEST_ERROR',
  getList: (filterData) => ({
    type: actions.PHANQUYEN_GET_LIST_REQUEST,
    payload: {filterData}
  })
};
export default actions;