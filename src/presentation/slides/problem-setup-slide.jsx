import * as React from "react";
import { Slide, Appear } from "spectacle";

import { Code, Heading, Text } from "../../shared/components/primitives";

export const ProblemSetupSlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
            bold={true}
        >
            In that last snippet, can we guarantee that <Code textColor={'#ffcc99'}>'ACTION_TWO'</Code> gets processed only after <Code textColor={'#ffcc99'}>'ACTION_ONE'</Code> and all of its side-effects?
        </Heading>
        <Appear>
            <div>
                <Text style={{ paddingTop: '50px' }}>It might be possible but we would have to be really careful. We can make things a bit easier with a pattern.</Text>
            </div>
        </Appear>
    </Slide>
);

export default ProblemSetupSlide;
