import Axios from "axios";
import { apiGetAuth, apiPostAuth } from "../../../../api";
import { getDefaultPageSize } from "../../../../helpers/utility";
import server from "../../../../settings";

const apiUrl = {
  checkTrungDon: server.v2Url + "TiepDanGianTiep/GetDonTrung",
  checkCoBaoNhieuDonTrung: server.v2Url + "TiepDanGianTiep/CheckSoDonTrung",
  dankhongden: server.v2Url + "TiepDan/Update_TiepDan_DanKhongDen",
  danhMucChucVu: server.v2Url + "DanhMucChucVu/DanhSachChucVu",
  ThemMoiDonThu: server.v2Url + "TiepDan/Insert_TiepDan",
};
// lay danh sach
const api = {
  CheckTrungDon: (param) => {
    return apiGetAuth(apiUrl.checkTrungDon, {
      ...param,
      // PageNumber: param.PageNumber ? param.PageNumber : 1,
      // PageSize: param.PageSize ? param.PageSize : getDefaultPageSize(),
    });
  },
  CheckCoBNSoDonTrung: (param) => {
    return apiGetAuth(apiUrl.checkCoBaoNhieuDonTrung, {
      ...param,
      PageNumber: param.PageNumber ? param.PageNumber : 1,
      PageSize: param.PageSize ? param.PageSize : getDefaultPageSize(),
    });
  },
  DanhMucChucVu: (param) => {
    return apiGetAuth(apiUrl.danhMucChucVu, {
      ...param,
    });
  },

  DanKhongDen: (param) => {
    return apiPostAuth(apiUrl.dankhongden, {
      ...param,
    });
  },

  ThemMoiDonThu: (param) => {
    return apiPostAuth(apiUrl.ThemMoiDonThu, param, {
      "Content-Type": "multipart/form-data",
    });
  },

  XoaDanToc: (param) => {
    return apiPostAuth(apiUrl.deleteDantoc, param);
  },
};

export default api;
