import { Col, Row, message } from "antd";
import Form from "../../../../../components/uielements/form";
import { Selectv4 } from "../../../../../components/uielements/exportComponent";
import apiDiaGioi from "../../../DanhMuc/DMDiaGioi/config";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DiaGioi({
  number,
  form,
  label = {
    tinh: (
      <span>
        Địa chỉ &#40;
        <i
          style={{
            color: "red",
          }}
        >
          Chọn tỉnh, huyện, xã
        </i>
        &#41;
      </span>
    ),
    huyen: " ",
    xa: " ",
  },
  onChange,
  ...props
}) {
  const [danhSachTinh, setDanhSachTinh] = useState([]);
  const [danhSachHuyen, setDanhSachHuyen] = useState([]);
  const [danhSachXa, setDanhSachXa] = useState([]);
  const [diaGioi, setDiaGioi] = useState("");

  const DanhSachTinh = useSelector(
    (state) => state.DanhMucDiaGioi.DanhSachTinh
  );

  const getListDiaGioi = async (ID = 1, Cap = 0) => {
    try {
      let res = await apiDiaGioi.danhSachDiaGioi({
        ID,
        Cap,
      });

      let { Data } = res.data;

      let list = Data.map((item) => ({
        value: item.ID,
        label: item.Ten,
      }));

      if (Cap === 2) {
        setDanhSachHuyen(list);
      } else if (Cap === 3) {
        setDanhSachXa(list);
      } else {
        setDanhSachTinh(list);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  // const getLabelFollowId = (list, id) => {
  //     return list.filter(item => {
  //         if(item.value === id)
  //             return item.label
  //     })
  // }

  useEffect(() => {
    let newDanhSachTinh = DanhSachTinh.map((item) => ({
      value: item.ID,
      label: item.Ten,
    }));
    setDanhSachTinh(newDanhSachTinh);
  }, [DanhSachTinh]);

  const onChangeTinhHuyenXa = (Cap, value) => {
    new Promise((resolve, reject) => {
      if (Cap === 0) {
        setDanhSachHuyen([]);
        setDanhSachXa([]);
        form.setFieldsValue({
          [number ? `HuyenID_${number}` : "HuyenID"]: undefined,
          [number ? `XaID_${number}` : "XaID"]: undefined,
        });
      } else if (Cap === 2) {
        setDanhSachXa([]);
        form.setFieldsValue({
          [number ? `XaID_${number}` : "XaID"]: undefined,
        });
      }
      resolve();
    }).then(() => {
      switch (Cap) {
        case 2: {
          getListDiaGioi(value, 3);
          setDiaGioi((pre) => ({
            ...pre,
            Huyen: danhSachHuyen.find((item) => item.value === value).label,
            Xa: undefined,
          }));
          break;
        }
        case 3:
          setDiaGioi((pre) => ({
            ...pre,
            Xa: danhSachXa.find((item) => item.value === value).label,
          }));
          break;

        default: {
          getListDiaGioi(value, 2);
          setDiaGioi((pre) => ({
            Tinh: danhSachTinh.find((item) => item.value === value).label,
            Huyen: undefined,
            Xa: undefined,
          }));
          break;
        }
      }
    });
  };

  useEffect(() => {
    onChange && onChange(diaGioi);
  }, [diaGioi]);

  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={8}>
        <Form.Item
          label={label.tinh}
          name={number ? `TinhID_${number}` : "TinhID"}
        >
          <Selectv4
            onChange={(value) => onChangeTinhHuyenXa(0, value)}
            options={danhSachTinh}
            placeholder="Chọn tỉnh"
          />
        </Form.Item>
      </Col>
      <Col className="gutter-row" span={8}>
        <Form.Item
          label={label.huyen}
          name={number ? `HuyenID_${number}` : "HuyenID"}
        >
          <Selectv4
            onChange={(value) => onChangeTinhHuyenXa(2, value)}
            options={danhSachHuyen}
            placeholder="Chọn huyện"
          />
        </Form.Item>
      </Col>
      <Col className="gutter-row" span={8}>
        <Form.Item label={label.xa} name={number ? `XaID_${number}` : "XaID"}>
          <Selectv4
            onChange={(value) => onChangeTinhHuyenXa(3, value)}
            options={danhSachXa}
            placeholder="Chọn xã"
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default DiaGioi;
