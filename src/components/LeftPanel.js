import React from "react";

const LeftPanel = () => {
    return(
        <section className="panel">
            <ul>
                <button>Detect Language</button>
                <button>English</button>
                <button>French</button>
                <button>Spanish</button>
            </ul>
            <form>
                <textarea cols="30" rows="10"></textarea>
            </form>
        </section>
    );
}

export default LeftPanel