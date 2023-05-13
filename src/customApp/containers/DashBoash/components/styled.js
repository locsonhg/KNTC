import styled from "styled-components";
import { transition } from "../../../../settings/style-util";
import { palette } from "styled-theme";

// ------------------- Toolbar ----------------------
export const ToolbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    border: 1px dashed #333;
    background-color: ${palette("color", 15)};
`;

export const ToolbarContent = styled.div`
    font-size: 18px;
    flex-shrink: 0;
    flex-grow: 0;
`;

export const ToolbarData = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const ToolbarTitle = styled.div`
    margin-top: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const ToolbarIcon = styled.div`
    flex-shrink: 0;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: ${({ bgColor }) => bgColor || palette("primary", 16)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 11px;
    color: ${palette("primary", 17)};
`;

// ------------------- Toolbar ----------------------
export const BoxWrapper = styled.div`
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: unset;
    box-shadow: 0 0 5px 5px ${palette("grayscale", 0)};
`;

export const BoxHeader = styled.div`
    padding: 10px 0;
    border-bottom: 1px dashed ${palette("secondary", 11)};
    & .heading {
        font-size: 16px;
        font-weight: bold;
        text-transform: lowercase;

        &:first-letter {
            text-transform: uppercase;
        }
    }
`;

export const BoxHeading = styled.h4``;

export const BoxBody = styled.div``;

// ------------------- Chartjs ----------------------
export const ChartWrapper = styled.div`
    // height: 300px;

    & canvas {
        width: 100% !important;
        height: 100% !important;
    }
`;
