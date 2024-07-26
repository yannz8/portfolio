import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SceneCube from "../components/SceneCube"
import Welcome from "./Welcome"
import './Home.css'

function Home() {
    
    //localStorage.clear()

    //Welcome-page
    const [showFirstComponent, setShowFirstComponent] = useState(true);
    const [showWelcome, setShowWelcome] = useState(() => {
        // Check localStorage only on initial render
        return !localStorage.getItem('welcomeShown');
    });

    useEffect(() => {
        // timer Welcome
        console.log(showWelcome)
        if (showWelcome) {
            const timer = setTimeout(() => {
                setShowFirstComponent(false);
                localStorage.setItem('welcomeShown', 'true');
            }, 3000); // Change to 3000ms (3 seconds) to see the transition after 3 seconds
            return () => clearTimeout(timer);
        }else {
            // Immediately hide the welcome component if showWelcome is false
            setShowFirstComponent(false);
        }
    }, [showWelcome]);

    return (
        <div className="Home">
            <div className="container">
                <TransitionGroup>
                    {showFirstComponent ? (
                        <CSSTransition key="first" timeout={3000} classNames="fade">
                            <Welcome />
                        </CSSTransition>
                    ) : (
                        <CSSTransition key="second" timeout={3000} classNames="fade">
                            <div id="cube" >
                                <SceneCube />
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup >
            </div>
        </div>

    );
}

export default Home
