import { Modal, Table, Tooltip, message } from "antd";
import actions from "../../../redux/DanhMuc/DanhMucQuocTich/actions";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import LayoutWrapper from "../../../../components/utility/layoutWrapper";
import PageHeader from "../../../../components/utility/pageHeader";
import PageAction from "../../../../components/utility/pageAction";
import Box from "../../../../components/utility/box";
import BoxFilter from "../../../../components/utility/boxFilter";
import BoxTable from "../../../../components/utility/boxTable";
import Checkbox from "../../../../components/uielements/checkbox";

import Select from "../../../../components/uielements/select";

import {
  Button,
  InputSearch,
} from "../../../../components/uielements/exportComponent";
import {
  changeUrlFilter,
  exportExcel,
  getDefaultPageSize,
  getFilterData,
  getRoleByKey,
} from "../../../../helpers/utility";
import { useKey } from "../../../CustomHook/useKey";
import queryString from "query-string";
import api from "./config";
import moment from "moment";
import ModalAddEdit from "./modalAddEdit";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
const DanhMucQuocTich = (props) => {
  document.title = "Danh Mục Quốc Tịch";

  const [filterData, setFilterData] = useState(
    queryString.parse(props.location.search)
  );
  const [dataModalAddEdit, setDataModalAddEdit] = useState({});
  const [visibleModalAddEdit, setVisibleModalAddEdit] = useState(false);
  const [action, setAction] = useState("");
  const [modalKey, inceaseModalKey] = useKey();
  const [selectedRowsKey, setSelectedRowsKey] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    changeUrlFilter(filterData);
    props.getList(filterData);
  }, [filterData]);

  useEffect(() => {
    props.getList(filterData);
  }, []);

  const onTableChange = (pagination, filters, sorter) => {
    let oldFilterData = filterData;
    let onOrder = { pagination, filters, sorter };
    let newFilterData = getFilterData(oldFilterData, null, onOrder);

    setFilterData(newFilterData);
    setSelectedRowsKey([]);
  };

  const onFilter = (value, property) => {
    let oldFilterData = filterData;
    let onFilter = { value, property };
    let newfilterData = getFilterData(oldFilterData, onFilter, null);
    //get filter data
    setFilterData(newfilterData);
    setSelectedRowsKey([]);
  };

  const showModalAdd = () => {
    setAction("add");
    setDataModalAddEdit({});
    inceaseModalKey();
    setVisibleModalAddEdit(true);
  };

  const deleteModalAddEdit = (QuocTichID) => {
    Modal.confirm({
      title: "Xóa Dữ Liệu",
      content: "Bạn có muốn xóa quốc tịch này không?",
      cancelText: "Không",
      okText: "Có",
      onOk: () => {
        setConfirmLoading(true);
        api
          .XoaQuocTich(QuocTichID)
          .then((res) => {
            if (res.data.Status > 0) {
              setConfirmLoading(false);

              props.getList({
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

  const showModalEdit = (id) => {
    const QuocTichID = id;
    setAction("edit");
    api
      .ChiTietQuocTich({ QuocTichID })
      .then((res) => {
        if (res.data.Status > 0) {
          setDataModalAddEdit(res.data.Data);
          inceaseModalKey();
          setVisibleModalAddEdit(true);
        } else {
          message.destroy();
          message.error(res.data.Message);
        }
      })
      .catch((error) => {
        message.destroy();
        message.error(error.toString());
      });
  };

  const hideModalAddEdit = () => {
    // setAction("");
    setSelectedRowsKey([]);
    setDataModalAddEdit({});
    setVisibleModalAddEdit(false);
  };

  const submitModalAddEdit = (data) => {
    setConfirmLoading(true);
    if (action === "add") {
      api
        .THemQuocTich(data)
        .then((res) => {
          setConfirmLoading(false);
          if (res.data.Status > 0) {
            message.destroy();
            message.success(res.data.Message);
            hideModalAddEdit();
            props.getList(filterData);
          } else {
            setConfirmLoading(false);
            message.destroy();
            message.error(res.data.Message);
          }
        })
        .catch((error) => {
          setConfirmLoading(false);
          message.destroy();
          message.error(error.toString());
        });
    }
    if (action === "edit") {
      api
        .CapNhatQuocTich(data)
        .then((res) => {
          if (res.data.Status > 0) {
            setConfirmLoading(false);
            message.destroy();
            message.success(res.data.Message);
            hideModalAddEdit();
            props.getList(filterData);
          } else {
            setConfirmLoading(false);
            message.destroy();
            message.error(res.data.Message);
          }
        })
        .catch((error) => {
          setConfirmLoading(false);
          message.destroy();
          message.error(error.toString());
        });
    }
  };

  const renderThaoTac = (record) => {
    return (
      <div className={"action-btn"}>
        {/* {role.edit ? */}
        <Tooltip title={"Sửa"}>
          <EditOutlined onClick={() => showModalEdit(record.QuocTichID)} />
        </Tooltip>
        {/* : ""} */}
        {/* {role.delete ? */}
        <Tooltip title={"Xóa"}>
          <DeleteOutlined
            onClick={() => deleteModalAddEdit(record.QuocTichID)}
          />
        </Tooltip>
        {/* : ""} */}
      </div>
    );
  };

  const { DanhSachQuocTich, TotalRow, role } = props;
  const PageNumber = filterData.PageNumber
    ? parseInt(filterData.PageNumber)
    : 1;
  const PageSize = filterData.PageSize
    ? parseInt(filterData.PageSize)
    : getDefaultPageSize();






  const columns = [
    {
      title: "STT",
      width: "5%",
      align: "center",
      render: (text, record, index) => (
        <span>{(PageNumber - 1) * PageSize + (index + 1)}</span>
      ),
    },
    {
      title: "Mã quốc tịch",
      dataIndex: "MaQuocTich",
      align: "left",
      width: "15%",
    },
    {
      title: "Tên quốc tịch",
      dataIndex: "TenQuocTich",
      align: "left",
      width: "25%",
    },
    {
      title: "Ghi chú",
      dataIndex: "GhiChu",
      align: "left",
      width: "35%",
    },
    {
      title: "Đang sử dụng",
      dataIndex: "TrangThai",
      align: "center",
      width: "10%",
      render: (text, record) => {
        return <Checkbox checked={record.TrangThai}></Checkbox>;
      },
    },
    {
      title: "Thao tác",
      width: "10%",
      align: "center",
      render: (text, record) => renderThaoTac(record),
    },
  ];

  return (
    <LayoutWrapper>
      <PageHeader>Danh Mục Quốc Tịch</PageHeader>
      <PageAction>
        {/* {role ? role.add ?  */}
        <Button type="primary" onClick={showModalAdd}>
          <PlusOutlined />
          Thêm mới
        </Button>
        {/* //  : '' : ''} */}
      </PageAction>
      <Box>
        <BoxFilter>
          <Select
            style={{ width: "200px" }}
            defaultValue={
              filterData.Status
                ? filterData.Status === "true"
                  ? "Đang sử dụng"
                  : "Không sử dụng"
                : undefined
            }
            placeholder={"Chọn trạng thái"}
            allowClear
            onChange={(value) => onFilter(value, "Status")}
          >
            <Option value={true}>Đang sử dụng</Option>
            <Option value={false}>Không sử dụng</Option>
          </Select>
          <InputSearch
            allowClear
            defaultValue={filterData.Keyword}
            placeholder={"Nhập mã hoặc tên quốc tịch"}
            style={{ width: 300 }}
            onSearch={(value) => onFilter(value, "keyword")}
          />
        </BoxFilter>
        <BoxTable
          size="large"
          columns={columns}
          dataSource={DanhSachQuocTich}
          onChange={onTableChange}
          pagination={{
            showSizeChanger: true,
            showTotal: (total, range) =>
              `Từ ${range[0]} đến ${range[1]} trên ${total} kết quả`,
            total: TotalRow,
            current: PageNumber,
            pageSize: PageSize,
          }}
        />
      </Box>
      <ModalAddEdit
        visible={visibleModalAddEdit}
        dataEdit={dataModalAddEdit}
        action={action}
        loading={confirmLoading}
        key={modalKey}
        onCreate={submitModalAddEdit}
        onCancel={hideModalAddEdit}
        DanhSachQuocTich={DanhSachQuocTich}
      />
    </LayoutWrapper>
  );
};

function mapStateToProps(state) {
  return {
    ...state.DanhMucQuocTich,
    role: getRoleByKey(state.Auth.role, "quan-ly-nam-hoc"),
  };
}

export default connect(mapStateToProps, actions)(DanhMucQuocTich);
