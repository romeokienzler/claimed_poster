import React from 'react'
import useSound from 'use-sound';


const Slide = ({index, sound}) => {

    return (
        <div className="slide">
            <img src={index}></img>
        </div>
    );

};

export default Slide;