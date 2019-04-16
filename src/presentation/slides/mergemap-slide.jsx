import * as React from "react";
import { Appear, Slide, Text, Code, S } from "spectacle";

export const MergeMapSlide = props => (
    <Slide {...props}>
        <Text textAlign={'left'} style={{ paddingTop: '50px' }} textColor="secondary">
            <Code textColor={'#9a86fd'}>mergeMap</Code> is a <S type="italic">flattening</S> operator and in addition to handling an observable returned by its callback, it handles promises and even arrays
        </Text>
        <Appear>
            <div>
                <Text textAlign={'left'} style={{ paddingTop: '50px' }} textColor="secondary">
                    This means that <Code textColor={'#9a86fd'}>mergeMap</Code> will already handle the promise returned by <Code textColor={'#9a86fd'}>navigateByUrl</Code>
                </Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text textAlign={'left'} style={{ paddingTop: '50px' }} textColor="secondary">
                    In addition to us knowing how to explicitly sequence our actions relative to side-effects now, we can simplify the original, knowing now that we can return an array of actions to <Code textColor={'#9a86fd'}>mergeMap</Code>
                </Text>
            </div>
        </Appear>
    </Slide>
);

export default MergeMapSlide;
