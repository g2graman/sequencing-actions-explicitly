import * as React from "react";
import { Slide, Appear } from "spectacle";

import { simpleSequenceDispatchingCode } from "./snippets";
import { Heading, S, Text } from "../../shared/components/primitives";
import { CodePane } from "../../shared/components/code-pane.component";

export const StandardEquivalenceSlide = props => (
    <Slide {...props}>
        <Heading
            size={6}
        >
            That last snippet is <S type='italic'>nearly</S> equivalent to what we had in the component code of the original
        </Heading>
        <Appear>
            <div>
                <CodePane style={{ paddingTop: '25px' }} source={simpleSequenceDispatchingCode} lang='js' f={3} />
            </div>
        </Appear>
        <Appear>
            <div>
                <Text style={{ paddingTop: '50px' }}>The original falls short in sequencing side-effects</Text>
            </div>
        </Appear>
    </Slide>
);

export default StandardEquivalenceSlide;
