import * as React from "react";
import { Appear } from "spectacle";

import { CodePaneTitle, Heading, List, ListItem, Text, Slide } from "../../shared/components/primitives";
import { CodePane } from "../../shared/components/code-pane.component";
import { CodeCompare } from "../../shared/components/code-compare.component";

const navigateEpic = `    @Epic()
         reactToAction1 = (action$: ActionsObservable<Action>) => (
            action$.ofType(
                'NAVIGATE_TO_ANOTHER_PAGE'
            )
                .pipe(
                    // navigation side-effect
                    tap(() =>
                        this.router.navigateByUrl('/anotherPage')
                    ),
                    ignoreElements()
                )
         )
`;
const navigationDispatcher = `    this.someService.navigateToAnotherPage()`;

export const ProblemExpansionSlide = props => (
    <Slide {...props} wide={true}>
        <Heading
            size={6}
            bold={true}
        >
            Is it really a problem if we can't make those guarantees though?
        </Heading>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '50px' }}>Yes, definitely! Consider the following sequence of events:</Text>
                <List>
                    <Appear>
                        <div>
                            <ListItem f={2}>We dispatch an action that results in navigation
                                <CodeCompare style={{ paddingTop: '25px' }} tracks={2}>
                                    <CodePaneTitle>
                                        Dispatching the action
                                    </CodePaneTitle>
                                    <CodePaneTitle>
                                        An epic that triggers navigation
                                    </CodePaneTitle>
                                    <CodePane lang={'js'} source={navigationDispatcher} fill={true} />
                                    <CodePane lang={'js'} source={navigateEpic} fill={true} />
                                </CodeCompare>
                            </ListItem>
                        </div>
                    </Appear>
                    {/*<Appear>*/}
                    {/*    <div>*/}
                    {/*        <ListItem f={2}>We dispatch an action that affects rendering in some way, especially of the root component (which will usually contain a <Link href='//angular.io/api/router/RouterOutlet'>RouterOutlet</Link>)</ListItem>*/}
                    {/*    </div>*/}
                    {/*</Appear>*/}
                </List>
            </div>
        </Appear>
        {/*<Appear>*/}
        {/*    <div>*/}
        {/*        <Text f={2} style={{ paddingTop: '25px' }}>This can actually be a source of <Code textSize={'32'} textColor={'#9a86fd'}>ExpressionChangedAfterItHasBeenCheckedError</Code>s</Text>*/}
        {/*    </div>*/}
        {/*</Appear>*/}
    </Slide>
);

export default ProblemExpansionSlide;
