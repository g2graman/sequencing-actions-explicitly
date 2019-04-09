import * as React from "react";

import { CodeCompareSlide } from "../../shared/components/code-compare-slide";
import { standardCode, someEpicsSideEffect } from "./snippets";

const codeSamples = [{
    title: 'SomeComponent',
    code: standardCode,
    lang: 'ts'
}, {
    title: 'SomeEpics (with navigation side-effect)',
    code: someEpicsSideEffect,
    lang: 'ts'
}];

export const RevisitStandardSlide = () => (
    <CodeCompareSlide samples={codeSamples} textSize={'0.9vw'} wide={true}/>
);
