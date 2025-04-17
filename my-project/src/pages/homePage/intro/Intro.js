import React from 'react';
import './Intro.css';
import LanguageSelector from '../../../components/language/LanguageSelector';
import ButtonContactMe from '../../../components/buttons/buttonContactMe/ButtonContactMe';
import SocialButton from '../../../components/buttons/buttonRedeSocial/SocialButton';

import imageIntro from '../../../assets/img/imageIntro.png';

import linkedinIcon from '../../../assets/icon/SocialLinkedin.svg';
import tiktokIcon from '../../../assets/icon/SocialTiktok.svg';
import youtubeinIcon from '../../../assets/icon/SocialYoutube.svg';
import useTexts from '../../../hooks/useTexts';

const Intro = () => {
    const texts = useTexts();

    return (
        <section id="home">
            <div className="section-home">
                <div className="panel-home">
                    <div className="left-home">
                        <p className="text-name-home">{texts.NameUser_Home}</p>
                        <p className="text-profissional-home">{texts.NameProfessional_Home}</p>
                        <div className="redeSocial-home">
                            <SocialButton height={"28px"} width={"28px"} icon={tiktokIcon} alt="Botão Tiktok" href=""/>
                            <SocialButton height={"28px"} width={"28px"} icon={linkedinIcon} alt="Botão Linkedin" href=""/>
                            <SocialButton height={"28px"} width={"28px"} icon={youtubeinIcon} alt="Botão YouTube" href=""/>
                        </div>
                        <ButtonContactMe height="60px" text={texts.ButtonContact_Home} width="320px" alt="Botão de Contato"/>
                    </div>
                    <div className="right-home">
                        <div className="languageSelector-home">
                            <LanguageSelector/>
                        </div>
                        <div className="image-home">
                            <div className="circle-background"/>
                            <img className="foreground-image" src={imageIntro} alt="Imagem de Introdução"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;