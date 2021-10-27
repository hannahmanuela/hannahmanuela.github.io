import './App.css';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import title_foto from './title_foto.png'; 

export default function HomePage() {

    useEffect(() => {
        // const bg = document.querySelector('.background-image');
        // const windowWidth = window.innerWidth / 2;
        // const windowHeight = window.innerHeight / 2 ;

        // bg.addEventListener('mousemove', (e) => {
        //     const mouseX = e.clientX / windowWidth;
        //     const mouseY = e.clientY / windowHeight;
            
        //     bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
        const el = document.querySelector("#title_foto");

        el.addEventListener("mousemove", (e) => {
        el.style.backgroundPositionX = -e.offsetX / 5 + "px";
        el.style.backgroundPositionY = -e.offsetY / 5+ "px";
        });
        return () => {
            
        };
    }, []);

    return (
        <div>
            <h1>Do I Dare Disturb the Universe?</h1>
            {/* <div class="background-image"></div> */}
            <div class="title_foto" id="title_foto"></div>
            <div id="scroll_button" > 
                <Link to="/infoPage">
                    <p> See Info! </p>
                </Link>
            </div>
            <div>
                WHAT TO PUT HERE?
            </div>
        </div>
    );
}