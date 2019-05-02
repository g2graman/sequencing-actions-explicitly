import * as React from "react";
import { Appear } from "spectacle";

import { Code, Text, Slide, Heading } from "../../shared/components/primitives";
import { CodePane} from "../../shared/components/code-pane.component";
import { simpleSequenceHandlingNavigationCode, simpleSequenceManyHandlingNavigationCode } from "./snippets";

export const FinalBreakdownSlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
        >
            Putting it all together
        </Heading>
        <Appear>
            <div>
                <Text f={3}>
                    We can explicitly sequence an action after a side-effect in an epic
                </Text>
                <CodePane source={simpleSequenceHandlingNavigationCode} lang='js' f={4} />
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={3} style={{ paddingTop: '15px' }}>
                    If we want to sequence multiple actions we can use <Code f={3} textColor={'#9a86fd'}>mergeMap</Code> and return an array of actions
                </Text>
                <CodePane source={simpleSequenceManyHandlingNavigationCode} lang='js' f={4} />
            </div>
        </Appear>
    </Slide>
);

export default FinalBreakdownSlide;
