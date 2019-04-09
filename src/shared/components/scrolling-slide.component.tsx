import styled from "@emotion/styled";
import { BaseProps, Slide, SlideProps } from "spectacle";

export type ScrollingSideProps = {
    wide: boolean;
};

export const ScrollingSlide: React.FunctionComponent<SlideProps & BaseProps & ScrollingSideProps> = styled(Slide)`
    & {
        overflow-y: scroll;
    }
    
    ${({ wide }) => wide && ` & {
        max-width: unset !important;
        padding: 0 75px !important;
    }`}
`;
