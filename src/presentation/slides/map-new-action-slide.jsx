import * as React from "react";
import { Slide, Appear } from "spectacle";

import { simpleSequenceCode } from "./snippets";
import { Heading, S } from "../../shared/components/primitives";
import { CodePane } from "../../shared/components/code-pane.component";

export const MapNewActionSlide = props => (
    <Slide {...props}>
        <Heading
            size={6}
        >
            Idea: <S type='italic'>redux-observable</S> allows us to <S type='italic'>map</S> to another action in an Epic, to sequence the two actions
        </Heading>
        <Appear>
            <div>
                <CodePane style={{ paddingTop: '25px' }} source={simpleSequenceCode} lang='js' f={3} />
            </div>
        </Appear>
    </Slide>
);

export default MapNewActionSlide;
