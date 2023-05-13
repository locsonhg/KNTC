import Modal from "../../../../../../components/uielements/modal";
import {
  ModalBodyWrapper,
  ModalForm,
  ModalTable,
  ModalTableBody,
  ModalTableHeader,
} from "../../../TiepDanGianTiep/styled";
import Form from "../../../../../../components/uielements/form";
import { Col, Row, message } from "antd";
import {
  Button,
  Input,
} from "../../../../../../components/uielements/exportComponent";
import { FilterOutlined } from "@ant-design/icons";
import BoxTable from "../../../../../../components/utility/boxTable";
import { useEffect, useState } from "react";
import api from "../../config";
import { useDispatch } from "react-redux";
import actions from "../../../../../redux/NghiepVu/TiepDanTrucTiep/action";

function ModalKiemTraTrungDon({ isModalOpen, onCancel, onOk, data, ...props }) {
  const [danhSachDonTrung, setDanhSachDonTrung] = useState([]);
  const [dataFilter, setDataFilter] = useState();

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const { hoTen, fullAddress } = data;

  const columns = [
    {
      title: "STT",
      key: "STT",
      render: (_, record, index) => index + 1,
      align: "center",
    },
    {
      title: "Lần trùng",
      dataIndex: "SoLan",
      key: "SoLan",
      align: "center",
    },
    {
      title: "Cơ quan tiếp nhận",
      dataIndex: "TenCoQuan",
      key: "TenCoQuan",
    },
    {
      title: "Họ và Tên",
      dataIndex: "HoTen",
      key: "HoTen",
    },
    {
      title: "Địa chỉ",
      dataIndex: "DiaChiCT",
      key: "DiaChiCT",
    },
    {
      title: "Nội dung đơn",
      dataIndex: "NoiDungDon",
      key: "NoiDungDon",
    },
    {
      title: "Loại đơn",
      dataIndex: "TenLoaiKhieuTo",
      key: "TenLoaiKhieuTo",
    },
    {
      title: "Thao tác",
      key: "ThaoTac",
      render: (_, record) => (
        <Button onClick={() => handleDonTrung(record)}>Trùng đơn</Button>
      ),
      align: "center",
    },
  ];

  const handleDonTrung = (record) => {
    dispatch(actions.setDonThuID(record.DonThuID));
    onCancel();
  };

  const getListDonTrung = async (data) => {
    try {
      let res = await api.CheckTrungDon(data);
      let { Data, Status, Message } = res.data;
      if (Status === 1) {
        setDanhSachDonTrung(Data);
      } else {
        message.error(Message);
        setDanhSachDonTrung([]);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const handleSubmit = (values) => {
    let newValues = Object.entries(values).filter(
      ([, value]) => value !== undefined && value !== ""
    );
    let dataFilter = {};
    newValues.forEach(([name, value]) => {
      dataFilter[name] = value;
    });
    getListDonTrung(dataFilter);
  };

  const handleCancel = () => {
    form.resetFields();
    setDanhSachDonTrung([]);
    onCancel();
  };

  useEffect(() => {
    let filterData = { hoTen: hoTen, diachi: fullAddress };
    form.setFieldsValue(filterData);
    if (isModalOpen)
      if (hoTen) {
        getListDonTrung(filterData);
      } else {
        setDanhSachDonTrung([]);
      }
  }, [isModalOpen, hoTen]);

  return (
    <Modal
      title="Kiểm tra trùng đơn"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
        <Button type={"primary"} onClick={handleCancel}>
          Xong
        </Button>,
      ]}
      width={1000}
    >
      <ModalBodyWrapper>
        <ModalForm>
          <Form
            name="formModalKiemTraTrungDon"
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Row gutter={[24, 0]}>
              <Col className="gutter-row" span={12}>
                <Form.Item name="hoTen" label="Họ và Tên">
                  <Input />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={12}>
                <Form.Item name="noidungdon" label="Nội dung đơn">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[24, 0]}>
              <Col className="gutter-row" span={12}>
                <Form.Item name="cmnd" label="CCCD/CMTND">
                  <Input />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={12}>
                <Form.Item name="diachi" label="Địa chỉ">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[24, 0]}>
              <Col className="gutter-row align-center" span={24}>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<FilterOutlined />}
                >
                  Kiểm tra
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalForm>

        <ModalTable>
          <ModalTableHeader>
            Tổng số đơn tìm thấy: {danhSachDonTrung.length} đơn thư
          </ModalTableHeader>
          <ModalTableBody>
            <BoxTable
              columns={columns}
              dataSource={danhSachDonTrung}
              // pagination={false}
            />
          </ModalTableBody>
        </ModalTable>
      </ModalBodyWrapper>
    </Modal>
  );
}

export default ModalKiemTraTrungDon;
