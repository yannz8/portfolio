import React from "react";
import SceneCube from "../components/SceneCube"
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <div className="container">
                <div id="cube" >
                    <SceneCube />
                </div>

            </div>
        </div>

    );
}

export default Home
