import React from "react";
import CopyImage from "../assets/images/Copy.svg";
import Sound from "../assets/images/sound_max_fill.svg"
import Expand from "../assets/images/Expand_down.svg"
import Hotizontal from "../assets/images/Horizontal_top_left_main.svg"
import Sort from "../assets/images/Sort_alfa.svg"


const Panels = () => {
    return(
        <>
            <section className="panel">
                <nav>
                    <button className="languageBtn">Detect Language</button>
                    <button className="languageBtn">English</button>
                    <button className="languageBtn">French</button>
                    <button className="languageBtn"><span>Spanish</span> <img src={Expand} alt="Expand" /></button>
                </nav>
                <hr/>
                <form>
                    <textarea cols="50" rows="3"></textarea>
                    <p id="letterCount">12/500</p>
                </form>
                <footer>
                    <button className="actionBtn"><img src={Sound} alt="Sound" /></button>
                    <button className="actionBtn"><img src={CopyImage} alt="Copy text" /></button>
                    <button className="translateBtn"><img src={Sort} alt="Copy text" />Translate</button>
                </footer>
            </section>
            <section className="panel">
                <nav>
                    <button className="languageBtn">English</button>
                    <button className="languageBtn">French</button>
                    <button className="languageBtn">Spanish <img src={Expand} alt="Expand" /></button>
                    <button className="actionBtn"><img src={Hotizontal} alt="Shift languages" /></button>
                </nav>
                <hr/>
                <form>
                    <textarea cols="50" rows="3"></textarea>
                    <p id="letterCount">12/500</p>
                </form>
                <footer>
                    <button className="actionBtn"><img src={Sound} alt="Sound" /></button>
                    <button className="actionBtn"><img src={CopyImage} alt="Copy text" /></button>
                </footer>
            </section>
        </>
    );
}

export default Panels