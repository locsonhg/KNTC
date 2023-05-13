import { Modal, Table, Tooltip, message, Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import actions from "../../redux/DashBoard/action";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import PageAction from "../../../components/utility/pageAction";
import Box from "../../../components/utility/box";
import BoxFilter from "../../../components/utility/boxFilter";
import BoxTable from "../../../components/utility/boxTable";
import Checkbox from "../../../components/uielements/checkbox";
import {
    Button,
    InputSearch,
    Option,
    Select,
} from "../../../components/uielements/exportComponent";
import {
    changeUrlFilter,
    getDefaultPageSize,
    getFilterData,
    getRoleByKey,
} from "../../../helpers/utility";
import { useKey } from "../../CustomHook/useKey";
import queryString from "query-string";
import api from "./config";
import {
    DeleteOutlined,
    EditOutlined,
    PlusOutlined,
    ExportOutlined,
} from "@ant-design/icons";
import Wrapper, { WrapperFilter } from "./styled";
import { Redirect } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Toolbar from "./components/toolbar";
import { palette } from "styled-theme";
import DashboardBox from "./components/dashboardBox";
import TiLeDonThuTrongKy from "./components/TiLeDonThuTrongKy";
import TongHopTinhHinh from "./components/TongHopTinhHinh";
const DashBoard = (props) => {
    document.title = "Dashboard";
    const [filterData, setFilterData] = useState(
        queryString.parse(props.location.search)
    );
    const dispatch = useDispatch();

    useEffect(() => {
        changeUrlFilter(filterData);
        // dispatch(actions.getData())
        // props.getThongTinBaoCao(filterData);
    }, [filterData]);

    const HrefLink = JSON.parse(localStorage.getItem("data_config"))?.HrefLink
        ? JSON.parse(localStorage.getItem("data_config")).HrefLink
        : "";
    const from = { pathname: `/dashboard/${HrefLink}` };
    if (HrefLink && HrefLink !== "") {
        return <Redirect to={from} />;
    }

    const Toolbars = [
        {
            data: 0,
            title: "Không tìm thấy",
            bgColor: palette("color", 16),
            icon: (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                    }}
                >
                    <img
                        style={{
                            width: "50%",
                            objectFit: "cover",
                        }}
                        src="https://kntcv2dev.gosol.com.vn/static/media/filter-white.effe55a94cf9ed0beff9.png"
                        alt=""
                    />
                    <div style={{ fontSize: "13px" }}>Bộ lọc</div>
                </div>
            ),
        },
        {
            data: 3188,
            title: "Lượt tiếp",
            bgColor: palette("color", 16),
            icon: (
                <img
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    src="https://kntcv2dev.gosol.com.vn/static/media/reception-white.468d1303c8aeb61939e6.png"
                    alt=""
                />
            ),
        },
        {
            data: 4150,
            title: "Đã xử lý",
            bgColor: palette("color", 17),
            icon: (
                <img
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    src="https://kntcv2dev.gosol.com.vn/static/media/process-white.c61c91c817e3e668c642.png"
                    alt=""
                />
            ),
        },
        {
            data: 1482,
            title: "Đã giải quyết",
            bgColor: palette("color", 16),
            icon: (
                <img
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    src="https://kntcv2dev.gosol.com.vn/static/media/to-do-list-wihte.4b8fc8094248dae977de.png"
                    alt=""
                />
            ),
        },
        {
            data: 1561,
            title: "Đơn phản ánh, KN",
            bgColor: palette("color", 17),
            icon: (
                <img
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    src="https://kntcv2dev.gosol.com.vn/static/media/to-do-list-wihte.4b8fc8094248dae977de.png"
                    alt=""
                />
            ),
        },
        {
            data: 759,
            title: "Đơn khiếu nại",
            bgColor: palette("color", 16),
            icon: (
                <img
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    src="https://kntcv2dev.gosol.com.vn/static/media/skills-white.cfa15661677f0f175deb.png"
                    alt=""
                />
            ),
        },
        {
            data: 47,
            title: "Đơn Tố cáo",
            bgColor: palette("color", 14),
            icon: (
                <img
                    style={{
                        width: "100%",
                        objectFit: "cover",
                    }}
                    src="https://kntcv2dev.gosol.com.vn/static/media/reception-white.468d1303c8aeb61939e6.png"
                    alt=""
                />
            ),
        },
    ];

    useEffect(() => {
        // props.getData(filterData);
    }, []);

    const onFilter = (value, property) => {
        let oldFilterData = filterData;
        let onFilter = { value, property };
        let newfilterData = getFilterData(oldFilterData, onFilter, null);
        //get filter data
        setFilterData(newfilterData);
    };

    const PageNumber = filterData.PageNumber
        ? parseInt(filterData.PageNumber)
        : 1;
    const PageSize = filterData.PageSize
        ? parseInt(filterData.PageSize)
        : getDefaultPageSize();

    return (
        <LayoutWrapper>
            <PageHeader>Dashboard</PageHeader>
            <PageAction></PageAction>
            <Wrapper>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={true}
                    grabCursor={true}
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                        1400: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                        1900: {
                            slidesPerView: 7,
                            spaceBetween: 0,
                        },
                    }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {Toolbars.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Toolbar {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Row gutter={24}>
                    <Col span={16} style={{ display: "flex" }}>
                        <DashboardBox
                            title="Tổng hợp tình hình tiếp dân, xử lý đơn, giải quyết khiếu
                        nại tố cáo"
                        >
                            <TongHopTinhHinh />
                        </DashboardBox>
                    </Col>
                    <Col span={8} style={{ display: "flex" }}>
                        <DashboardBox title="Tỷ lệ đơn thư trong kỳ">
                            <TiLeDonThuTrongKy />
                        </DashboardBox>
                    </Col>
                </Row>
            </Wrapper>
        </LayoutWrapper>
    );
};

function mapStateToProps(state) {
    return {
        role: getRoleByKey(state.Auth.role, "quan-ly-nam-hoc"),
    };
}

export default connect(mapStateToProps, actions)(DashBoard);
