import {
    apiGetAuth,
    apiPostAuth
  } from "../../../api";
  import server from '../../../settings';
  
  const apiUrl = {
    danhsachcoquan: server.apiTemp + 'DanhMucCoQuanDonVi/GetListByUser_FoPhanQuyen',
    getallcoquan: server.apiTemp + 'DanhMucCoQuanDonVi/GetAll',
    danhsachdiagioi: server.apiTemp + 'danhmucdiagioihanhchinh/getallbycap',
    chitietcoquan: server.apiTemp + 'danhmuccoquandonvi/GetByIDAndCap',
    themcoquan: server.apiTemp + 'danhmuccoquandonvi/Insert',
    suacoquan: server.apiTemp + 'danhmuccoquandonvi/Update',
    xoacoquan: server.apiTemp + 'danhmuccoquandonvi/Delete',
    listbyuser: server.apiTemp + 'DanhMucCoQuanDonVi/GetListByUser',
    checkmacq: server.apiTemp + 'DanhMucCoQuanDonVi/CheckMaCQ',
  };
  const api = {
    danhSachCoQuan: (param) => {
      return apiGetAuth(apiUrl.danhsachcoquan, {
        ...param,
      });
    },
    danhSachDiaGioi: (param) => {
      return apiGetAuth(apiUrl.danhsachdiagioi, {
        ...param,
        ID: param.ID ? param.ID : 0
      });
    },
    chiTietCoQuan: (param) => {
      return apiGetAuth(apiUrl.chitietcoquan, {
        ...param
      });
    },
    themCoQuan: (param) => {
      return apiPostAuth(apiUrl.themcoquan, {
        ...param
      });
    },
    suaCoQuan: (param) => {
      return apiPostAuth(apiUrl.suacoquan, {
        ...param
      });
    },
    xoaCoQuan: (param) => {
      return apiPostAuth(apiUrl.xoacoquan, {
        ...param
      });
    },
    AllCoQuan: () => {
      return apiGetAuth(apiUrl.getallcoquan);
    },
    ListByUser: () => {
      return apiGetAuth(apiUrl.listbyuser)
    },
    CheckMaCQ: (param) => {
      return apiGetAuth(apiUrl.checkmacq, {
        ...param
      })
    }
  };
  
  export default api;