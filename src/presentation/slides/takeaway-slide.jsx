import * as React from "react";
import { Appear } from "spectacle";

import { Slide, Heading, Text } from "../../shared/components/primitives";

export const TakeawaySlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
        >
            Takeaway:
        </Heading>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '50px', paddingLeft: '50px' }}>We can sequence actions and their side-effects explicitly if we sequence actions inside epics since observables are declarative by design</Text>
            </div>
        </Appear>
    </Slide>
);

export default TakeawaySlide;
