import { Col, Row, message, Select } from "antd";
import PanelBox, { PanelBoxSection } from "./PanelBox";
import Form from "../../../../../components/uielements/form";
import {
    Input,
    // Select,
} from "../../../../../components/uielements/exportComponent";
import { REQUIRED } from "../../../../../settings/constants";
import api from "../config";
import { useEffect, useState } from "react";

function CanBoXuLy() {
    const [danhSachCanBo, setDanhSachCanBo] = useState([]);

    const getListCanBo = async () => {
        try {
            let res = await api.DanhSachCanBo();

            let { Status, Data, Message } = res.data;

            if (Status === 1) {
                let listCanBo = Data.map((item) => ({
                    value: item.CanBoID,
                    label: item.TenCanBo,
                }));
                setDanhSachCanBo(listCanBo);
            } else {
                message.error(Message);
            }
        } catch (error) {
            message.error(error.message);
        }
    };

    useEffect(() => {
        getListCanBo();
    }, []);

    return (
        <PanelBox isShowHeader={false}>
            <PanelBoxSection border={"none"}>
                <Row gutter={16}>
                    <Col className="gutter-row" span={8}>
                        <Form.Item label="Cán bộ xử lý" name="CanBoXuLy">
                            <Select options={danhSachCanBo} />
                        </Form.Item>
                    </Col>
                </Row>
            </PanelBoxSection>
        </PanelBox>
    );
}

export default CanBoXuLy;
