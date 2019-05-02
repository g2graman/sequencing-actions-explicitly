import * as React from "react";

import { Heading, S, Slide } from "../../shared/components/primitives";

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
