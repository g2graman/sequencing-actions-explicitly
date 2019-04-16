import * as React from "react";
import { Heading, Slide, Appear, Text } from "spectacle";

export const TakeawaySlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
            textAlign="left"
            textColor="secondary"
            lineHeight={1.2}
        >
            Takeaway:
        </Heading>
        <Appear>
            <div>
                <Text style={{ paddingTop: '50px' }} textAlign={'left'} textColor="secondary">We can sequence actions and their side-effects explicitly if we sequence actions inside epics since observables are declarative by design</Text>
            </div>
        </Appear>
    </Slide>
);

export default TakeawaySlide;
