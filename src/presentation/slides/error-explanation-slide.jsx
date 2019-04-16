import * as React from "react";
import { Heading, Slide, Appear, Code, S, Text } from "spectacle";

export const ErrorExplanationSlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
            textAlign="left"
            textColor="secondary"
            lineHeight={1.2}
            bold={true}
        >
            How exactly does an "ExpressionChanged..." error get triggered?
        </Heading>
        <Appear>
            <div>
                <Text textSize={'28'} textAlign='left' style={{ paddingTop: '50px' }} textColor="secondary">Let's try and reason about this <S type='italic'>loosely</S></Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text textSize={'28'} textAlign='left' style={{ paddingTop: '50px' }} textColor="secondary">Since the completion of navigation before handling <Code textSize={'28'} textColor={'#ffcc99'}>'ACTION_TWO'</Code> isn't guaranteed, <Code textSize={'28'} textColor={'#ffcc99'}>'ACTION_TWO'</Code> gets dispatched and handled during the render cycle of the root component that is focused on dealing with its router outlet</Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text textSize={'28'} textAlign='left' style={{ paddingTop: '50px' }} textColor="secondary">When the processing of <Code textSize={'28'} textColor={'#ffcc99'}>'ACTION_TWO'</Code> triggers the need for a render, the root component <S type='italic'>wasn't anticipating this kind of change</S></Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text textSize={'28'} style={{ paddingTop: '50px' }} textColor="secondary"><span role="img" aria-label="Explosion">💥💥💥</span></Text>
            </div>
        </Appear>
    </Slide>
);

export default ErrorExplanationSlide;

// ExpressionChangedAfterItHasBeenCheckedErrors
