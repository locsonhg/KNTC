import { Modal, Table, Tooltip, message, DatePicker } from "antd";
import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import LayoutWrapper from "../../../../components/utility/layoutWrapper";
import PageHeader from "../../../../components/utility/pageHeader";
import PageAction from "../../../../components/utility/pageAction";
import Box from "../../../../components/utility/box";
import BoxFilter from "../../../../components/utility/boxFilter";
import BoxTable from "../../../../components/utility/boxTable";
import Checkbox from "../../../../components/uielements/checkbox";
import ChiTietDonThu from "../SoTiepDanTrucTiep/modalChiTiet"

import {
  Button,
  InputSearch,
  Select,
} from "../../../../components/uielements/exportComponent";
import {
  changeUrlFilter,
  getDefaultPageSize,
  getFilterData,
  getRoleByKey,
} from "../../../../helpers/utility";
import Wrapper, {
  FooterPageAction,
  ButtonList,
  ButtonCancel,
  ButtonCancelPrimary,
  ButtonPrint,
  ButtonCancelForm,
} from "../SoTiepDanTrucTiep/styled";
import { useKey } from "../../../CustomHook/useKey";
import queryString from "query-string";
import api from "./config";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { CheckboxGroup } from "../../../../components/uielements/checkbox";
import FormSearch from "./FormSearch";
import Collapse from "../../../../components/uielements/collapse";
import actions from "../../../redux/NghiepVu/XuLyDonThu/action";


const XuLyDonThu = (props) => {
  document.title = "Xử lý đơn thư";
  const [filterData, setFilterData] = useState(
    queryString.parse(props.location.search)
  );
  const { Panel } = Collapse;

  // const [dataModalAddEdit, setDataModalAddEdit] = useState({});
  // const [visibleModalAddEdit, setVisibleModalAddEdit] = useState(false);
  // const [action, setAction] = useState("");
  // const [modalKey, inceaseModalKey] = useKey();
  const [selectedRowsKey, setSelectedRowsKey] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isPhanXyLy, setIsPhanXuLy] = useState(false)
  const [ThongTinDonThu, setThongTinDonThu] = useState({})
  const [step, setStep] = useState(1)
  const [checkButtonEdit, setCheckButtonEdit] = useState(false);
  const [data, setData] = useState()


  const dispatch = useDispatch()
  const dataDonThuXL = useSelector(state => state.ReducerXuLyDonThu.DanhSachDonThuCanXuly)

  useEffect(() => {
    changeUrlFilter(filterData);
    dispatch(actions.getData(filterData))
  }, [filterData]);

  useEffect(() => {
    dispatch(actions.getData(filterData))
  }, []);


  const renderThaoTac = (record) => {
    return (
      <div className={"action-btn"}>
        {/* {role.edit ? */}
        {/* <Tooltip title={"Sửa"}>
          <EditOutlined onClick={() => showModalEdit(record.DanTocID)} />
        </Tooltip> */}
        {/* : ""} */}
        {/* {role.delete ? */}
        {/* <Tooltip title={"Xóa"}>
          <DeleteOutlined onClick={() => deleteModalAddEdit(record.DanTocID)} />
        </Tooltip> */}
        {/* : ""} */}
      </div>
    );
  };


  // const { DanhSachDanToc, TotalRow, role } = props;
  const PageNumber = filterData.PageNumber
    ? parseInt(filterData.PageNumber)
    : 1;
  const PageSize = filterData.PageSize
    ? parseInt(filterData.PageSize)
    : getDefaultPageSize();


  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log("selectedRows: ", selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      setCheckButtonEdit(selected);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      setCheckButtonEdit(selected);
    },
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

  const columnSoTiepCongDan = [
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
      width: "7%",
    },
    {
      title: "Nguồn đơn đến",
      dataIndex: "NguonDonDen",
      align: "left",
      width: "10%",
    },
    {
      title: "Tên chủ đơn",
      dataIndex: "TenChuDon",
      align: "left",
      width: "15%",
      // render: (_, record) => renderHoTen(record),
    },
    {
      title: "Nội dung",
      dataIndex: "NoiDungDon",
      align: "left",
      width: "25%",
    },
    {
      title: "Loại đơn",
      dataIndex: "TenLoaiKhieuTo",
      width: "7%",
      align: "center",
    },
    {
      title: "Hạn xử lý",
      dataIndex: "HanXuLy",
      width: "7%",
      align: "center",
    },
    {
      title: "Ngày XL còn lại",
      dataIndex: "NgayXuLyConLai",
      width: "10%",
      align: "center",
    },
    {
      title: "Hướng xử lý",
      dataIndex: "HuongXuLy",
      width: "7%",
      align: "center",
    },
    {
      title: "Trạng thái",
      dataIndex: "TrangThai",
      width: "7%",
      align: "center",
    },
  ];
  const handleDetailRowTable = (record, index) => {
    // setStep(2)
    setFilterData({ ...filterData, step: 2 })
    console.log(record, 'record')
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModaPrint, setModalPrin] = useState(false);
  const showModalList = () => {
    // setIsModalOpen(true);
    setModalPrin(true);
  };
  const showModalChiTiet = (record) => {
    setIsModalOpen(true);
    setDataEdit(record)
    console.log(record)
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setModalPrin(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setModalPrin(false);
  };
  //buttadd
  // const showModalAdd = () => {
  //   setAction("add");
  //   setDataModalAddEdit({});
  //   inceaseModalKey();
  //   setVisibleModalAddEdit(true);
  // };
  return (
    <LayoutWrapper>
      <PageHeader>Danh sách đơn thư cần phân xử lý</PageHeader>
      <PageAction>
        {/* {isPhanXyLy ?  <Button type="primary" onClick={showModalAdd}>
          <PlusOutlined />
          Phân xử lý
        </Button> : null} */}

        {/* <ButtonPrint type="primary" onClick={showModalList}>
          In Danh Sách
        </ButtonPrint> */}
        {checkButtonEdit == true ? (
          <>
            <Button type="primary">Trình lãnh đạo</Button>
          </>
        ) : (
          <></>
        )}

      </PageAction>
      <Box>
        {/* <FormSearch /> */}
        <Collapse defaultActiveKey={["1", "2", "3", "4", "5", "6"]}>
            <Panel className="collapse-item-reverse" key={1}>
              <FormSearch ></FormSearch>
            </Panel>
          </Collapse>
      </Box>
      <Box>
        {/* <TableDetail
          // rowSelection={rowSelection}
          // handleDetailRowTable={handleDetailRowTable}
          // columns={columns}
          // dataTable={DataTemp}
          // setFilterData={setFilterData}
          // filterData={filterData}
        /> */}
        <BoxTable
          columns={columnSoTiepCongDan}
          dataSource={customData(dataDonThuXL)}
          onRow={(record, rowIndex) => {
            return {
              onClick: () => showModalChiTiet(record),
            };
          }}
          rowSelection={{
            ...rowSelection,
          }}
        />
        <ChiTietDonThu
          title="Chi tiết đơn thư"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          dataEdit={data}
        />
      </Box>
      {/* <ModalChiTiet
        title="Chi tiết đơn thư"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      /> */}
      {/* <ModalList open={isModalOpen} onOk={handleOk} onCancel={handleCancel} /> */}
      {/* <ModalList
        open={isModaPrint}
        onOk={handleOk}
        onCancel={handleCancel}
      /> */}

    </LayoutWrapper>
  );
};

function mapStateToProps(state) {
  // return {
  //   ...state.ReducerDanToc,
  //   role: getRoleByKey(state.Auth.role, "quan-ly-nam-hoc"),
  // };
}

export default connect(mapStateToProps, actions)(XuLyDonThu);
