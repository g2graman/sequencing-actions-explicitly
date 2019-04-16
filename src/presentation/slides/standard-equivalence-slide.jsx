import * as React from "react";
import { Heading, Slide, CodePane, Appear, S, Text } from "spectacle";

import { simpleSequenceDispatchingCode } from "./snippets";

export const StandardEquivalenceSlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
            textAlign="left"
            textColor="secondary"
            lineHeight={1.2}
        >
            That last snippet is <S type='italic'>nearly</S> equivalent to what we had in the component code of the original
        </Heading>
        <Appear>
            <div>
                <CodePane style={{ paddingTop: '25px' }} source={simpleSequenceDispatchingCode} lang='js' textSize='calc(12px + 6 * ((100vw - 320px) / 680))' />
            </div>
        </Appear>
        <Appear>
            <div>
                <Text textAlign={'left'} style={{ paddingTop: '50px' }} textColor="secondary">The original falls short in sequencing side-effects</Text>
            </div>
        </Appear>
    </Slide>
);

export default StandardEquivalenceSlide;
