const actions = {
  NHATKYHETHONG_GET_LIST_REQUEST: 'NHATKYHETHONG_GET_LIST_REQUEST',
  NHATKYHETHONG_GET_LIST_REQUEST_SUCCESS: 'NHATKYHETHONG_GET_LIST_REQUEST_SUCCESS',
  NHATKYHETHONG_GET_LIST_REQUEST_ERROR: 'NHATKYHETHONG_GET_LIST_REQUEST_ERROR',
  getList: (filter) => ({
    type: actions.NHATKYHETHONG_GET_LIST_REQUEST,
    payload: {filter}
  }),
};

export default actions;