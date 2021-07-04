import React from 'react'


const Slide = ({index, audio}) => {

    return (
        <div className="slide">
            <img width="70%" src={index}></img>
        </div>
    );

};

export default Slide;