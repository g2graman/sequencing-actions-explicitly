import * as React from "react";
import { Slide } from "spectacle";

import { Heading, S } from "../../shared/components/primitives";

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
