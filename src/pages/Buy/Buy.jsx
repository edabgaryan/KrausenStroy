import React, { useEffect } from 'react';

const PurchasePage = () => {
      useEffect(() => {
        // Когда компонент монтируется, прокручиваем страницу к верху
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="buy">
            <div className='buy__main-text'>
                <h2 className="buy__title">Как купить</h2>
                <h3 className="buy__subtitle">Варианты есть всегда</h3>
            </div>
            <div className="buy__options">
                <div className="buy__option-block">
                    <h3 className="buy__option-title">НАЛИЧНЫЙ РАСЧЕТ</h3>
                    <p className="buy__option-description">
                    Поэтапная оплата
                    <br />
                    График платежей
                    </p>
                </div>
                <div className="buy__option-block">
                    <h3 className="buy__option-title">ИПОТЕКА</h3>
                    <p className="buy__option-description">
                    Ставка от 5% <br />
                    Срок до 30 лет <br />
                    Первый взнос от 20,1%
                    </p>
                </div>
                <div className="buy__option-block">
                    <h3 className="buy__option-title">ПОТРЕБИТЕЛЬСКИЙ КРЕДИТ</h3>
                    <p className="buy__option-description">
                    Ставка от 15,9% <br />
                    Срок до 5 лет <br />
                    Первый взнос от 0%
                    </p>
                </div>
                <div className="buy__option-block">
                    <h3 className="buy__option-title">МАТЕРИНСКИЙ КАПИТАЛ</h3>
                    <p className="buy__option-description">
                        Оплатите материнским капиталом, а остальное в ипотеку или кредит
                    </p>
                </div>
            </div>
            <div className='buy__ipoteka'>
                <div className='buy__main-text'>
                    <h2 className="buy__title">Ипотека СберБанка</h2>
                </div>
                <div className='buy__ipoteka-block'>
                    <iframe
                    className='buy__ipoteka__iframe'
                    src="https://ipoteka.domclick.ru/calc-reg/calculator.html?prod=5&cost=4710000&dep=30"
                    width="600"
                    height="1600"
                    frameBorder="0"
                    title="SberbankIpoetka"
                    scrolling="no"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;
