import * as React from "react";

import { CodeCompareSlide } from "../../shared/components/code-compare-slide";
import { finalStandardCode, finalSomeEpicsCode } from "./snippets";

const codeSamples = [{
    title: 'SomeComponent (Final)',
    code: finalStandardCode,
    lang: 'js'
}, {
    title: 'SomeEpics (Final)',
    code: finalSomeEpicsCode,
    lang: 'js'
}];

export const FinalStandardSlide = () => (
    <CodeCompareSlide samples={codeSamples} wide={true}/>
);

export default FinalStandardSlide;
