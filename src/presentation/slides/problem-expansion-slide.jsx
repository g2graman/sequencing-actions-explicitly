import * as React from "react";
import { Heading, Slide, Text, Appear, List, ListItem, Code, Link } from "spectacle";

export const ProblemExpansionSlide = props => (
    <Slide {...props}>
        <Heading
            size={5}
            textAlign="left"
            textColor="secondary"
            lineHeight={1.2}
            bold={true}
        >
            Is it really a problem if we can't make those guarantees though?
        </Heading>
        <Appear>
            <div>
                <Text textSize={'32'} style={{ paddingTop: '50px' }} textAlign={'left'} textColor="secondary">Yes, definitely! Consider the following sequence of events:</Text>
                <List bulletStyle='arrow'>
                    <Appear>
                        <div>
                            <ListItem textSize={'32'} textColor="secondary" textAlign={'left'}>We dispatch an action that results in navigation</ListItem>
                        </div>
                    </Appear>
                    <Appear>
                        <div>
                            <ListItem textSize={'32'} textColor="secondary" textAlign={'left'}>We dispatch an action that affects rendering in some way, especially of the root component (which will usually contain a <Link href='//angular.io/api/router/RouterOutlet'>RouterOutlet</Link>)</ListItem>
                        </div>
                    </Appear>
                </List>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text textSize={'32'} textColor="secondary" style={{ paddingTop: '25px' }} textAlign={'left'}>This can actually be a source of <Code textSize={'32'} textColor={'#9a86fd'}>ExpressionChangedAfterItHasBeenCheckedError</Code>s</Text>
            </div>
        </Appear>
    </Slide>
);

export default ProblemExpansionSlide;
