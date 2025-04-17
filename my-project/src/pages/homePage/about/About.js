import React from 'react';
import './About.css';

import useTexts from '../../../hooks/useTexts';
import Divider from '../../../components/divider/Divider';

import imageAbout from '../../../assets/img/imageAbout.png'

const About = () => {
    const texts = useTexts();

    return (
        <section id="about">
            <div className="section-about">
                <div className="header-about">
                    <p className="titleHeader-about">{texts.TitlePage_About}</p>
                    <div className="divider-about">
                        <Divider margin={'0px'} width={'100%'} gradient="linear-gradient(to right, var(--color-element-0), var(--color-element-100))"/>
                    </div>
                </div>
                <div className="panel-about">
                    <div className="left-about">
                        <p className="text-primary-about">{texts.TextPresentation_About}</p>
                        <p className="text-about">{texts.Text01_About}</p>
                        <p className="text-about">{texts.Text02_About}</p>
                        <p className="text-about">{texts.Text03_About}</p>
                    </div>
                    <div className="right-about">
                        <img className="image-about" src={imageAbout} alt="Imagem de Perfil"/>
                    </div>
                </div>
                <div className="panel-statistic-about">
                    <div className="card-statistic">
                        <p className="value-statistic">2+</p>
                        <p className="text-statistic">{texts.PanelStatisticYears_About}</p>
                    </div>
                    <div className="card-statistic">
                        <p className="value-statistic">2M+</p>
                        <p className="text-statistic">{texts.PanelStatisticViews_About}</p>
                    </div>
                    <div className="card-statistic">
                        <p className="value-statistic">23+</p>
                        <p className="text-statistic">{texts.PanelStatisticProjects_About}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;