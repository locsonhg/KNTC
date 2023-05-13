import { Col, Row, Tooltip, message } from "antd";
import PanelBox, {
  PanelBoxSection,
} from "../../TiepDanGianTiep/components/PanelBox";
import {
  DownloadOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Form from "../../../../../components/uielements/form";
import BoxTable from "../../../../../components/utility/boxTable";
import {
  Button,
  Input,
  Selectv4,
  Textarea,
  TreeSelect,
} from "../../../../../components/uielements/exportComponent";
import { REQUIRED } from "../../../../../settings/constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DiaGioi from "../components/diaGioi";
import ModalThemFileDinhKem from "../../TiepDanGianTiep/components/modalThemFileDinhKem";
import api from "../../TiepDanGianTiep/config";

function TiepDanCoDonThu({ form, chiTietDonTrung, ...props }) {
  const [danhSachLoaiKhieuTo, setDanhSachLoaiKhieuTo] = useState([]);
  const [danhSachLoaiDon, setDanhSachLoaiDon] = useState([]);
  const [danhSachKhieuTo, setDanhSachKhieuTo] = useState([]);
  const [danhSachChiTietKhieuTo, setDanhSachChiTietKhieuTo] = useState([]);
  const [isModalOpen, setIsModalOpenThemFileDinhKem] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [valueFile, setValueFile] = useState();

  useEffect(() => {
    form.setFieldsValue({
      ...chiTietDonTrung,
    });
  }, [chiTietDonTrung]);
  const handleSubmit = async (values) => {
    setValueFile(values);
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
      setIsModalOpenThemFileDinhKem(false);
    }
  };
  const onCancel = () => {
    setIsModalOpenThemFileDinhKem(false);
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
    form.setFieldsValue({ themMoiFileHoSo: valueFile });
  }, [dataSource]);
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
    message.success("Download success!");
  };

  const handleDeleteFile = (record) => {
    setDataSource((pre) => pre.filter((item) => item.ID !== record.ID));
  };
  return (
    <Form form={form} name="ThongTinDonThuForm" layout="vertical">
      <PanelBox isShowHeader={false}>
        <PanelBoxSection title="Nơi phát sinh vụ việc" border={"none"}>
          <Row gutter={16}>
            <Col className="gutter-row" span={12}>
              <Form.Item
                label="Số nhà, tổ/thôn xóm/khu phố"
                name="DiaChiPhatSinh"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <DiaGioi
                form={form}
                label={{
                  tinh: "Chọn tỉnh",
                  huyen: "Chọn huyện",
                  xa: "Chọn xã",
                }}
              />
            </Col>
          </Row>
        </PanelBoxSection>
        <PanelBoxSection>
          <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <Form.Item
                label="Nội dung đơn"
                name="NoiDungDon"
                rules={[REQUIRED]}
              >
                <Textarea
                  autoSize={{
                    minRows: 6,
                    maxRows: 6,
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </PanelBoxSection>
        <PanelBoxSection>
          <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <Form.Item label="Cơ quan giải quyết" name="CoQuanGiaiQuyet">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </PanelBoxSection>
        <PanelBoxSection title={"Hồ sơ/tài liệu đính kèm"}>
          <Row gutter={16}>
            <Col span={2} offset={21}>
              <Button
                icon={<PlusOutlined />}
                onClick={() => {
                  setIsModalOpenThemFileDinhKem(true);
                }}
              >
                Thêm Tài liệu
              </Button>
            </Col>
            <Col span={16} offset={4}>
              <Form.Item name="themMoiFileHoSo">
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

export default TiepDanCoDonThu;
