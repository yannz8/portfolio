import React, { useEffect } from "react";
import gsap from "gsap"
import SplitTextJS from "split-text-js";
import './Welcome.css'

function Welcome() {

    // Welcome animation
    useEffect(() => {
        const titles = gsap.utils.toArray('.text-wrapper p')
        const tl = gsap.timeline();
        titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);

            tl
                .from(splitTitle.chars, {
                    opacity: 0,
                    y: 80,
                    rotateX: -90,
                    stagger: .01,
                    duration: 2
                }, "<")

                .to(splitTitle.chars, {
                    opacity: 0,
                    y: -80,
                    rotateX: 90,
                    stagger: .01,
                    duration: 2
                }, "<1");
        });

    }, []);



    return (
        <div className="Welcome">
                <div className="container">
                    <div className="text-wrapper">
                        <p>Welcome</p>
                        <p>To my website</p>
                        <p>yann.mh</p>
                    </div>
                </div>
        </div>

    );
}

export default Welcome
