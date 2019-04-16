import * as React from "react";
import { Heading, S, Slide } from "spectacle";

export const IntroSlide = props => (
    <Slide {...props}>
        <Heading
            size={3}
            textAlign="left"
            textColor="secondary"
            lineHeight={1.2}
        >
            Sequencing actions (and their side-effects) <S type="bold" textColor="blue">explicitly</S>
        </Heading>
    </Slide>
);

export default IntroSlide;
