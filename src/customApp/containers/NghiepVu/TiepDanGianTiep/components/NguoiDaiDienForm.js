import { Col, Row, message } from "antd";
import { PanelBoxSection } from "./PanelBox";
import Form, {
    LabelWithMessage,
} from "../../../../../components/uielements/form";
import {
    Input,
    Selectv4,
    Button,
} from "../../../../../components/uielements/exportComponent";
import { REQUIRED } from "../../../../../settings/constants";
import { useEffect, useState } from "react";
import DiaGioi from "./diaGioi";
import { useSelector } from "react-redux";
import api from "../config";
import ModalKiemTraTrungDon from "./modalKiemTraTrungDon";
import ModalKhieuToLan2 from "./modalKhieuToLan2";
import { useFullAddress } from "./customHook";

function NguoiDaiDienForm({
    title,
    index = "",
    nameField,
    resetField,
    form,
    isDisableForm,
    isFormList,
    diaGioiID,
    ...rest
}) {
    /*
        Giới tính: 
            0 - Nam
            1 - Nữ
    */
    const [danhSachDanToc, setDanhSachDanToc] = useState([]);
    const [soDonThuTrung, setSoDonThuTrung] = useState(0);
    const [isModalKiemtratrungdon, setIsModalKiemtratrungdon] = useState(false);
    const [isModalKhieuToLan2, setIsModalKhieuToLan2] = useState(false);
    const [hoTen, setHoTen] = useState("");
    const [fullAddress, setData] = useFullAddress();

    const DanhSachDanToc = useSelector(
        (state) => state.ReducerDanToc.DanhSachDanToc
    );

    const genders = [
        {
            value: 0,
            label: "Nam",
        },
        {
            value: 1,
            label: "Nữ",
        },
    ];

    const getListDanToc = (list) => {
        try {
            let listDanToc = list.map((item) => ({
                value: item.DanTocID,
                label: item.TenDanToc,
            }));
            setDanhSachDanToc(listDanToc);
        } catch (error) {
            message.error(error.message);
        }
    };

    const checkSoDonTrung = async (data) => {
        try {
            let res = await api.CheckSoDonTrung({
                ...data,
            });

            const { Status, Data, Message } = res.data;
            if (Status === 1) {
                setSoDonThuTrung(Data);
            } else {
                message.error(Message);
                setSoDonThuTrung(0);
            }
        } catch (error) {
            message.error(error.message);
            setSoDonThuTrung(0);
        }
    };

    const handleInputNameBlur = (e) => {
        const { value } = e.target;
        value
            ? checkSoDonTrung({ hoTen: value, diachi: fullAddress })
            : setSoDonThuTrung(0);
        setHoTen(value ? value : "");
    };

    const handleChangeSoNha = (e) => {
        let { value } = e.target;
        setData({
            name: "soNha",
            value: value,
        });
    };

    const openModalKiemTraTrung = () => {
        setIsModalKiemtratrungdon(true);
    };

    const closeModalKiemTraTrung = () => {
        setIsModalKiemtratrungdon(false);
    };

    const sumbitModalKiemTraTrung = (values) => {
        closeModalKiemTraTrung();
    };
    // Khieu to lan 2
    const openModalKhieuToLan2 = () => {
        setIsModalKhieuToLan2(true);
    };

    const closeModalKhieuToLan2 = () => {
        setIsModalKhieuToLan2(false);
    };

    const sumbitModalKhieuToLan2 = (values) => {
        closeModalKhieuToLan2();
    };

    useEffect(() => {
        getListDanToc(DanhSachDanToc);
    }, [DanhSachDanToc]);

    useEffect(() => {
        isDisableForm && setSoDonThuTrung(0);
    }, [isDisableForm]);

    useEffect(() => {
        if (isFormList) {
            let nguoiDaiDienFields = form.getFieldValue("NguoiDaiDien");
            nguoiDaiDienFields[nameField] = {
                ...nguoiDaiDienFields[nameField],
                DiaChiCT: fullAddress,
            };
            form.setFieldValue("NguoiDaiDien", nguoiDaiDienFields);
        } else form.setFieldValue("DiaChiCT", fullAddress);
        hoTen
            ? checkSoDonTrung({ hoTen: hoTen, diachi: fullAddress })
            : setSoDonThuTrung(0);
    }, [fullAddress]);

    const onReset = () => {
        setHoTen("");
        setSoDonThuTrung(0);
    };

    return (
        <PanelBoxSection title={`${title} ` + index} {...rest}>
            <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                    <LabelWithMessage
                        message={
                            soDonThuTrung > 0
                                ? `Tìm thấy ${soDonThuTrung} đơn thư có thể trùng`
                                : ""
                        }
                        onClick={openModalKiemTraTrung}
                    >
                        <Form.Item
                            {...resetField}
                            label="Họ Tên"
                            name={isFormList ? [nameField, "HoTen"] : "HoTen"}
                            rules={[REQUIRED]}
                            onBlur={handleInputNameBlur}
                            onReset={onReset}
                        >
                            <Input />
                        </Form.Item>
                    </LabelWithMessage>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Form.Item label=" ">
                        <div className="form-item__action">
                            <Button
                                className="form-item__btn"
                                onClick={openModalKiemTraTrung}
                            >
                                Kiểm tra trùng
                            </Button>
                            <Button
                                className="form-item__btn"
                                onClick={openModalKhieuToLan2}
                            >
                                Khiếu tố lần 2
                            </Button>
                        </div>
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Form.Item
                        {...resetField}
                        label="Giới tính"
                        name={isFormList ? [nameField, "GioiTinh"] : "GioiTinh"}
                    >
                        <Selectv4 options={genders} />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Form.Item
                        {...resetField}
                        label="Số CCCD/CMND"
                        name={isFormList ? [nameField, "CMND"] : "CMND"}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Form.Item
                        {...resetField}
                        label="Dân tộc"
                        name={isFormList ? [nameField, "DanTocID"] : "DanTocID"}
                    >
                        <Selectv4 options={danhSachDanToc} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                    <DiaGioi
                        number={index}
                        form={form}
                        isFormList={isFormList}
                        nameField={nameField}
                        onChange={(data) =>
                            setData({ name: "diaGioi", value: data })
                        }
                        diaGioiID={diaGioiID}
                    />
                </Col>
                <Col className="gutter-row" span={4}>
                    <Form.Item
                        {...resetField}
                        label="Nhập số nhà, tổ, thôn xóm, khu phố..."
                        name={isFormList ? [nameField, "SoNha"] : "SoNha"}
                        onChange={handleChangeSoNha}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col className="gutter-row" span={8}>
                    <Form.Item
                        {...resetField}
                        label="Chi tiết địa chỉ"
                        name={isFormList ? [nameField, "DiaChiCT"] : "DiaChiCT"}
                    >
                        <Input disabled />
                    </Form.Item>
                </Col>
            </Row>

            <ModalKiemTraTrungDon
                isModalOpen={isModalKiemtratrungdon}
                onCancel={closeModalKiemTraTrung}
                onOk={sumbitModalKiemTraTrung}
                data={{
                    hoTen,
                    fullAddress,
                }}
            />

            <ModalKhieuToLan2
                isModalOpen={isModalKhieuToLan2}
                onCancel={closeModalKhieuToLan2}
                onOk={sumbitModalKhieuToLan2}
                data={{
                    hoTen,
                    fullAddress,
                }}
            />
        </PanelBoxSection>
    );
}

export default NguoiDaiDienForm;
