import * as React from "react";
import { Slide, Appear } from "spectacle";

import { simpleSequenceHandlingNavigationCode } from "./snippets";
import { Code, Heading, Text } from "../../shared/components/primitives";
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
                <Text style={{ paddingTop: '25px' }}>We got close in a previous snippet, but we didn't handle the promise returned by <Code textColor={'#9a86fd'}>navigateByUrl</Code> </Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <CodePane style={{ paddingTop: '25px' }} source={simpleSequenceHandlingNavigationCode} lang='js' f={3} />
            </div>
        </Appear>
    </Slide>
);

export default RoutingSideEffectSlide;
