import * as React from "react";
import { Appear } from "spectacle";

import { simpleSequenceDispatchingCode } from "./snippets";
import { Slide, Heading, S, Text } from "../../shared/components/primitives";
import { CodePane } from "../../shared/components/code-pane.component";

export const StandardEquivalenceSlide = props => (
    <Slide {...props}>
        <Heading
            size={6}
        >
            What's the difference between the two approaches of sequencing actions?
        </Heading>
        <Appear>
            <div>
                <Text f={2}>
                    Our method for sequencing actions using epics is <S type='italic'>nearly</S> equivalent to what we had in the component code of the original (in which we dispatched multiple actions sequentially)
                </Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <CodePane style={{ paddingTop: '25px' }} source={simpleSequenceDispatchingCode} lang='js' f={3} />
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '50px' }}>The original falls short in sequencing side-effects; we have no ability to reason about when an action's corresponding side-effects should occur</Text>
            </div>
        </Appear>
    </Slide>
);

export default StandardEquivalenceSlide;
