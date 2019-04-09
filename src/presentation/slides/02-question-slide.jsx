import * as React from "react";
import { Heading, Slide, S } from "spectacle";

export const QuestionSlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
            textAlign="left"
            textColor="secondary"
            lineHeight={1.2}
            bold={true}
        >
            How would you usually dispatch a sequence of multiple <S type="italic">actions</S>?
        </Heading>
    </Slide>
);
