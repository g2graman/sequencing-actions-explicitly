import * as React from "react";

import { CodeCompareSlide } from "../../shared/components/code-compare-slide";
import { standardCode, someEpicsSideEffect } from "./snippets";

const codeSamples = [{
    title: 'SomeComponent',
    code: standardCode,
    lang: 'js'
}, {
    title: 'SomeEpics',
    code: someEpicsSideEffect,
    lang: 'js'
}];

export const InferStandardSlide = () => (
    <CodeCompareSlide samples={codeSamples} wide={true}/>
);

export default InferStandardSlide;
