const actions = {
  GET_DATA_DONTHUDATIEPNHAN: "GET_DATA_DONTHUDATIEPNHAN",
  GET_DATA_DONTHUDATIEPNHAN_SUCCESS: "GET_DATA_DONTHUDATIEPNHAN_SUCCESS",
  GET_DATA_DONTHUDATIEPNHAN_ERROR: "GET_DATA_DONTHUDATIEPNHAN_ERROR",


  getData: (filterData) => ({
    type: actions.GET_DATA_DONTHUDATIEPNHAN,
    payload: { filterData },
  }),
};

export default actions;