import { Col, Row, Tooltip, message } from "antd";
import PanelBox, { PanelBoxSection } from "./PanelBox";
import Form from "../../../../../components/uielements/form";
import {
  Input,
  Selectv4,
  Textarea,
} from "../../../../../components/uielements/exportComponent";
import { REQUIRED } from "../../../../../settings/constants";
import BoxTable from "../../../../../components/utility/boxTable";
import { DeleteOutlined, DownloadOutlined } from "@ant-design/icons";
import ModalThemFileDinhKem from "./modalThemFileDinhKem";
import { useEffect, useState } from "react";
import api from "../config";

function HoSoTaiLieuDinhKem({ form, isModalOpen, onOk, onCancel, ...props }) {
  const [dataSource, setDataSource] = useState([]);

  const renderThaoTac = (record) => {
    return (
      <div className={"action-btn"}>
        {/* {role.delete ? */}
        <Tooltip title={"Xóa"}>
          <DeleteOutlined onClick={() => handleDeleteFile(record)} />
        </Tooltip>
        {/* : ""} */}
      </div>
    );
  };

  const renderFileDinhKem = (record) => {
    return (
      <div className={"action-btn"}>
        {/* {role.delete ? */}
        <Tooltip title={"Tải xuống"}>
          <DownloadOutlined
            onClick={() => handleDownload(record)}
            style={{ color: "blue" }}
          />
        </Tooltip>
        {/* : ""} */}
      </div>
    );
  };

  const handleDownload = (record) => {
    console.log(record.FileUrl, "fileUrl");
    message.success("Download success!");
  };

  const handleDeleteFile = (record) => {
    setDataSource((pre) => pre.filter((item) => item.ID !== record.ID));
  };

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();

      let [files, data] = values;

      files.forEach((file) => {
        formData.append("files", file);
      });

      let res = await api.ThemFileHoSo(formData);

      let { Status, Data, Message } = res.data;

      if (Status === 1) {
        let newData = data.map((item, index) => ({
          ID: dataSource.length + index + 1,
          ...item,
          FileUrl: Data[index].FileUrl,
        }));
        setDataSource((pre) => {
          return [...pre, ...newData];
        });
        message.success(Message);
      } else {
        let newData = data.map((item, index) => ({
          ID: dataSource.length + index + 1,
          ...item,
        }));
        setDataSource((pre) => {
          return [...pre, ...newData];
        });
        message.error(Message);
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      onOk();
    }
  };

  const columns = [
    {
      title: "STT",
      width: "10%",
      align: "center",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "Ngày cập nhật",
      width: "20%",
      align: "center",
      dataIndex: "NgayUp",
    },
    {
      title: "Tên hồ sơ/tài liệu",
      width: "45%",
      align: "center",
      dataIndex: "TenFile",
    },
    {
      title: "File đính kèm",
      width: "15%",
      align: "center",
      dataIndex: "FileUrl",
      render: (_, record) => renderFileDinhKem(record),
    },
    {
      title: "Thao tác",
      width: "10%",
      align: "center",
      render: (_, record) => renderThaoTac(record),
    },
  ];

  useEffect(() => {
    form.setFieldsValue({ themMoiFileHoSo: dataSource });
  }, [dataSource]);

  const handleResetForm = () => {
    setDataSource([]);
  };

  return (
    <Form form={form} name="HoSoTaiLieuDinhKemForm" layout="vertical">
      <PanelBox isShowHeader={false}>
        <PanelBoxSection border={"none"}>
          <Row gutter={16}>
            <Col className="gutter-row" span={16} offset={4}>
              <Form.Item name="themMoiFileHoSo" onReset={handleResetForm}>
                <BoxTable
                  columns={columns}
                  dataSource={dataSource}
                  pagination={false}
                  rowKey={(record) => record.ID}
                />
              </Form.Item>
            </Col>
          </Row>
        </PanelBoxSection>
      </PanelBox>
      <ModalThemFileDinhKem
        isModalOpen={isModalOpen}
        onCancel={onCancel}
        onOk={handleSubmit}
      />
    </Form>
  );
}

export default HoSoTaiLieuDinhKem;
