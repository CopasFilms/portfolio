import React from 'react';
import './panelAnimated.css';
import useTexts from '../../hooks/useTexts.js';
import iconVideo from '../../assets/icon/iconVideo.svg';

const PanelAnimated = ({ speed = 30 }) => {
    const texts = useTexts();

    const TextPanelAnimated = [
        texts.Text01_PanelAnimated,
        texts.Text02_PanelAnimated,
        texts.Text03_PanelAnimated,
        texts.Text04_PanelAnimated,
        texts.Text05_PanelAnimated,
        texts.Text06_PanelAnimated
    ];

    const items = TextPanelAnimated.map((text, index) => (
        <div className="item-panelAnimated" key={index}>
            <span>{text}</span>
            <img src={iconVideo} alt="icon" />
        </div>
    ));

    return (
        <div className="panel-animated-wrapper">
            <div
                className="panel-animated-track"
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
                {items}
                {items}
                {items}
            </div>
        </div>
    );
};

export default PanelAnimated;