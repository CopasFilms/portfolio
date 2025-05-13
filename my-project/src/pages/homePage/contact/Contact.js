import { useState } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';

import useTexts from '../../../hooks/useTexts';
import Divider from '../../../components/divider/Divider';
import SocialButton from '../../../components/buttons/buttonRedeSocial/SocialButton';

import linkedinIcon from '../../../assets/icon/SocialLinkedin.svg';
import tiktokIcon from '../../../assets/icon/SocialTiktok.svg';
import youtubeinIcon from '../../../assets/icon/SocialYoutube.svg';

const Contact = () => {
    const texts = useTexts();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [sendStatus, setSendStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0awtb2p', 'template_dvflhya', e.target, 'Dbvv8xIxsdRZIJptt')
            .then((result) => {
                console.log('Email enviado com sucesso:', result.text);
                setSendStatus('Mensagem Enviada');
            })
            .catch((error) => {
                console.log('Erro ao enviar e-mail:', error.text);
                setSendStatus('Erro ao enviar a mensagem');
            });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact">
            <div className="section-contact">
                <div className="header-contact">
                    <p className="titleHeader-contact">{texts.TitlePage_Contact}</p>
                    <div className="divider-contact">
                        <Divider margin={'0px'} width={'100%'} gradient="linear-gradient(to right, var(--color-element-0), var(--color-element-100))" />
                    </div>
                </div>
                <div className="panel-contact">
                    <div className="left-contact">
                        <p className="text-logo-contact">{texts.NameLogoContact}</p>
                        <Divider margin={'0px'} width={'70%'} color={'var(--color-primary)'} />
                        <div className="panel-info-contact">
                            <p className="text-info-contact">{texts.EmailLogoContact}</p>
                            <p className="text-info-contact">{texts.TelephoneLogoContact}</p>
                            <div className="redeSocial-contact">
                                <SocialButton height={"28px"} width={"28px"} icon={tiktokIcon} alt="Botão Tiktok" href="" />
                                <SocialButton height={"28px"} width={"28px"} icon={linkedinIcon} alt="Botão Linkedin" href="" />
                                <SocialButton height={"28px"} width={"28px"} icon={youtubeinIcon} alt="Botão YouTube" href="" />
                            </div>
                            <button className="copy-button-contact" onClick={() => navigator.clipboard.writeText("CopasEditor@gmail.com")}>
                                {texts.CopyEmailContact}
                            </button>
                        </div>
                    </div>
                    <div className="right-contact">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h3 className="title-form">{texts.TitleForm_Contact}</h3>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder=" "
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="name">{texts.NameForm_Contact}</label>
                            </div>
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder=" "
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">{texts.EmailForm_Contact}</label>
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder=" "
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="subject">{texts.SubjectForm_Contact}</label>
                            </div>
                            <div className="input-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder=" "
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="message">{texts.MessageForm_Contact}</label>
                            </div>
                            <div className="form-actions">
                                <button type="submit">{texts.ButtonSendForm_Contact}</button>
                                <span className="send-status">{sendStatus}</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;