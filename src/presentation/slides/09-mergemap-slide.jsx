import * as React from "react";
import { Appear, Slide, Text, Code, S } from "spectacle";

export const MergeMapSlide = props => (
    <Slide {...props}>
        <Text style={{ paddingTop: '50px' }} textColor="secondary">
            <Code textColor={'#9a86fd'}>mergeMap</Code> is a <S type="italic">flattening</S> operator and in addition to handling an observable returned by its callback, it handles promises and even arrays
        </Text>
        <Appear>
            <div>
                <Text style={{ paddingTop: '50px' }} textColor="secondary">
                    In addition to us knowing how to explicitly sequence our actions relative to side-effects now, we can simplify our original "standard"
                </Text>
            </div>
        </Appear>
    </Slide>
);
