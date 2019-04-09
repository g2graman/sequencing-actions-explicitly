import * as React from "react";
import { Deck } from "spectacle";

import { theme } from "../shared/theme";

import { IntroSlide } from "./slides/01-intro-slide";
import { QuestionSlide } from "./slides/02-question-slide";
import { InferStandardSlide } from "./slides/03-infer-standard-slide";
import { ProblemSetupSlide } from "./slides/04-problem-setup-slide";
import { RevisitStandardSlide } from "./slides/05-revisit-standard-slide";
import { MapNewActionSlide } from "./slides/06-map-new-action-slide";
import { StandardEquivalenceSlide } from "./slides/07-standard-equivalence-slide";
import { RoutingSideEffectSlide } from "./slides/08-routing-side-effect-slide";
import { MergeMapSlide } from "./slides/09-mergemap-slide";
import { FinalStandardSlide } from "./slides/10-final-standard-slide";

export const Presentation = () => (
    <Deck
        transition={['slide', 'fade']}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
    >
        <IntroSlide />
        <QuestionSlide />
        <InferStandardSlide />
        <ProblemSetupSlide />
        <RevisitStandardSlide />
        <MapNewActionSlide />
        <StandardEquivalenceSlide />
        <RoutingSideEffectSlide />
        <MergeMapSlide />
        <FinalStandardSlide />
    </Deck>
);

export default Presentation;
