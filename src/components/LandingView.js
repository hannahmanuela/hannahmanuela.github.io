import './../App.css';
import React, { useEffect } from "react";

export default function LandingView() {

    useEffect(() => {
        const el = document.querySelector(".title-foto");

        el.addEventListener("mousemove", (e) => {
        el.style.backgroundPositionX = -e.offsetX / 5 + "px";
        el.style.backgroundPositionY = -e.offsetY / 5+ "px";
        });
        return () => {
            
        };
    }, []);

    return (
        <div>
            {/* <h1>Do I Dare Disturb the Universe?</h1> */}
            <div class="title-foto"></div>
            <div className="landing">
                <h1 id = "name"> Hannah Gross </h1>
            </div>
        </div>
    );
}
