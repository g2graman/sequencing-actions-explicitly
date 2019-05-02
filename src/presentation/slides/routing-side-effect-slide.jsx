import * as React from "react";
import { Appear } from "spectacle";

import { simpleSequenceHandlingNavigationCode } from "./snippets";
import { Slide, Code, Heading, Text } from "../../shared/components/primitives";
import { CodePane } from "../../shared/components/code-pane.component";

export const RoutingSideEffectSlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
        >
            What if we wanted to do something only after we finished navigating?
        </Heading>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '25px' }}>We got close in a previous snippet, but we didn't handle the promise returned by <Code f={2} textColor={'#9a86fd'}>navigateByUrl</Code></Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text style={{ paddingTop: '25px' }} f={2}>Note the <Code f={2} textColor={'#9a86fd'}>mergeMap</Code> below</Text>
                <CodePane source={simpleSequenceHandlingNavigationCode} lang='js' f={3} />
            </div>
        </Appear>
    </Slide>
);

export default RoutingSideEffectSlide;
