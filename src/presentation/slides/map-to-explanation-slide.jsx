import * as React from "react";
import { Appear } from "spectacle";

import { simpleSequenceUsingPayloadCode } from "./snippets";
import { Code, Heading, List, ListItem, Text, Slide } from "../../shared/components/primitives";
import { CodePane } from "../../shared/components/code-pane.component";

const mapEquivalence = `map(() => ({ type: 'ACTION_TWO' }))`;
const mapToEquivalence = `mapTo({ type: 'ACTION_TWO' })`;

export const MapToExplanationSlide = props => (
    <Slide {...props}>
        <Heading
            size={6}
        >
            Side note: <Code f={2} textColor={'#9a86fd'}>mapTo</Code> v. <Code f={2} textColor={'#9a86fd'}>map</Code>
        </Heading>
        <Appear>
            <div>
                <Text f={3}>For simplicity, instead of using<Code textColor='#9a86fd' f={2}>map</Code> and providing a function which returns an action, you can use <Code textColor='#9a86fd' f={2}>mapTo</Code> and provide the created action directly
                </Text>
            </div>
        </Appear>
        <Appear>
            <div style={{ paddingTop: '15px' }}>
                <Text f={3}> For clarity, these are equivalent
                    <List marker={''}>
                        <div>
                            <ListItem f={3}><CodePane lang='js' source={mapEquivalence}/></ListItem>
                        </div>
                        <div style={{ paddingTop: '5px' }}>
                            <ListItem f={3}><CodePane lang='js' source={mapToEquivalence}/></ListItem>
                        </div>
                    </List>
                </Text>
            </div>
        </Appear>
        <Appear>
            <div>
                <Text f={3}>
                    However, if the creation of the new action depends on something in the stream, <Code f={3} textColor={'#9a86fd'}>mapTo</Code> won't help. For example:
                </Text>
                <CodePane source={simpleSequenceUsingPayloadCode} lang='js' f={4} />
            </div>
        </Appear>
    </Slide>
);

export default MapToExplanationSlide;
