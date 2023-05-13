import { Col, Form, Row } from "antd";
import Collapse from "../../../../components/uielements/collapse";
import PanelBox, {
  PanelBoxSection,
} from "../TiepDanGianTiep/components/PanelBox";
import { REQUIRED } from "../../../../settings/constants";

import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "../../../../components/uielements/exportComponent";
import { ButtonCancelForm } from "./styled";
import BoxTable from "../../../../components/utility/boxTable";
import ModalThemFileDinhKem from "../TiepDanGianTiep/components/modalThemFileDinhKem";

function XuLyDon(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { Panel } = Collapse;
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
      //   render: (_, record) => renderFileDinhKem(record),
    },
    {
      title: "Thao tác",
      width: "10%",
      align: "center",
      //   render: (_, record) => renderThaoTac(record),
    },
  ];
  const OpenModalThemFile = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Collapse>
      <Panel header="Hướng xử lý">
        <PanelBoxSection border={"none"}>
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Hướng xử lý"
                name="LoaiKhieuTo1ID"
                rules={[REQUIRED]}
              >
                <Select>
                  <Option>Trần tuấn</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item
                label="Lãnh đạo ký"
                name="LoaiKhieuTo2ID"
                rules={[REQUIRED]}
              >
                <Select>
                  <Option>Trần tuấn</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </PanelBoxSection>
        <PanelBoxSection>
          <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <Form.Item
                label="Ý kiến xử lý"
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
              <Form.Item label="File đính kèm" name="CoQuanGiaiQuyet">
                <ButtonCancelForm
                  style={{ color: "#fff" }}
                  onClick={OpenModalThemFile}
                >
                  Chọn File
                </ButtonCancelForm>
                <span style={{ color: "red", marginLeft: "5px" }}>
                  (*) Chú ý: chỉ cho upload các định dạng file là .doc, .xlsx,
                  .pdf, .jpeg, .png
                </span>
              </Form.Item>
            </Col>
          </Row>
          <BoxTable columns={columns} />
        </PanelBoxSection>
        <ModalThemFileDinhKem
          isModalOpen={isModalOpen}
          onCancel={handleCancel}
          onOk={handleOk}
        />
      </Panel>
    </Collapse>
  );
}

export default XuLyDon;
