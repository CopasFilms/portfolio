import './Price.css';
import '../../variables/Colors.css'

import useTexts from '../../hooks/useTexts';
import Header from '../../components/header/Header';
import Divider from '../../components/divider/Divider';

import IconCorrect from '../../assets/icon/iconCorrect.svg'
import IconNivel2 from '../../assets/icon/iconNivel2.svg'
import IconNivel3 from '../../assets/icon/iconNivel3.svg'
import IconNivel1 from '../../assets/icon/iconNivel1.svg'
import CalculatorPrice from '../../components/CalculatorPrice/CalculatorPrice';
import Footer from '../homePage/footer/Footer';

const Price = () => {
    const texts = useTexts();

    return (
        <>
        <Header />
        <div className="section-price">
            <div className="header-price">
                <p className="titleHeader-price">{texts.TitlePage_Price}</p>
                <div className="divider-price">
                    <Divider margin={'0px'} width={'100%'} gradient="linear-gradient(to right, var(--color-element-0), var(--color-element-100))"/>
                </div>
            </div>
            <div>
                <p className="titleForm-price">{texts.SubTitle_Price}</p>
            </div>
            <div className="panel-table-price">
                <CalculatorPrice/>
                <div className="form-price">
                    <p className="descriptionForm-price">{texts.TitleForm_Price}</p>
                    <p className="textFrom-price">{texts.TextForm_Price}</p>
                    <div className="panelObservation-price">
                        <p className="textObservation-price">{texts.TextObservation01_Price}</p>
                        <p className="textObservation-price">{texts.TextObservation02_Price}</p>
                        <p className="textObservation-price">{texts.TextObservation03_Price}</p>
                    </div>
                    <div className="panelComplexity-price">
                        <div className="cardComplexity-price">
                            <div className="cardComplexity-header-price">
                                <div>
                                    <p className="titleComplexity-price">{texts.TitleComplexity_Basic_Price}</p>
                                    <p className="subtitleComplexity-price">{texts.NivelComplexity_Basic_Price}</p>
                                </div>
                                <div>
                                    <img src={IconNivel1} className="iconComplexity-price" alt="icone pincel"/>
                                </div>
                            </div>
                            <Divider margin={'0px'} width={'100%'} color={'rgb(226, 228, 233)'} thickness={'1px'}/>
                            <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity01_Basic_Price}</p>
                            </div>
                            <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity02_Basic_Price}</p>
                            </div>
                                                    <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity03_Basic_Price}</p>
                            </div>
                        </div>
                        <div className="cardComplexity-price">
                            <div className="cardComplexity-header-price">
                                <div>
                                    <p className="titleComplexity-price">{texts.TitleComplexity_Intermediary_Price}</p>
                                    <p className="subtitleComplexity-price">{texts.NivelComplexity_Intermediary_Price}</p>
                                </div>
                                <div>
                                    <img src={IconNivel2} className="iconComplexity-price" alt="icone foguete"/>
                                </div>
                            </div>
                            <Divider margin={'0px'} width={'100%'} color={'rgb(226, 228, 233)'} thickness={'1px'}/>
                            <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                    <p className="textComplexity-price">{texts.TextComplexity01_Intermediary_Price}</p>
                            </div>
                            <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity02_Intermediary_Price}</p>
                            </div>
                                                    <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity03_Intermediary_Price}</p>
                            </div>
                            <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity04_Intermediary_Price}</p>
                            </div>
                        </div>
                        <div className="cardComplexity-price">
                            <div className="cardComplexity-header-price">
                                <div>
                                    <p className="titleComplexity-price">{texts.TitleComplexity_Professional_Price}</p>
                                    <p className="subtitleComplexity-price">{texts.NivelComplexity_Professional_Price}</p>
                                </div>
                                <div>
                                    <img src={IconNivel3} className="iconComplexity-price" alt="icone camera"/>
                                </div>
                            </div>
                            <Divider margin={'0px'} width={'100%'} color={'rgb(226, 228, 233)'} thickness={'1px'}/>
                            <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity01_Professional_Price}</p>
                            </div>
                            <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity02_Professional_Price}</p>
                            </div>
                            <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity03_Professional_Price}</p>
                            </div>
                            <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity04_Professional_Price}</p>
                            </div>
                            <div className="content-textComplexity-price">
                                <img src={IconCorrect} className="iconTextComplexity-price" alt="icone correto"/>
                                <p className="textComplexity-price">{texts.TextComplexity05_Professional_Price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
    );
};

export default Price;