import * as React from "react";
import { Appear, Slide } from "spectacle";

import { Code, S, Text } from "../../shared/components/primitives";

export const MergeMapSlide = props => (
    <Slide {...props}>
        <Text f={2} style={{ paddingTop: '50px' }}>
            <Code textColor={'#9a86fd'}>mergeMap</Code> is a <S type="italic">flattening</S> operator and in addition to handling an observable returned by its callback, it handles promises and even arrays
        </Text>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '50px' }}>
                    This means that <Code textColor={'#9a86fd'}>mergeMap</Code> will already handle the promise returned by <Code textColor={'#9a86fd'}>navigateByUrl</Code>
                </Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '50px' }}>
                    In addition to us knowing how to explicitly sequence our actions relative to side-effects now, we can simplify the original, knowing now that we can return an array of actions to <Code textColor={'#9a86fd'}>mergeMap</Code>
                </Text>
            </div>
        </Appear>
    </Slide>
);

export default MergeMapSlide;
