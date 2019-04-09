import styled, { StyledComponent } from "@emotion/styled";

export type CodeCompareInnerProps = {
    tracks: number;
}

export type CodeCompareProps = Pick<CodeCompareInnerProps, keyof CodeCompareInnerProps extends "ref" | "key" ? never : keyof CodeCompareInnerProps>;

export const CodeCompare: StyledComponent<JSX.IntrinsicElements["div"], CodeCompareProps, any> = styled.div`
    ${(props) => !!props.tracks && `
        display: grid;
        grid-template-columns: repeat(${props.tracks}, 1fr);
        column-gap: 10px;
        grid-auto-flow: row;
    `}
`;


