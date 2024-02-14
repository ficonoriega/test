import React from "react";
import CopyImage from "../assets/images/Copy.svg";
import Sound from "../assets/images/sound_max_fill.svg"
import Expand from "../assets/images/Expand_down.svg"
import Hotizontal from "../assets/images/Horizontal_top_left_main.svg"


const Panels = () => {
    return(
        <>
            <section className="panel">
                <nav>
                    <button className="languageButton">Detect Language</button>
                    <button className="languageButton">English</button>
                    <button className="languageButton">French</button>
                    <button className="languageButton">Spanish <img src={Expand} alt="Expand" /></button>
                </nav>
                <hr/>
                <form>
                    <textarea cols="50" rows="3"></textarea>
                    <p id="letterCount">12/500</p>
                </form>
                <footer>
                    <button><img src={Sound} alt="Sound" /></button>
                    <button><img src={CopyImage} alt="Copy text" /></button>
                    <button>Translate</button>
                </footer>
            </section>
            <section className="panel">
            <ul>
                <button className="languageButton">English</button>
                <button className="languageButton">French</button>
                <button className="languageButton">Spanish <img src={Expand} alt="Expand" /></button>
                <button><img src={Hotizontal} alt="Shift languages" /></button>
            </ul>
            <hr/>
            <form>
                <textarea cols="50" rows="3"></textarea>
                <p id="letterCount">12/500</p>
            </form>
            <footer>
                <button><img src={Sound} alt="Sound" /></button>
                <button><img src={CopyImage} alt="Copy text" /></button>
            </footer>
        </section>
        </>
    );
}

export default Panels