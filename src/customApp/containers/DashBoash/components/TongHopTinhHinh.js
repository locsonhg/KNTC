import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartWrapper } from "./styled";
// import ChartDataLabels from "chartjs-plugin-datalabels";

const datas = [
    [
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
    ],
    [
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
    ],
    [
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
    ],
    [
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
    ],
    [
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
        (Math.random() * (1000 - 0) + 0).toFixed(2),
    ],
];
function TongHopTinhHinh() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const labels = [
        "Tổng số lượt tiếp",
        "Đơn PA, KN",
        "Đơn khiếu nại",
        "Đơn tố cáo",
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Trong kỳ",
                data: datas[0].map((item) => item),
                backgroundColor: "rgba(33, 150, 243, 0.5)",
            },
            {
                label: "Cùng kỳ",
                data: datas[1].map((item) => item),
                backgroundColor: "rgba(255, 193, 7, 0.5)",
            },
            {
                label: "Đã xử lý",
                data: datas[2].map((item) => item),
                backgroundColor: "rgba(0, 188, 212, 0.5)",
            },
            {
                label: "Đã giải quyết",
                data: datas[3].map((item) => item),
                backgroundColor: "rgba(233, 30, 99, 0.5)",
            },
            {
                label: "Chưa giải quyết",
                data: datas[4].map((item) => item),
                backgroundColor: "rgba(158, 158, 158, 0.5)",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            // tooltip: {
            //     callbacks: {
            //         title: (context) => {
            //             return "";
            //         },
            //         label: (context) => {
            //             return `${context.label}: ${context.raw}`;
            //         },
            //     },
            // },
            legend: {
                position: "right",
            },
            // datalabels: {
            //     textAlign: "center",
            //     color: "#333",
            //     font: {
            //         size: 14,
            //     },
            //     formatter: (value, context) => {
            //         let array = [
            //             `${context.chart.data.labels[context.dataIndex]}`,
            //             `${value}`,
            //         ];
            //         return array;
            //     },
            // },
        },
    };
    return (
        <>
            <ChartWrapper>
                <Bar options={options} data={data} />
            </ChartWrapper>
        </>
    );
}

export default TongHopTinhHinh;
