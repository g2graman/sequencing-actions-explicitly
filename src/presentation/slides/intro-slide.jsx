import * as React from "react";
import { Heading, S, Slide } from "../../shared/components/primitives";

export const IntroSlide = props => (
    <Slide {...props}>
        <Heading
            size={2}
            bold={true}
        >
            Sequencing actions (and their side-effects) <S type="bold" textColor="blue">explicitly</S>
        </Heading>
    </Slide>
);

export default IntroSlide;
