import * as React from "react";
import { Appear } from "spectacle";

import { simpleSequenceCode } from "./snippets";
import { Heading, S, Text, Quote, Slide } from "../../shared/components/primitives";
import { CodePane } from "../../shared/components/code-pane.component";


export const MapNewActionSlide = props => (
    <Slide {...props}>
        <Heading
            size={6}
        >
            Idea: <S type='italic'>redux-observable</S> allows us to <S type='italic'>map</S> to another action in an Epic, to sequence the two actions
        </Heading>
        <Appear>
            <div>
                <Text f={3}><S type='italic'>redux-observable</S> is what provides the middleware for handling the epics we create. Since it underlies the processing of our epics, we can lean on its functionality</Text>
            </div>
        </Appear>
        <Appear>
            <div style={{ paddingTop: '25px' }}>
                <CodePane source={simpleSequenceCode} lang='js' f={3} />
            </div>
        </Appear>
        <Appear>
            <div style={{ paddingTop: '25px' }}>
                <Text f={3}>
                    <S type='bold'>N.B.</S> From the <S type='italic'>redux-observable</S> docs:
                    <Quote f={4}>
                        REMEMBER: Epics run alongside the normal Redux dispatch channel, after the reducers have already received them. When you map an action to another one, you are not preventing the original action from reaching the reducers; that action has already been through them!
                    </Quote>
                </Text>
            </div>
        </Appear>
    </Slide>
);

export default MapNewActionSlide;
