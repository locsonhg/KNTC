import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { ChartWrapper } from "./styled";
// import ChartDataLabels from "chartjs-plugin-datalabels";

function TiLeDonThuTrongKy() {
    ChartJS.register(
        RadialLinearScale,
        ArcElement,
        // ChartDataLabels,
        Tooltip,
        Legend
    );

    const data = {
        labels: ["Đơn phản ánh, kiến nghị", "Đơn khiếu nại", "Đơn tố cáo"],
        datasets: [
            {
                label: "Tỉ lệ đơn thư theo kỳ",
                data: [812.69, 656.45, 350.05],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    title: (context) => {
                        return "";
                    },
                    label: (context) => {
                        return `${context.label}: ${context.raw}`;
                    },
                },
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
        <ChartWrapper>
            <PolarArea data={data} options={options} />
        </ChartWrapper>
    );
}

export default TiLeDonThuTrongKy;
