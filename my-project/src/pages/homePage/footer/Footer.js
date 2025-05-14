import './Footer.css';

import useTexts from '../../../hooks/useTexts';
import Divider from '../../../components/divider/Divider';

import SocialButton from '../../../components/buttons/buttonRedeSocial/SocialButton';
import linkedinIcon from '../../../assets/icon/SocialLinkedin.svg';
import tiktokIcon from '../../../assets/icon/SocialTiktok.svg';
import youtubeinIcon from '../../../assets/icon/SocialYoutube.svg';


const Footer = () => {
    const texts = useTexts();

    return (
        <section id="footer">
            <div className="footer-panel">
                <div className="footer-header">
                    <div>
                        <p className="footer-textCopas">{texts.TitlePage_Footer}</p>
                        <p className="footer-subtextCopas">{texts.SubTitlePage_01_Footer}<br />{texts.SubTitlePage_02_Footer}</p>
                    </div>
                    <div>
                        <p className="footer-textCopas">{texts.SocialPage_Footer}</p>
                            <div className="redeSocial-contact">
                                <SocialButton height={"28px"} width={"28px"} icon={tiktokIcon} alt="Botão Tiktok" href="" />
                                <SocialButton height={"28px"} width={"28px"} icon={linkedinIcon} alt="Botão Linkedin" href="" />
                                <SocialButton height={"28px"} width={"28px"} icon={youtubeinIcon} alt="Botão YouTube" href="" />
                            </div>
                    </div>
                </div>
                <Divider margin={'20px 0px'} width={'90%'} thickness={'1px'} color={'#A4A4A4'}/>
                <p className="footer-created">{texts.Created_Footer} <a className="footer-link" href="https://matheusfelipe20.github.io/portfolio/">MatheusFelipe20</a></p>
            </div>
        </section>
    );
};

export default Footer;