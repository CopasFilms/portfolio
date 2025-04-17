import React from 'react';
import '../../../variables/Colors.css';
import './ButtonContactMe.css';

const ButtonContactMe = ({ width, height, text, alt }) => {
    
    return (
        <a href= "#contact" className="button-contactMe" style={{ width, height }} alt={alt}>
            {text}
        </a>
    );
};

export default ButtonContactMe;
