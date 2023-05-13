import { Col, InputNumber, message, Row } from "antd";
import PanelBox, { PanelBoxSection } from "./PanelBox";
import Form from "../../../../../components/uielements/form";
import {
    Input,
    Selectv4,
    DatePicker,
    TreeSelect,
    Radio,
} from "../../../../../components/uielements/exportComponent";
import { REQUIRED } from "../../../../../settings/constants";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useSelector } from "react-redux";
import api from "../config";
dayjs.extend(customParseFormat);

function ThongTinTiepNhanDonThu({ form, chiTietDonTrung, ...rest }) {
    const [danhSachNguonDonDen, setDanhSachNguonDonDen] = useState([]);
    const [danhSachCoQuanDonVi, setDanhSachCoQuanDonVi] = useState([]);
    const [isDisableForm, setIsDisableForm] = useState(false);

    const DanhSachNguonDonDen = useSelector(
        (state) => state.DanhMucNguonDonDen.DanhSachNguonDonDen
    );

    const DanhSachCoQuanDonVi = useSelector(
        (state) => state.DMCoQuan.DanhSachCoQuan
    );

    let formatDate = "DD/MM/YYYY";

    // Get List Nguồn đơn đến
    function getListNguonDonDen(list) {
        try {
            if (list) {
                let newData = list.map((item) => ({
                    value: item.NguonDonDenID,
                    label: item.TenNguonDonDen,
                    disabled: !item.TrangThai,
                }));
                setDanhSachNguonDonDen(newData);
            }
        } catch (error) {
            message.error("Hệ thống đang bảo trì");
        }
    }

    function handleTreeCoQuanDonVi(list) {
        return list.map((item) => {
            if (item.Children.length > 0) {
                return {
                    title: item.Ten,
                    value: item.ID,
                    children: handleTreeCoQuanDonVi(item.Children),
                };
            } else {
                return {
                    title: item.Ten,
                    value: item.ID,
                };
            }
        });
    }

    function getListCoQuanDonVi(list) {
        try {
            if (list) {
                let newData = handleTreeCoQuanDonVi(list);
                setDanhSachCoQuanDonVi(newData);
            }
        } catch (error) {
            message.error(error.message);
        }
    }

    async function getSoDonThu() {
        try {
            let res = await api.SoDonThu();

            form.setFieldValue("SoDonThu", res.data);
        } catch (error) {
            message.error(error.message);
        }
    }

    useEffect(() => {
        getSoDonThu();
    }, []);

    useEffect(() => {
        getListNguonDonDen(DanhSachNguonDonDen);
    }, [DanhSachNguonDonDen]);

    useEffect(() => {
        getListCoQuanDonVi(DanhSachCoQuanDonVi);
    }, [DanhSachCoQuanDonVi]);

    useEffect(() => {
        if (chiTietDonTrung) {
            let data = {
                NgayNhapDon: dayjs(
                    chiTietDonTrung?.NgayNhapDon_Str,
                    formatDate,
                    true
                ).isValid()
                    ? dayjs(chiTietDonTrung?.NgayNhapDon_Str, formatDate, true)
                    : undefined,
                NgayChuyenDon: dayjs(
                    chiTietDonTrung?.NgayChuyenDon_Str,
                    formatDate,
                    true
                ).isValid()
                    ? dayjs(
                          chiTietDonTrung?.NgayChuyenDon_Str,
                          formatDate,
                          true
                      )
                    : undefined,
                SoDonThu: chiTietDonTrung?.SoDonThu,
                CQChuyenDonDenID: chiTietDonTrung?.CQChuyenDonDenID
                    ? chiTietDonTrung?.CQChuyenDonDenID
                    : undefined,
                NguonDonDen: chiTietDonTrung?.NguonDonDen
                    ? chiTietDonTrung?.NguonDonDen
                    : undefined,
                SoCongVan: chiTietDonTrung?.SoCongVan,
            };

            form.setFieldsValue(data);
        } else getSoDonThu();
        setIsDisableForm(!!chiTietDonTrung);
    }, [chiTietDonTrung]);

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current > dayjs().endOf("day");
    };

    return (
        <Form
            form={form}
            initialValues={{
                NgayNhapDon: dayjs(),
                NgayChuyenDon: dayjs(),
            }}
            name="ThongTinTiepNhanDonThuForm"
            layout="vertical"
            disabled={isDisableForm}
        >
            <PanelBox isShowHeader={false}>
                <PanelBoxSection border={"none"}>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={4}>
                            <Form.Item
                                label="Số thứ tự hồ sơ"
                                name="SoDonThu"
                                rules={[REQUIRED]}
                            >
                                <Input disabled />
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Form.Item
                                label="Ngày nhập đơn"
                                name="NgayNhapDon"
                                rules={[REQUIRED]}
                            >
                                <DatePicker disabledDate={disabledDate} />
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Form.Item
                                label="Nguồn đơn đến"
                                name="NguonDonDen"
                                rules={[REQUIRED]}
                            >
                                <Selectv4 options={danhSachNguonDonDen} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={8}>
                            <Form.Item
                                label="Cơ quan chuyển"
                                name="CQChuyenDonDenID"
                                rules={[REQUIRED]}
                            >
                                <TreeSelect
                                    // treeDefaultExpandAll
                                    dropdownMatchSelectWidth={false}
                                    treeData={danhSachCoQuanDonVi}
                                />
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Form.Item
                                label="Ngày chuyển đơn"
                                name="NgayChuyenDon"
                                rules={[REQUIRED]}
                            >
                                <DatePicker disabledDate={disabledDate} />
                            </Form.Item>
                        </Col>
                        <Col className="gutter-row" span={12}>
                            <Form.Item label="Số công văn" name="SoCongVan">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </PanelBoxSection>
            </PanelBox>
        </Form>
    );
}

export default ThongTinTiepNhanDonThu;
