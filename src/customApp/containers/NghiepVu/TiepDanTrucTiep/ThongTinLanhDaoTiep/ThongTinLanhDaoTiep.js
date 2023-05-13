import { Col, Form, Input, Row, Button, Space } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Radio, { RadioGroup } from "../../../../../components/uielements/radio";

import PanelCustom, { PanelBoxSection } from "../PanelCustom";
const ITEM_LAYOUT_CUSTOM = {
  labelAlign: "left",
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};
const ThongTinLanhDaoTiep = ({ form, ...props }) => {
  const [lanhdao, setlanhDao] = useState({
    name: null,
    value: null,
  });
  const [valueRadio, setValueRadio] = useState(true);
  const [valueDangKy, setValueDangKy] = useState(true);

  const RadioCheck = (e) => {
    setValueRadio(e.target.value);
  };
  const DangKy = (e) => {
    setValueDangKy(e.target.value);
  };
  return (
    <Form
      form={form}
      name="thongtinlanhdaotiep"
      layout="vertical"
      initialValues={{
        lanhdaotiep: true,
        GapLanhDao: true,
        DangKyGapLanhDao: true,
      }}
    >
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item label="Lãnh đạo tiếp:" name={"GapLanhDao"}>
            <RadioGroup
              {...ITEM_LAYOUT_CUSTOM}
              style={{ marginLeft: "40%" }}
              onChange={RadioCheck}
              value={valueRadio}
            >
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </RadioGroup>
          </Form.Item>
        </Col>
        {!valueRadio ? (
          ""
        ) : (
          <Col span={8}>
            <Form.Item label="Tên lãnh đạo" name={"TenLanhDaoTiep"}>
              <Input />
            </Form.Item>
          </Col>
        )}
      </Row>

      <Row gutter={16}>
        <Col span={13}>
          <Form.List name="ThanhPhanThamGia">
            {(fields, { add, remove }) => (
              <>
                <Row gutter={16}>
                  <Col span={23}>
                    <Row gutter={16}>
                      <Col span={23}>
                        <Form.Item>
                          <span>Thành phần tham gia:</span>
                        </Form.Item>
                      </Col>
                      <Col span={1}>
                        <PlusCircleOutlined onClick={() => add()} />
                      </Col>
                      <Col span={14}>
                        <span>Tên cán bộ</span>
                      </Col>
                      <Col span={10}>
                        <span>Chức vụ</span>
                      </Col>
                      <Col span={24}>
                        {fields.map(({ key, name, ...restField }) => (
                          <Row gutter={16}>
                            <Col span={14}>
                              <Form.Item
                                {...restField}
                                name={[name, "TenCanBo"]}
                              >
                                <Input />
                              </Form.Item>
                            </Col>
                            <Col span={9}>
                              <Form.Item {...restField} name={[name, "ChucVu"]}>
                                <Input />
                              </Form.Item>
                            </Col>
                            <Col span={1}>
                              <DeleteOutlined onClick={() => remove(name)} />
                            </Col>
                          </Row>
                        ))}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </>
            )}
          </Form.List>
        </Col>
        <Col span={24}>
          <hr style={{ border: "1px solid #cf1322" }} />
        </Col>
        <Col span={4}>
          <Form.Item label="Đăng ký gặp lãnh đạo:" name={"DangKyGapLanhDao"}>
            <RadioGroup
              {...ITEM_LAYOUT_CUSTOM}
              style={{ marginLeft: "40%" }}
              onChange={DangKy}
              value={valueDangKy}
            >
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </RadioGroup>
          </Form.Item>
        </Col>
        {!valueDangKy ? (
          ""
        ) : (
          <Col span={8}>
            <Form.Item label="Tên lãnh đạo" name={"LanhDaoDangKy"}>
              <Input />
            </Form.Item>
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default ThongTinLanhDaoTiep;
