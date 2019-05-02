import * as React from "react";
import { Deck } from "spectacle";


import { theme } from "../shared/theme";

import IntroSlide from "./slides/intro-slide";
import QuestionSlide from "./slides/question-slide";
import InferStandardSlide from "./slides/infer-standard-slide";
import ProblemSetupSlide from "./slides/problem-setup-slide";
import ProblemExpansionSlide from "./slides/problem-expansion-slide";
import ProblemExpansionContinuedSlide from "./slides/problem-expansion-continued-slide";
import ErrorExplanationSlide from "./slides/error-explanation-slide";
import MapNewActionSlide from "./slides/map-new-action-slide";
import MapToExplanationSlide from "./slides/map-to-explanation-slide";
import StandardEquivalenceSlide from "./slides/standard-equivalence-slide";
import RoutingSideEffectSlide from "./slides/routing-side-effect-slide";
import MergeMapSlide from "./slides/mergemap-slide";
import FinalBreakdownSlide from "./slides/final-breakdown-slide";
import FinalStandardSlide from "./slides/final-standard-slide";
import TakeawaySlide from "./slides/takeaway-slide";

export const Presentation = () => (
    <Deck
        transition={['slide', 'fade']}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
    >
        <IntroSlide/>
        <QuestionSlide/>
        <InferStandardSlide/>
        <ProblemSetupSlide/>
        <ProblemExpansionSlide/>
        <ProblemExpansionContinuedSlide/>
        <ErrorExplanationSlide/>
        <MapNewActionSlide/>
        <MapToExplanationSlide/>
        <StandardEquivalenceSlide/>
        <RoutingSideEffectSlide/>
        <MergeMapSlide/>
        <FinalBreakdownSlide />
        <FinalStandardSlide/>
        <TakeawaySlide/>
    </Deck>
);

export default Presentation;
