import * as React from "react";
import { Heading, Slide, CodePane, Appear, S } from "spectacle";

import { simpleSequenceCode } from "./snippets";

export const MapNewActionSlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
            textAlign="left"
            textColor="secondary"
            lineHeight={1.2}
        >
            <S type='italic'>redux-observable</S> allows us to <S type='italic'>map</S> to another action in an Epic, to sequence the two actions
        </Heading>
        <Appear>
            <div>
                <CodePane style={{ paddingTop: '25px' }} source={simpleSequenceCode} lang='ts' textSize='calc(12px + 6 * ((100vw - 320px) / 680))' />
            </div>
        </Appear>
    </Slide>
);
