import React from "react";
import Modal from "../../../../components/uielements/modal";
import Form from "../../../../components/uielements/form";
import Collapse from "../../../../components/uielements/collapse";
import Box from "../../../../components/utility/box";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  DownloadOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import {
  Input,
  Selectv4,
  DatePicker,
  Button,
  Select,
  Option,
} from "../../../../components/uielements/exportComponent";
import { ITEM_LAYOUT, REQUIRED } from "../../../../settings/constants";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useSelector } from "react-redux";

import Inputnumber from "../../../../components/uielements/InputNumber";
import TableCustom from "../../../../components/uielements/table";
import { Avatar, Card, Col, InputNumber, Row, Divider } from "antd";
// import { NoneBorder, PaddingCardChiTietDonThu } from "./styled";
import ChiTietDonThu from "../SoTiepDanTrucTiep/modalChiTiet"

const { Meta } = Card;

export default function modalChiTiet(props) {
  const { open, onOk, onCancel, dataEdit, title } = props;
  const { Item, useForm } = Form;
  const { Panel } = Collapse;
  const [ThongTinChiTietDonThu] = useForm();
  const [HoSoDonThuForm] = useForm();
  const [TienTrinhXuLy] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewDetails, setIsViewDetails] = useState(false)
  const [data, setData] = useState()



  const showModalChiTiet = (record) => {
    setIsModalOpen(true);
    setData(record)
  };
  const handleOk = () => {
    setIsModalOpen(false);

  };
  const handleCancel = () => {
    setIsModalOpen(false);

  };


  useEffect(() => {
    ThongTinChiTietDonThu.setFieldsValue({ ...dataEdit });
  }, [dataEdit]);

  const columns1 = [
    {
      title: "STT",
      width: "5%",
      align: "center",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "Họ và tên ",
      dataIndex: "HoTen",
      align: "center",
      width: "15%",
    },
    {
      title: "CMND ",
      dataIndex: "CMDN",
      align: "center",
      width: "15%",
    },
    {
      title: "Giới tính ",
      dataIndex: "GioiTinh",
      align: "center",
      width: "5%",
    },
    {
      title: "Nghề nghiệp ",
      dataIndex: "NgheNghiep",
      align: "center",
      width: "10%",
    },
    {
      title: "Quốc tịch",
      dataIndex: "QuocTich",
      align: "center",
      width: "5%",
    },
    {
      title: "Dân tộc ",
      dataIndex: "DanToc",
      align: "center",
      width: "5%",
    },
    {
      title: "Địa chỉ ",
      dataIndex: "DiaChi",
      align: "center",
      width: "40%",
    },
  ]
  const data1 = [
    {
      key: 1,
      HoTen: "Nguyen Van A",
      GioiTinh: "Nam",
      DanToc: "Kinh",
      DiaChi: "Bà Rịa- Vũng Tàu"
    },
  ]

  const columns2 = [
    {
      title: "STT",
      width: "5%",
      align: "center",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "Số đơn thư ",
      dataIndex: "SoDonThu",
      align: "center",
      width: "10%",
    },
    {
      title: " # ",
      dataIndex: "ko",
      align: "center",
      width: "5%",
    },
    {
      title: "Nguồn đơn",
      dataIndex: "NguonDon",
      align: "center",
      width: "10%",
    },
    {
      title: "Ngày nhập ",
      dataIndex: "NgayNhap",
      align: "center",
      width: "10%",
    },
    {
      title: "Họ tên",
      dataIndex: "HoTen",
      align: "center",
      width: "10%",
    },
    {
      title: "Nội dung đơn ",
      dataIndex: "NoiDungDon",
      align: "center",
      width: "20%",
    },
    {
      title: "Loại đơn",
      dataIndex: "LoaiDon",
      align: "center",
      width: "10%",
    },
    {
      title: "Cơ quan tiếp nhận",
      dataIndex: "CoQuanTiepNhan",
      align: "center",
      width: "10%",
    },
    {
      title: "Hướng xử lý",
      dataIndex: "HuongXuLy",
      align: "center",
      width: "10%",
    },
  ]
  const data2 = [
    {
      key: 1,
      SoDonThu: "TCD7932",
      NguonDon: "Trực tiếp",
      NgayNhap: "23/03/2023",
      HoTen: "Nguyen Văn B",
      NoiDungDon: "Nguysd",
      LoaiDon: "Khiếu nại",
      CoQuanTiepNhan: "Ban tiếp công dân tỉnh",
      DonThuID: 40300,
      XuLyDonID: 0
    },
  ]

  const columns3 = [
    {
      title: "STT",
      width: "5%",
      align: "center",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "Số đơn thư ",
      dataIndex: "SoDonThu",
      align: "center",
      width: "10%",
    },
    {
      title: " Lần GQ ",
      dataIndex: "LanGQ",
      align: "center",
      width: "5%",
    },
    {
      title: "Nguồn đơn",
      dataIndex: "NguonDon",
      align: "center",
      width: "10%",
    },
    {
      title: "Ngày nhập ",
      dataIndex: "NgayNhap",
      align: "center",
      width: "10%",
    },
    {
      title: "Họ tên",
      dataIndex: "HoTen",
      align: "center",
      width: "10%",
    },
    {
      title: "Nội dung đơn ",
      dataIndex: "NoiDungDon",
      align: "center",
      width: "20%",
    },
    {
      title: "Loại đơn",
      dataIndex: "LoaiDon",
      align: "center",
      width: "10%",
    },
    {
      title: "Cơ quan tiếp nhận",
      dataIndex: "CoQuanTiepNhan",
      align: "center",
      width: "10%",
    },
    {
      title: "Hướng xử lý",
      dataIndex: "HuongXuLy",
      align: "center",
      width: "10%",
    },
  ]
  const data3 = [
    {
      key: 1,
      LanGQ: "1",
      SoDonThu: "TCD7932",
      NguonDon: "Trực tiếp",
      NgayNhap: "23/03/2023",
      HoTen: "Nguyen Văn B",
      NoiDungDon: "Nguysd",
      LoaiDon: "Khiếu nại",
      CoQuanTiepNhan: "Ban tiếp công dân tỉnh",
      DonThuID: 40300,
      XuLyDonID: 0
    },
  ]

  const columns = [
    {
      title: "STT",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên các bước thực hiện",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Thời gian thực hiện",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Người cập nhật",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Thao tác",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Ý kiến cán bộ thực hiện",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <Modal
      // title={` Xem chi tiết hồ sơ đơn thư`}
      // width={1800}
      // visible={true}
      // onOk={onOk}
      // footer={[
      //   <Button key="back" onClick={onCancel} htmlType="submit" type="primary">
      //     Trở về
      //   </Button>,
      // ]}
      title="Danh sách trùng đơn/ các lần tiếp nhận"
      open={open}
      onOk={onOk}
      width="100%"
      onCancel={onCancel}
      footer={[
        <div style={{ textAlign: "center", margin: "10px 0 10px" }}>
          <Button
            key="back"
            onClick={onCancel}
            style={{ background: "#FF0000", color: "#fff", margin: "10px 0 10px 30px" }}
          >
            Đóng
          </Button>
        </div>
      ]}
    >
      {/* <Box>Xem chi tiết hồ sơ đơn thư</Box> */}
      <p style={{fontWeight:600 , margin:"10px 0px 10px" ,fontSize:"16px"}}>Xem chi tiết thông tin đơn thư</p>
      <Collapse defaultActiveKey={["1", "2", "3", "4", "5", "6"]}>
        <Panel header={"Thông tin chung "} key={"1"}>
          <p style={{ fontWeight: 600 }}>Đối tượng khiếu nại</p>
          <div style={{ display: "flex"}}>
            <p style={{ fontWeight: 600 }}>Đối tượng khiếu nại :</p>
            <p>Cá nhân</p>
          </div>
          <Divider plain></Divider>
          <p style={{ fontWeight: 600 }}>Người đại diện (1)</p>
          <TableCustom
            columns={columns1}
            dataSource={data1}
          />
        </Panel>
        {/* ------   2     */}
        <>
        </>
        <Panel
          header={"Danh sách đơn thư trùng/ các lần tiếp nhận"}
          key={"2"}
        // className="collapse-item-reverse"
        >
          <TableCustom
            columns={columns2}
            dataSource={data2}
            onRow={(record, rowIndex) => {
              return {
                onClick: () => showModalChiTiet(record),
              };
            }}
          />
          <ChiTietDonThu
            title="Chi tiết đơn thư"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            dataEdit={data}
          />
          {/* <Divider style={{ color: 'red' }} onClick={() => setIsViewDetails(true)} >Danh sách các lần giải quyết</Divider>
          {
            isViewDetails ?
              <div>
                <>
                  <TableCustom
                    columns={columns3}
                    dataSource={data3}
                  />
                </>
              </div> : null
          } */}

        </Panel>
        {/* -------- 3 */}
        <Panel header={"Danh sách cần giải quyết"} key={"3"}>
          <TableCustom 
            columns={columns3}
            dataSource={data3}
          />
        </Panel>
      </Collapse>
    </Modal>
  );
}
