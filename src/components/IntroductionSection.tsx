"use client";
import {Section} from "@/components/Section";
import React, {useState} from "react";


export const IntroductionSection = ({}) => {
    const hideIntroStatic = window.localStorage.getItem("HIDE_INTRO") === "true";
    const [hideIntro, setHideIntro] = useState(hideIntroStatic);
    const onClick = () => {
        window.localStorage.setItem("HIDE_INTRO", "true")
        setHideIntro(true)
    }
    if (hideIntro) return "";
    else {
        return <Section>
            <div className="flex justify-between align-middle">
                <h3 className="text-xl font-bold pb-4">mUXe</h3>
                <div className="relative -top-5  fill-gray-800 dark:fill-gray-200" onClick={onClick}>
                    <svg height="15px" width="15px" version="1.1" id="Capa_1" viewBox="0 0 460.775 460.775">
<path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
</svg>
                </div>
            </div>
            <p className="pb-4">
                A muse for UX. Hosts a collection of images of existing or UX designs
                that companies use. Diligently tagged to browse for inspiration.
            </p>
            <h3 className="text-xl font-bold pb-4">How to use?</h3>
            <p>
                Feeling uninspired. Browse the tags and look for similar UX
            </p>
        </Section>
    }
}
