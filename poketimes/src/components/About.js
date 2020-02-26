import React from 'react';
import Rainbow from "../hoc/Rainbow";

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>All about Poke'Times</p>
        </div>
    )
};

export default Rainbow(About)