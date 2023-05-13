import React from "react";
import Modal from "../../../../components/uielements/modal";
import Form from "../../../../components/uielements/form";
import PanelBox, { PanelBoxSection } from "./PanelBox";
import Collapse from "../../../../components/uielements/collapse";
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
import Wrapper, {
  FooterPageAction,
  ButtonList,
  ButtonCancel,
  ButtonCancelPrimary,
  ButtonPrint,
  ButtonCancelForm,
} from "./styled";
import { ITEM_LAYOUT, REQUIRED } from "../../../../settings/constants";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useSelector } from "react-redux";

import Inputnumber from "../../../../components/uielements/InputNumber";
import TableCustom from "../../../../components/uielements/table";
import { Avatar, Card, Col, InputNumber, Row } from "antd";
import { NoneBorder, PaddingCardChiTietDonThu } from "./styled";
import ThongTinChiTietDT from "./ThongTinChiTietDT";
import pdf from "./img/pdf.png";
import HoSoDonThu from "./HoSoDonThu";
import TienTrinhXuLy from "./TienTrinhXuLy";
import api from "./config";
import print from "./img/printer.svg";
import write from "./img/write.svg";
import left from "./img/left.svg";
import deletered from "./img/delete-red.svg";
import ModalInPhieu from "./ModalInPhieu";
import { Link } from "react-router-dom";
import actionsTiepdan from "../../../redux/NghiepVu/TiepDanTrucTiep/action";

const { Meta } = Card;

export default function modalChiTiet(props) {
  const {
    open,
    onOk,
    onCancel,
    dataEdit,
    title,
    danhSachKhieuTo,
    XoaDonThu,
    SuaDonThu,
    setIsModalOpenChiTiet,
  } = props;
  const { Item, useForm } = Form;
  const { Panel } = Collapse;
  const [ThongTinChiTietDonThu] = useForm();
  const [HoSoDonThuForm] = useForm();
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (dataEdit) {
      api
        .ChiTietDonThu({
          DonThuID: dataEdit.DonThuID,
          XuLyDonID: dataEdit.XuLyDonID,
        })
        .then((res) => setData(res.data.Data));
    }
  }, [dataEdit]);

  const PdfIcon = (image) => {
    return (
      <img
        src={image}
        alt=""
        style={{ width: "100px", height: "auto", padding: "20px 10px" }}
      />
    );
  };
  const PrintIcon = (image) => {
    return (
      <img
        src={image}
        alt=""
        style={{ width: "20px", height: "auto", margin: "0px 5px 3px 0px" }}
      />
    );
  };
  const WrriteIcon = (image) => {
    return (
      <img
        src={image}
        alt=""
        style={{ width: "20px", height: "auto", margin: "0px 5px 3px 0px" }}
      />
    );
  };
  const DeleteIcon = (image) => {
    return (
      <img
        src={image}
        alt=""
        style={{ width: "20px", height: "auto", margin: "0px 5px 3px 0px" }}
      />
    );
  };
  const BackIcon = (image) => {
    return (
      <img
        src={image}
        alt=""
        style={{ width: "20px", height: "auto", margin: "0px 5px 3px 0px" }}
      />
    );
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      width={1500}
      footer={[
        <ButtonPrint
          style={{ color: "#fff" }}
          icon={PrintIcon(print)}
          onClick={showModal}
        >
          <span>In phiếu</span>
        </ButtonPrint>,
        <ButtonPrint
          style={{ color: "#fff", backgroundColor: "rgba(40, 120, 215, 1)" }}
          icon={WrriteIcon(write)}
          onClick={() => {
            SuaDonThu(dataEdit.DonThuID);
          }}
        >
          Sửa
        </ButtonPrint>,
        <Button
          onClick={() =>
            XoaDonThu({ TiepDanKhongDonID: dataEdit.TiepDanKhongDonID })
          }
          style={{ backgroundColor: "red", color: "#fff" }}
          icon={DeleteIcon(deletered)}
        >
          Xóa
        </Button>,
        <ButtonCancelPrimary
          key="back"
          onClick={onCancel}
          htmlType="submit"
          // style={{ backgroundColor: "#fa8c16" }}
          type="primary"
          icon={BackIcon(left)}
        >
          Trở về
        </ButtonCancelPrimary>,
      ]}
    >
      <Collapse defaultActiveKey={["1", "2", "3", "4", "5", "6"]}>
        <Panel header={"Thông tin tiếp nhận đơn thư "} key={"1"}>
          <ThongTinChiTietDT form={ThongTinChiTietDonThu} data={data} />
        </Panel>
        {/* ------   2     */}
        <Panel
          header={"Hồ sơ đơn thư"}
          key={"2"}
          className="collapse-item-reverse"
        >
          <HoSoDonThu data={data} danhSachKhieuTo={danhSachKhieuTo} />
        </Panel>
        {/* -------- 3 */}
        <Panel header={"Tiến trình xử lý"} key={"3"}>
          <TienTrinhXuLy data={data} />
        </Panel>
      </Collapse>
      <ModalInPhieu
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </Modal>
  );
}
