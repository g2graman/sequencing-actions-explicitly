import * as React from "react";
import { Text } from "spectacle";

import { ScrollingSlide } from "./scrolling-slide.component";
import { MyCodePane } from "./my-code-pane.component";
import { CodeCompare } from "./code-compare.component";

export type CodeSample = {
    title: string;
    code: string;
    lang: string;
};

export type CodeCompareSlideProps = {
    samples: CodeSample[],
    textSize: string;
    wide: boolean;
};

export const CodeCompareSlide: React.FunctionComponent<CodeCompareSlideProps> = ({
     samples: codeSamples,
     textSize='calc(16px + 6 * ((100vw - 320px) / 680))',
     wide=true
}) => (
    <ScrollingSlide wide={wide}>
        <CodeCompare tracks={codeSamples.length}>
            {
                codeSamples.map((codeSample, index) => (
                    <Text key={`title-${index}`} textSize={'20'} textColor="secondary" style={{ position: "sticky", top: "0" }}>
                        { codeSample.title }
                    </Text>
                ))
            }
            {
                codeSamples.map((codeSample, index) => (
                    <MyCodePane key={`code-sample-${index}`} textSize={textSize} lang={codeSample.lang} source={codeSample.code} fill={true} />
                ))
            }
        </CodeCompare>
    </ScrollingSlide>
);
