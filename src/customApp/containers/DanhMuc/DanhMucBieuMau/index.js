import { Modal, Table, Tooltip, message, Select, Space } from "antd";
import actions from "../../../redux/DanhMuc/DanhMucBieuMau/actions";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import LayoutWrapper from "../../../../components/utility/layoutWrapper";
import PageHeader from "../../../../components/utility/pageHeader";
import PageAction from "../../../../components/utility/pageAction";
import Box from "../../../../components/utility/box";
import BoxFilter from "../../../../components/utility/boxFilter";
import BoxTable from "../../../../components/utility/boxTable";
import Checkbox from "../../../../components/uielements/checkbox";
import { apiUrl } from "./config";
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
import {
  EditOutlined,
  ArrowDownOutlined,
  PlusOutlined,
  DownloadOutlined,
  FieldTimeOutlined,
  FundViewOutlined,
  HistoryOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import ModalViewForm from "./modalViewForm";
import ModalViewHistory from "./modalViewHistory";
const { Option } = Select;

const StyledDisplay = styled.div`
  display: "flex";
`;
const StyledActions = styled.div`
  .ant-space-item {
    font-size: 20px;
  }
  .ant-space-item:hover {
    cursor: pointer;
  }
  .ant-table-tbody > tr > td a {
    color: black !important;
  }
`;
const QLNamHoc = (props) => {
  document.title = "Danh Mục Biểu Mẫu";
  const [filterData, setFilterData] = useState(
    queryString.parse(props.location.search)
  );
  const [dataModalAddEdit, setDataModalAddEdit] = useState({});
  const [previewLink, setPreviewlink] = useState({});
  const [visibleModalAddEdit, setVisibleModalAddEdit] = useState(false);
  const [action, setAction] = useState("");
  const [modalKey, inceaseModalKey] = useKey();
  const [selectedRowsKey, setSelectedRowsKey] = useState([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [download, setDownload] = useState();
  const StyledBoxAdd = styled.div`
    float: right;
  `;

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

  const showModalEdit = (id) => {
    const BieuMauID = id;
    // console.log(id);
    setAction("edit");
    api
      .ChiTietBieuMau({ BieuMauID })
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
  const Preview = (data) => {
    setPreviewlink(data);
    setVisibleModalAddEdit(true);
  };
  const hideModalAddEdit = () => {
    setAction("");
    setSelectedRowsKey([]);
    setDataModalAddEdit({});
    setVisibleModalAddEdit(false);
  };

  const submitModalAddEdit = (data) => {
    if (action === "add") {
      api
        .ThemBieuMau(data)
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
    if (action === "edit") {
      api
        .SuaBieuMau(data)
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

  // const onPreView = (record) => {
  //   // console.log(record.MaPhieuIn);
  //   api.BieuMauPreView({ fileName: record.MaPhieuIn });
  // };
  const deleteModalAddEdit = (BieuMauID) => {
    Modal.confirm({
      title: "Xóa Dữ Liệu",
      content: "Bạn có muốn xóa biểu mẫu này không?",
      cancelText: "Không",
      okText: "Có",
      onOk: () => {
        setConfirmLoading(true);
        api
          .XoaBieuMau(BieuMauID)
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
  // const renderThaoTac = (record) => {
  //   return (
  //     <div className={"action-btn"}>
  //       <StyledDisplay>
  //         <Tooltip title={" Xem biểu mẫu"}>
  //           <ModalViewForm />
  //         </Tooltip>

  //         <Tooltip title={"Cập nhật biểu mẫu"}>
  //           <Button
  //             type="primary"
  //             size="small"
  //             style={{ fontSize: "10px", margin: "0 10px" }}
  //             onClick={() => showModalEdit(record.BieuMauID)}
  //           >
  //             <EditOutlined style={{ fontSize: "10px" }} />
  //             Cập nhật biểu mẫu
  //           </Button>
  //         </Tooltip>

  //         <Tooltip title={" Tải biểu mẫu"}>
  //           <Button
  //             type="primary"
  //             size="small"
  //             style={{ fontSize: "10px" }}
  //             onClick={() => onDownloadFile(record)}
  //           >
  //             <ArrowDownOutlined style={{ fontSize: "10px" }} />
  //             Tải biểu mẫu
  //           </Button>
  //         </Tooltip>

  //         <Tooltip title={" Xem lịch sử"}>
  //           <ModalViewHistory data={record} />
  //         </Tooltip>
  //       </StyledDisplay>
  //     </div>
  //   );
  // };
  const handleActions = (record) => {
    return (
      <StyledActions>
        <Space size={"middle"}>
          <ModalViewForm data={record} />
          <EditOutlined onClick={() => showModalEdit(record.BieuMauID)} />
          <DeleteOutlined
            onClick={() => {
              deleteModalAddEdit(record.BieuMauID);
            }}
          />
          {record.FileUrl === "" ? (
            <a style={{ color: "#000" }}>
              <DownloadOutlined />
            </a>
          ) : (
            <a href={`${record.FileUrl}`}>
              <DownloadOutlined />
            </a>
          )}
          <ModalViewHistory data={record} />
        </Space>
      </StyledActions>
    );
  };
  const { DanhMucBieuMau, TotalRow, role } = props;
  // console.log(props);
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
      title: "Mã biểu mẫu",
      dataIndex: "MaPhieuIn",
      align: "center",
      width: "10%",
    },
    {
      title: "Tên biểu mẫu",
      dataIndex: "TenBieuMau",
      align: "left",
      width: "45%",
    },
    {
      title: "Cấp sử dụng",
      dataIndex: "CapID",
      align: "center",
      width: "10%",
      render: (_, record) => {
        return record.CapID === 3 ? "Xã" : "Tỉnh/Huyện";
      },
    },
    {
      title: "Đang sử dụng",
      dataIndex: "DuocSuDung",
      align: "center",
      width: "10%",
      render: (_, record) => {
        return <Checkbox checked={record.DuocSuDung}></Checkbox>;
      },
    },
    {
      title: "Thao tác",
      width: "15%",
      align: "center",
      render: (_, record) => handleActions(record),
    },
  ];
  return (
    <LayoutWrapper>
      <PageHeader>Danh Mục Biểu mẫu</PageHeader>
      <Box>
        <BoxFilter>
          <Select
            // // value={(filterData.CapID = 4)}
            style={{ width: "200px" }}
            // defaultValue={
            //   filterData.CapID
            //     ? filterData.CapID === 4
            //       ? "Biểu mẫu Tỉnh/Huyện"
            //       : "Biểu mẫu Xã"
            //     : ""
            // }
            // // defaultValue={
            // //   filterData.CapID === 4 ? "Biểu mẫu Tỉnh/Huyện" : "Biểu mẫu Xã"
            // // }
            allowClear
            placeholder={"Chọn cấp sử dụng"}
            onChange={(value) => onFilter(value, "CapID")}
          >
            <Option value={4}>Biểu mẫu tỉnh/huyện</Option>
            <Option value={3}>Biểu mẫu xã</Option>
          </Select>
          <InputSearch
            allowClear
            defaultValue={filterData.Keyword}
            placeholder={"Nhập mã hoặc tên biểu mẫu "}
            style={{ width: 300 }}
            onSearch={(value) => onFilter(value, "keyword")}
          />
          <StyledBoxAdd>
            <PageAction>
              <Button
                type="primary"
                onClick={() => {
                  alert("Chức năng này đang trong quá trình hoàn thiện!");
                }}
              >
                <DownloadOutlined />
                Tải danh sách biểu mẫu
              </Button>
              {/* {role ? role.add ?  */}
              <Button type="primary" onClick={showModalAdd}>
                <PlusOutlined />
                Thêm
              </Button>

              {/* //  : '' : ''} */}
            </PageAction>
          </StyledBoxAdd>
        </BoxFilter>
        <BoxTable
          columns={columns}
          dataSource={DanhMucBieuMau}
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
        DanhMucBieuMau={DanhMucBieuMau}
      />
      {/* <ModalViewForm
        visible={visibleModalAddEdit}
        // dataEdit={dataModalAddEdit}
        // action={action}
        dataEdit={previewLink}
        loading={confirmLoading}
        key={modalKey}
        // onCreate={submitModalAddEdit}
        onCancel={hideModalAddEdit}
        // DanhMucBieuMau={DanhMucBieuMau}
      /> */}
    </LayoutWrapper>
  );
};

function mapStateToProps(state) {
  // console.log(state);
  return {
    ...state.DanhMucBieuMau,
    role: getRoleByKey(state.Auth.role, "quan-ly-nam-hoc"),
  };
}

export default connect(mapStateToProps, actions)(QLNamHoc);
