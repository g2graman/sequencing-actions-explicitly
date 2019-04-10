import * as React from "react";
import { Slide, CodePane, Appear, Text, Code } from "spectacle";

import { simpleSequenceHandlingNavigationCode } from "./snippets";

export const RoutingSideEffectSlide = props => (
    <Slide {...props}>
        <Appear>
            <div>
                <Text style={{ paddingTop: '50px' }} textColor="secondary">What if we wanted to do something only after we finished navigating?</Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text style={{ paddingTop: '50px' }} textColor="secondary">We got close in a previous snippet, but we didn't handle the promise returned by <Code textColor={'#9a86fd'}>navigateByUrl</Code> </Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <CodePane style={{ paddingTop: '25px' }} source={simpleSequenceHandlingNavigationCode} lang='js' textSize='calc(12px + 6 * ((100vw - 320px) / 680))' />
            </div>
        </Appear>
    </Slide>
);
