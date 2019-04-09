import * as React from "react";

import { CodeCompareSlide } from "../../shared/components/code-compare-slide";
import { finalStandardCode, finalSomeEpicsCode } from "./snippets";

const codeSamples = [{
    title: 'SomeComponent (Final)',
    code: finalStandardCode,
    lang: 'ts'
}, {
    title: 'SomeEpics (Final)',
    code: finalSomeEpicsCode,
    lang: 'ts'
}];

export const FinalStandardSlide = () => (
    <CodeCompareSlide samples={codeSamples} textSize={'0.9vw'} wide={true}/>
);