import './Footer.css';

import useTexts from '../../../hooks/useTexts';
import iconLink from '../../../assets/icon/iconLink.svg'

const Footer = () => {
    const texts = useTexts();

    return (
        <section id="footer">
            <div className="footer-panel">
                <p className="footer-textCopas">{texts.TitlePage_Footer}</p>
                <p className="footer-created">{texts.Created_Footer}<a className="footer-link" href="https://matheusfelipe20.github.io/portfolio/"> MatheusFelipe20 <img className="icon-link-footer" src={iconLink} alt="icone link"/></a></p>
            </div>
        </section>
    );
};

export default Footer;