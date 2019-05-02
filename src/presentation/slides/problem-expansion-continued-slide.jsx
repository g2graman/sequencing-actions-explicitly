import * as React from "react";
import { Appear } from "spectacle";

import { Code, CodePaneTitle, Heading, Link, List, ListItem, Text, Slide} from "../../shared/components/primitives";
import { CodePane } from "../../shared/components/code-pane.component";
import { CodeCompare } from "../../shared/components/code-compare.component";

const appComponentTemplateCode = `    <div *ngIf="selectValueFromState$ | async">
        ...
    </div>
    <router-outlet></router-outlet>
`;

const changeStateCode = `    this.someService.changeSomeValueInState()`;

export const ProblemExpansionContinuedSlide = props => (
    <Slide {...props} wide={true}>
        <Heading
            size={6}
            bold={true}
        >
            Is it really a problem if we can't make those guarantees though? (continued)
        </Heading>
        <List>
            <ListItem f={2}>Then, we dispatch an action that affects rendering in some way, especially of the root component (which will usually contain a <Link href='//angular.io/api/router/RouterOutlet'>RouterOutlet</Link>)</ListItem>
            <CodeCompare tracks={2} style={{ paddingTop: '50px'}}>
                <CodePaneTitle>
                    Dispatching the action
                </CodePaneTitle>
                <CodePaneTitle f={4}>
                    app.component.html
                </CodePaneTitle>
                <CodePane lang={'js'} source={changeStateCode} fill={true} />
                <CodePane lang={'html'} source={appComponentTemplateCode} fill={true} />
            </CodeCompare>
        </List>
        <Appear>
            <div>
                <Text f={2} style={{ paddingTop: '25px' }}>This can actually be a source of <Code textSize={'32'} textColor={'#9a86fd'}>ExpressionChangedAfterItHasBeenCheckedError</Code>s</Text>
            </div>
        </Appear>
    </Slide>
);

export default ProblemExpansionContinuedSlide;
