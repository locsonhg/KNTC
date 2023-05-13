import React, { useEffect, useState } from "react";

import { Button, Col, Form, Input, Row, Collapse } from "antd";
import { REQUIRED } from "../../../../../settings/constants";
import { DatePicker } from "../../../../../components/uielements/exportComponent";
import Checkbox from "../../../../../components/uielements/checkbox";
import dayjs from "dayjs";
const { Item, useForm } = Form;

const TTHSTiepDan = ({ form, chiTietDonTrung, data, ...props }) => {
  const dateFormat = "DD/MM/YYYY";
  const [valueCheckBox, setValueCheckBox] = useState();
  useEffect(() => {
    if (chiTietDonTrung) {
      form.setFieldsValue({
        ...chiTietDonTrung,
        NgayTiep: dayjs(new Date(chiTietDonTrung?.NgayNhapDon_Str)) || dayjs(),
        SoDon: chiTietDonTrung?.SoDonThu,
      });
    }
  }, [chiTietDonTrung]);

  return (
    <Form
      form={form}
      name="ThongTinTiepNhanDonThuForm"
      layout="vertical"
      disabled={!!chiTietDonTrung}
      initialValues={{
        VuViecCu: true,
        NgayTiep: dayjs(),
      }}
    >
      <Row gutter={16}>
        <Col span={4}>
          <Form.Item label="Số thứ tự hồ sơ" name="SoDon" rules={[REQUIRED]}>
            <Input allowClear />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Ngày tiếp" name="NgayTiep" rules={[REQUIRED]}>
            <DatePicker format={dateFormat} />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label="Vụ việc cũ" name="VuViecCu" valuePropName="checked">
            <Checkbox />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default TTHSTiepDan;
