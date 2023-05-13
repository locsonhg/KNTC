const actions = {
    DANHMUCLOAIKETQUA_GET_LIST_REQUEST: 'DANHMUCLOAIKETQUA_GET_LIST_REQUEST',
    DANHMUCLOAIKETQUA_GET_LIST_REQUEST_SUCCESS: 'DANHMUCLOAIKETQUA_GET_LIST_REQUEST_SUCCESS',
    DANHMUCLOAIKETQUA_GET_LIST_REQUEST_ERROR: 'DANHMUCLOAIKETQUA_GET_LIST_REQUEST_ERROR',
    getList: (filterData) => ({
        type: actions.DANHMUCLOAIKETQUA_GET_LIST_REQUEST,
        payload: { filterData },
    }),
};

export default actions;
