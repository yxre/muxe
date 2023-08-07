import React from "react";
import {Container} from "@/components/Container";
import {Section} from "@/components/Section";
import {IntroductionSection} from "@/components/IntroductionSection";


export default function Home() {
    return (
        <Container>
            <IntroductionSection/>

            <Section>
                <h3 className="text-xl">Component Tags</h3>

            </Section>


        </Container>
    );
}
