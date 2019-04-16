import * as React from "react";
import {Slide, CodePane, Appear, Text, Code, Heading} from "spectacle";

import { simpleSequenceHandlingNavigationCode } from "./snippets";

export const RoutingSideEffectSlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
            textAlign="left"
            textColor="secondary"
            lineHeight={1.2}
        >
            What if we wanted to do something only after we finished navigating?
        </Heading>
        <Appear>
            <div>
                <Text textAlign={'left'} style={{ paddingTop: '50px' }} textColor="secondary">We got close in a previous snippet, but we didn't handle the promise returned by <Code textColor={'#9a86fd'}>navigateByUrl</Code> </Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <CodePane style={{ paddingTop: '25px' }} source={simpleSequenceHandlingNavigationCode} lang='js' textSize='1.25vw' />
            </div>
        </Appear>
    </Slide>
);

export default RoutingSideEffectSlide;
