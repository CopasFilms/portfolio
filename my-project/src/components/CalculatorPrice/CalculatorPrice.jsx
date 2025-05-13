import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './CalculatorPrice.css';
import useTexts from '../../hooks/useTexts';

import iconPrice from '../../assets/icon/iconCalculatorPrice.svg'

export default function CalculatorPrice() {
    const [videoRequested, setVideoRequested] = useState(0);
    const [videoSent, setVideoSent] = useState(0);
    const [complexity, setComplexity] = useState(1);
    const [price, setPrice] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(5.2);
    const texts = useTexts();
    
    const { language } = useLanguage();
    const currency = language === 'en-US' ? 'USD' : 'BRL';

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const res = await fetch('https://open.er-api.com/v6/latest/BRL');
                const data = await res.json();
                if (data && data.rates && data.rates.USD) {
                    setExchangeRate(data.rates.USD);
                }
            } catch {
                setExchangeRate(5.2);
            }
        };

            fetchExchangeRate();
        }, []);

        const calculatePrice = () => {
            let calculated = (videoRequested * 10) * complexity + (videoSent * 2);
            if (currency === 'USD') calculated *= exchangeRate;
            setPrice(calculated);
        };

        const formatPrice = (value) => {
            return currency === 'USD'
                ? `$${value.toFixed(2)}`
                : `R$ ${value.toFixed(2).replace('.', ',')}`;
        };

        return (
        <div className="calculator-price">
            <h2>{texts.TitleCalculatePrice_Price}</h2>

            <label>{texts.TextLabelVideoSent_CalculatePrice_Price}
                <span className="custom-tooltip-price">?<span className="tooltip-text-price">{texts.ToolTipText_CalculatePrice_Price}</span></span>
            </label>
            <input
                type="number"
                min="0"
                max="60"
                value={videoSent}
                onChange={(e) => setVideoSent(Math.min(60, Number(e.target.value)))}
            />

            <label>{texts.TextLabelVideoRequest_CalculatePrice_Price}
                <span className="custom-tooltip-price">?<span className="tooltip-text-price">{texts.ToolTipText_CalculatePrice_Price}</span></span>
            </label>
            <input
                type="number"
                min="0"
                max="60"
                value={videoRequested}
                onChange={(e) => setVideoRequested(Math.min(60, Number(e.target.value)))}
            />

            <label>{texts.TextLabelComplexity_CalculatePrice_Price}</label>
            <select
                value={complexity}
                onChange={(e) => setComplexity(Number(e.target.value))}
            >
                <option value={1}>{texts.OptionComplexity_Basic_CalculatePrice_Price}</option>
                <option value={2}>{texts.OptionComplexity_Intermediary_CalculatePrice_Price}</option>
                <option value={3}>{texts.OptionComplexity_Professional_CalculatePrice_Price}</option>
            </select>

            <button onClick={calculatePrice}>{texts.ButtonCalculate_CalculatePrice_Price}</button>

            {price > 0 && (
                <div className="price-result">
                    <img className="iconPrice" src={iconPrice} alt="icone de moeda"/> {formatPrice(price)}
                </div>
            )}
        </div>
    );
}