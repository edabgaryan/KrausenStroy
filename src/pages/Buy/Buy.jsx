import React, { useEffect } from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

const PurchasePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options = [
    {
      title: 'НАЛИЧНЫЙ РАСЧЕТ',
      description: ['Поэтапная оплата', 'График платежей'],
    },
    {
      title: 'ИПОТЕКА',
      description: ['Ставка от 5%', 'Срок до 30 лет', 'Первый взнос от 20,1%'],
    },
    {
      title: 'ПОТРЕБИТЕЛЬСКИЙ КРЕДИТ',
      description: ['Ставка от 15,9%', 'Срок до 5 лет', 'Первый взнос от 0%'],
    },
    {
      title: 'МАТЕРИНСКИЙ КАПИТАЛ',
      description: ['Оплатите материнским капиталом, а остальное в ипотеку или кредит'],
    },
  ];

  return (
    <PageWrapper>
      <div className="buy">
        <div className="buy__main-text">
          <h1 className="buy__title">Как купить</h1>
          <p className="buy__subtitle">Варианты есть всегда</p>
        </div>

        <div className="buy__options">
          {options.map((option, index) => (
            <div key={index} className="buy__option-block">
              <h3 className="buy__option-title">{option.title}</h3>
              <ul className="buy__option-description">
                {option.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="buy__ipoteka">
          <div className="buy__main-text">
            <h2 className="buy__title">Ипотека от СберБанка</h2>
            <p className="buy__subtitle">Узнайте ваш индивидуальный расчёт прямо сейчас</p>
          </div>

          <div className="buy__ipoteka-block">
            <iframe
              className="buy__ipoteka__iframe"
              src="https://ipoteka.domclick.ru/calc-reg/calculator.html?prod=5&cost=4710000&dep=30"
              width="100%"
              height="1600"
              frameBorder="0"
              title="SberbankIpoteka"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PurchasePage;
