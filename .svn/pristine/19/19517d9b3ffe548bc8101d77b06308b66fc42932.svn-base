import {
    ToolbarContent,
    ToolbarData,
    ToolbarIcon,
    ToolbarTitle,
    ToolbarWrapper,
} from "./styled";

function Toolbar({ icon, bgColor, data = 0, title = "", ...props }) {
    return (
        <ToolbarWrapper {...props}>
            <ToolbarContent>
                <ToolbarData>{data}</ToolbarData>
                <ToolbarTitle>{title}</ToolbarTitle>
            </ToolbarContent>
            <ToolbarIcon bgColor={bgColor}>{icon}</ToolbarIcon>
        </ToolbarWrapper>
    );
}

export default Toolbar;
