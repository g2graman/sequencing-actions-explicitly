import * as React from "react";

import { CodeCompareSlide } from "../../shared/components/code-compare-slide";
import { standardCode, someEpicsOriginal } from "./snippets";

const codeSamples = [{
    title: 'SomeComponent',
    code: standardCode,
    lang: 'js'
}, {
    title: 'SomeEpics',
    code: someEpicsOriginal,
    lang: 'js'
}];

export const InferStandardSlide = () => (
    <CodeCompareSlide samples={codeSamples} textSize={'0.9vw'} wide={true}/>
);
