import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import BoxTable from "../../../../components/utility/boxTable";
import actions from "../../../redux/NghiepVu/DonThuDaTiepNhan/action";
import LayoutWrapper from "../../../../components/utility/layoutWrapper";
import PageHeader from "../../../../components/utility/pageHeader";
import PageAction from "../../../../components/utility/pageAction";
import Box from "../../../../components/utility/box";
import {
  changeUrlFilter,
  getFilterData,
  getRoleByKey,
} from "../../../../helpers/utility";
import { useKey } from "../../../CustomHook/useKey";
import queryString from "query-string";
import FormSearchData from "./formSearchData";

import Wrapper, {
  FooterPageAction,
  ButtonList,
  ButtonCancel,
  ButtonCancelPrimary,
  ButtonPrint,
  ButtonCancelForm,
  ButtonDisabled,
} from "./styled";
import api from "../SoTiepDanTrucTiep/config";
import list from "../SoTiepDanTrucTiep/img/list.svg";
import print from "../SoTiepDanTrucTiep/img/printer.svg";
import work from "../SoTiepDanTrucTiep/img/working-with-laptop.svg";
import write from "../SoTiepDanTrucTiep/img/write.svg";
import { Tabs, Tooltip, Modal, message } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import { BgrColorTabs } from "./styled";
import ModalList from "./modalAddEdit";
import { Link } from "react-router-dom";
// import { Modal, ModalCustom } from "../../../../components/uielements/exportComponent";
import ModalChiTiet from "../SoTiepDanTrucTiep/modalChiTiet";
import Collapse from "../../../../components/uielements/collapse";
import { Button } from "../../../../components/uielements/exportComponent";
import err from "../SoTiepNhanGianTiep/img/error.svg";
import ModalInPhieu from "../SoTiepDanTrucTiep/ModalInPhieu";
import XuLyDon from "./xuLyDon";
import actionXuLyDon from "../../../redux/NghiepVu/TiepDanGianTiep/action";
import actionSuaDon from "../../../redux/NghiepVu/TiepDanTrucTiep/action";

const DeleteIcon = (image) => {
  return (
    <img
      src={image}
      alt=""
      style={{ width: "20px", height: "auto", margin: "0px 5px 3px 0px" }}
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

const UpdateIcon = (image) => {
  return (
    <img
      src={image}
      alt=""
      style={{ width: "20px", height: "auto", margin: "0px 5px 3px 0px" }}
    />
  );
};
const { Panel } = Collapse;

const QLNamHoc = (props) => {
  const { DonThuDaTiepNhan, TotalRow, role } = props;
  document.title = "Đơn thư đã tiếp nhận";
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalInPhieu, setIsModalOpenInPhieu] = useState(false);
  const [filterData, setFilterData] = useState(
    queryString.parse(props.location.search)
  );
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);
  const [checkButtonEdit, setCheckButtonEdit] = useState(false);
  const [checkDisable, setCheckDisable] = useState(false);
  const [rowSelected, setRowSelected] = useState([0]);

  useEffect(() => {
    props.getData(filterData);
  }, [filterData]);

  const DonThu = [
    {
      title: "STT",
      width: "5%",
      align: "center",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "Số đơn",
      dataIndex: "SoDonThu",
      align: "center",
      width: "10%",
    },
    {
      title: "Nguồn đơn đến",
      dataIndex: "NguonDonDens",
      align: "left",
      width: "15%",
    },
    {
      title: "Tên chủ đơn",
      dataIndex: "TenChuDon",
      align: "left",
      width: "20%",
      // render: (_, record) => renderHoTen(record),
    },
    {
      title: "Nội dung vụ việc",
      dataIndex: "NoiDungDon",
      align: "left",
      width: "30%",
    },
    {
      title: "Loại đơn",
      dataIndex: "TenLoaiKhieuTo",
      width: "10%",
      align: "center",
    },
    {
      title: "Ngày tiếp nhận",
      dataIndex: "NgayNhapDons",
      width: "15%",
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "StateName",
      width: "15%",
      align: "center",
    },
    {
      title: "Kết quả",
      dataIndex: "KetQuaTiep",
      width: "15%",
      align: "center",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    onSelect: (record, selected, selectedRows) => {
      if (selectedRows.length >= 1) {
        setCheckButtonEdit(true);
      } else if (selectedRows.length == 0) {
        setCheckButtonEdit(false);
      }

      if (selectedRows.length <= 1) {
        setCheckDisable(false);
      } else {
        setCheckDisable(true);
      }
      setRowSelected(selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      setCheckButtonEdit(selected);
      if (selectedRows.length == 0) {
        setCheckDisable(false);
      } else if (selectedRows.length >= 1) {
        setCheckDisable(true);
      }
    },
  };
  const showModalChiTiet = (record) => {
    setIsModalOpen(true);
    setDataEdit(record);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setIsModalOpenInPhieu(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalOpenInPhieu(false);
  };
  const customData = (data) => {
    let arr = [];
    data.forEach((item, index) =>
      arr.push({
        ...item,
        key: index,
      })
    );

    return arr;
  };
  const ModalPrint = () => {
    setIsModalOpenInPhieu(true);
  };
  const XuLyDon = () => {
    // dispatch(actionXuLyDon.setDonThuID(rowSelected[0]?.XuLyDonID));
    let XuLyDonID = rowSelected[0]?.XuLyDonID;
    props.history.push(`tiep-dan-gian-tiep?XuLyDonID=${XuLyDonID}`);
  };
  const SuaDon = () => {
    dispatch(actionSuaDon.setDonThuID(rowSelected[0]?.DonThuID));
    props.history.push("tiep-dan-truc-tiep");
  };
  const XoaDonThu = () => {
    Modal.confirm({
      title: "Xóa Dữ Liệu",
      content: "Bạn có muốn xóa đơn thư này không?",
      cancelText: "Không",
      okText: "Có",
      onOk: () => {
        // console.log(record.TiepDanKhongDonID)
        setConfirmLoading(true);
        api
          .XoaDonThu({ DonThuID: rowSelected[0]?.XuLyDonID })
          .then((res) => {
            if (res.data.Status > 0) {
              handleCancel();
              setConfirmLoading(false);
              props.getData({
                ...filterData,
                PageNumber:
                  Math.ceil((TotalRow - 1) / filterData.PageSize) <
                  filterData.PageNumber
                    ? Math.ceil((TotalRow - 1) / filterData.PageSize)
                    : filterData.PageNumber,
              });
              message.destroy();
              message.success(res.data.Message);
              setFilterData({
                ...filterData,
                PageNumber:
                  Math.ceil((TotalRow - 1) / filterData.PageSize) <
                  filterData.PageNumber
                    ? Math.ceil((TotalRow - 1) / filterData.PageSize)
                    : filterData.PageNumber,
              });
            } else {
              message.destroy();
              message.error(res.data.Message);
            }
          })
          .catch((error) => {
            message.destroy();
            message.error(error.toString());
          });
      },
    });
  };

  return (
    <Wrapper>
      <LayoutWrapper>
        <PageHeader>Đơn thư đã tiếp nhận</PageHeader>
        <PageAction>
          <ButtonPrint type="primary" icon={PrintIcon(print)}>
            <span> In danh sách </span>
          </ButtonPrint>
          {checkButtonEdit == true ? (
            <>
              <ButtonDisabled
                disabled={checkDisable}
                icon={UpdateIcon(list)}
                onClick={XuLyDon}
              >
                Xử lý đơn
              </ButtonDisabled>
              <ButtonDisabled
                disabled={checkDisable}
                icon={UpdateIcon(write)}
                onClick={SuaDon}
              >
                Sửa
              </ButtonDisabled>
              <ButtonCancelForm
                style={{ color: "#fff" }}
                icon={DeleteIcon(err)}
                onClick={XoaDonThu}
              >
                Xóa
              </ButtonCancelForm>
              <ButtonCancelPrimary
                style={{ color: "#fff" }}
                icon={PrintIcon(print)}
                onClick={ModalPrint}
              >
                In phiếu
              </ButtonCancelPrimary>
            </>
          ) : (
            <></>
          )}
        </PageAction>
        <Box>
          {/* Content */}

          <Collapse defaultActiveKey={["1", "2", "3", "4", "5", "6"]}>
            <Panel
              className="collapse-item-reverse"
              header="Tìm kiếm thông tin"
              key="1"
            >
              <FormSearchData dataSearch={setFilterData}></FormSearchData>
            </Panel>
          </Collapse>
          <BoxTable
            columns={DonThu}
            onRow={(record, rowIndex) => {
              return {
                onClick: () => showModalChiTiet(record),
              };
            }}
            rowSelection={{
              ...rowSelection,
            }}
            dataSource={customData(DonThuDaTiepNhan)}
          />

          {/* xử lý đơn */}
          {/* <XuLyDon /> */}
        </Box>
      </LayoutWrapper>
      <ModalChiTiet
        title="Chi tiết đơn thư"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        dataEdit={dataEdit}
        SuaDonThu={SuaDon}
      />
      <ModalInPhieu
        open={isModalInPhieu}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </Wrapper>
  );
};

function mapStateToProps(state) {
  return {
    ...state.DonThuDaTiepNhan,
    role: getRoleByKey(state.Auth.role, "quan-ly-nam-hoc"),
  };
}

export default connect(mapStateToProps, actions)(QLNamHoc);
