import * as React from "react";
import { Slide, Appear } from "spectacle";

import { Code, Heading, Link, List, ListItem, Text } from "../../shared/components/primitives";

export const ProblemExpansionSlide = props => (
    <Slide {...props}>
        <Heading
            size={6}
            bold={true}
        >
            Is it really a problem if we can't make those guarantees though?
        </Heading>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '50px' }}>Yes, definitely! Consider the following sequence of events:</Text>
                <List bulletStyle='arrow'>
                    <Appear>
                        <div>
                            <ListItem f={2}>We dispatch an action that results in navigation</ListItem>
                        </div>
                    </Appear>
                    <Appear>
                        <div>
                            <ListItem f={2}>We dispatch an action that affects rendering in some way, especially of the root component (which will usually contain a <Link href='//angular.io/api/router/RouterOutlet'>RouterOutlet</Link>)</ListItem>
                        </div>
                    </Appear>
                </List>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '25px' }}>This can actually be a source of <Code textSize={'32'} textColor={'#9a86fd'}>ExpressionChangedAfterItHasBeenCheckedError</Code>s</Text>
            </div>
        </Appear>
    </Slide>
);

export default ProblemExpansionSlide;
