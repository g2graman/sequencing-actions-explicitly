import * as React from "react";
// import { Text } from "spectacle";

import { CodePaneTitle } from "./primitives";
import { ScrollingSlide } from "./scrolling-slide.component";
import { CodePane } from "./code-pane.component";
import { CodeCompare } from "./code-compare.component";

export type CodeSample = {
    title: string;
    code: string;
    lang: string;
};

export type CodeCompareSlideProps = {
    samples: CodeSample[],
    wide: boolean;
};

export const CodeCompareSlide: React.FunctionComponent<CodeCompareSlideProps> = ({
     samples: codeSamples,
     wide=true
}) => (
    <ScrollingSlide wide={wide}>
        <CodeCompare tracks={codeSamples.length}>
            {
                codeSamples.map((codeSample, index) => (
                    <CodePaneTitle key={`title-${index}`}>
                        { codeSample.title }
                    </CodePaneTitle>
                ))
            }
            {
                codeSamples.map((codeSample, index) => (
                    <CodePane key={`code-sample-${index}`} lang={codeSample.lang} source={codeSample.code} fill={true} />
                ))
            }
        </CodeCompare>
    </ScrollingSlide>
);
