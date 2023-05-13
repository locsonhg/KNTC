import { BoxWrapper, BoxBody, BoxHeader } from "./styled";

function DashboardBox({ title = "", children, ...props }) {
    return (
        <BoxWrapper {...props}>
            <BoxHeader>
                <h4 className="heading">{title}</h4>
            </BoxHeader>
            <BoxBody>{children}</BoxBody>
        </BoxWrapper>
    );
}

export default DashboardBox;
