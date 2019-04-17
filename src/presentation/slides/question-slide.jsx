import * as React from "react";
import { Slide } from "spectacle";

import { Heading, S } from "../../shared/components/primitives";

export const QuestionSlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
            bold={true}
        >
            How would you usually dispatch a sequence of multiple <S type="italic">actions</S>?
        </Heading>
    </Slide>
);

export default QuestionSlide;
