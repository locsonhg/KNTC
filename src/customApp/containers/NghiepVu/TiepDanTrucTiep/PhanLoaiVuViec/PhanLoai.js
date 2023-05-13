import { Col, Row, Form, Select } from "antd";
import { useEffect, useState } from "react";
import { REQUIRED } from "../../../../../settings/constants";
import api from "../../../DanhMuc/DMLoaiKhieuTo/config";

const PhanLoai = ({ form, chiTietDonTrung, ...props }) => {
  const [khieuTo, setKhieuTo] = useState();
  const [loaiKhieuNai, setLoaiKhieuNai] = useState([]);
  const [chitiet, setChiTiet] = useState([]);
  useEffect(() => {
    api.danhSachCoQuan().then((res) => setKhieuTo(res.data.Data));
  }, []);
  useEffect(() => {
    form.setFieldsValue({
      ...chiTietDonTrung,
    });
  }, [chiTietDonTrung]);
  // console.log(chiTietDonTrung);
  const changeLoaiKhieuTo = (value) => {
    khieuTo.map((item) => {
      if (item.LoaiKhieuToID == value) {
        setLoaiKhieuNai(item.DanhMucLoaiKhieuToCon);
      }
    });
  };
  const chiTietKhieuTo = (value) => {
    // form.setFieldsValue({ loaikhieunaitocao: null });
    loaiKhieuNai.map((item) => {
      if (item.LoaiKhieuToID == value) {
        setChiTiet(item.DanhMucLoaiKhieuToCon);
      }
    });
  };
  return (
    <Form form={form} name="phanloaivuviec" layout="vertical">
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item label="Loại đơn" name={"loaidon"}>
            <Select onChange={changeLoaiKhieuTo} allowClear>
              {khieuTo?.map((item) => (
                <Option value={item.LoaiKhieuToID} key={item.LoaiKhieuToID}>
                  {item.TenLoaiKhieuTo}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Loại khiếu nại, tố cáo"
            name={"loaikhieunaitocao"}
            // rules={[REQUIRED]}
          >
            <Select onChange={chiTietKhieuTo} allowClear>
              {loaiKhieuNai?.map((item) => (
                <Option value={item.LoaiKhieuToID}>
                  {item.TenLoaiKhieuTo}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Chi tiết loại khiếu nại, tố cáo"
            name={"chitietloaikhieunaitocao"}
          >
            <Select allowClear>
              {chitiet?.map((item) => (
                <Option value={item.LoaiKhieuToID}>
                  {item.TenLoaiKhieuTo}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default PhanLoai;
