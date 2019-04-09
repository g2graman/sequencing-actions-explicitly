import styled from "@emotion/styled";
import { BaseProps, CodePane, CodePaneProps } from "spectacle";

export type MyCodePaneProps = {
    fill: boolean
};

export const MyCodePane: React.FunctionComponent<CodePaneProps & BaseProps & MyCodePaneProps> = styled(CodePane)`
    ${(props: MyCodePaneProps) => props.fill && `
        margin: unset;
        height: 100%;
        
        pre.prism-code {
            height: 100%;
        }
    `}
`;
