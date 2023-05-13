import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Col, Row } from "antd";
import {
  FooterPageAction,
  ButtonList,
  ButtonCancel,
  ButtonCancelPrimary,
  ButtonPrint,
  ButtonCancelForm,
} from "./styled";
import filter from "./img/filter.svg";
import {
  DatePicker,
  Option,
  Select,
  Input,
} from "../../../../components/uielements/exportComponent";

export default function formListLeader(props) {
  const [dateTo, setDateTo] = useState();
  const [dateFrom, setDateFrom] = useState();

  const { setFilterData } = props;

  const onFinish = (values) => {
    let valuesConvert = {
      ...values,
      TuNgay: dateTo,
      DenNgay: dateFrom,
    };

    setFilterData(valuesConvert);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const ChangeDateTo = (date, dateString) => {
    setDateTo(dateString, "DD-MM-YYYY");
  };
  const ChangeDateFrom = (date, dateString) => {
    setDateFrom(dateString, "DD-MM-YYYY");
  };
  const FilterIcon = (image) => {
    return (
      <img
        src={image}
        alt=""
        style={{ width: "20px", height: "auto", margin: "0px 5px 3px 0px" }}
      />
    );
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 24,
      }}
      style={{
        width: "100%",
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row span={24} gutter={24}>
        <Col span={4}></Col>
        <Col span={4}>
          <Form.Item label="Từ ngày" name={"TuNgay"}>
            <DatePicker onChange={ChangeDateTo} allowClear value={dateTo} />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item label="Đến ngày" name={"DenNgay"}>
            <DatePicker onChange={ChangeDateFrom} allowClear value={dateFrom} />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Tìm theo tên lãnh đạo" name={"Keyword"}>
            <Input allowClear />
          </Form.Item>
        </Col>
        <Col span={4}></Col>
      </Row>

      <Form.Item
        wrapperCol={{
          offset: 11,
          span: 2,
        }}
      >
        <ButtonCancelPrimary
          key="submit"
          type="primary"
          htmlType="submit"
          icon={FilterIcon(filter)}
          style={{ marginBottom: "-30px" }}
        >
          Lọc dữ liệu
        </ButtonCancelPrimary>
      </Form.Item>
    </Form>
  );
}
