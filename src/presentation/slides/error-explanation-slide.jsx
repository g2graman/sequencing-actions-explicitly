import * as React from "react";
import { Slide, Appear } from "spectacle";

import { Heading, Text, S } from "../../shared/components/primitives";

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
                <Text f={3} style={{ paddingTop: '25px' }}>Let's try and reason about this <S type='italic'>loosely</S></Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={3} style={{ paddingTop: '25px' }}>The second action (the one that triggers the update of the view) gets dispatched before navigation completes</Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={3} style={{ paddingTop: '25px' }}>At this point, the root component is focused on dealing with its router outlet, and waiting for navigation to complete so the contents of the outlet can be updated</Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={3} style={{ paddingTop: '25px' }}>When the processing of the second action triggers the need for a render, the root component <S type='italic'>wasn't anticipating this kind of change, because navigation hadn't completed yet</S></Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={3} textAlign='center' style={{ paddingTop: '25px' }}><span role='img' aria-label='boom'>💥💥💥</span></Text>
            </div>
        </Appear>
    </Slide>
);

export default ErrorExplanationSlide;
