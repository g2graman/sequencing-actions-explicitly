import * as React from "react";
import { Slide, Appear } from "spectacle";

import { Heading, Emoji, Text, Code, S } from "../../shared/components/primitives";

export const ErrorExplanationSlide = props => (
    <Slide {...props}>
        <Heading
            size={6}
            bold={true}
        >
            How exactly does an "ExpressionChanged..." error get triggered?
        </Heading>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '25px' }}>Let's try and reason about this <S type='italic'>loosely</S></Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '25px' }}>Since the completion of navigation before handling <Code f={2} textColor={'#ffcc99'}>'ACTION_TWO'</Code> isn't guaranteed, <Code f={2} textColor={'#ffcc99'}>'ACTION_TWO'</Code> gets dispatched and handled during the render cycle of the root component that is focused on dealing with its router outlet</Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '25px' }}>When the processing of <Code f={2} textColor={'#ffcc99'}>'ACTION_TWO'</Code> triggers the need for a render, the root component <S type='italic'>wasn't anticipating this kind of change</S></Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={2} textAlign='center' style={{ paddingTop: '25px' }}><Emoji aria-label='boom'>💥💥💥</Emoji></Text>
            </div>
        </Appear>
    </Slide>
);

export default ErrorExplanationSlide;
