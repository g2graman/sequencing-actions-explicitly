import { Heading } from "spectacle";
import React from "react";

export const SlideTitle = ({ title, ...restBaseProps }) => (
    <Heading
        size={6}
        textAlign="top"
        textColor="secondary"
        { ... restBaseProps }
    >
        { title }
    </Heading>
);
