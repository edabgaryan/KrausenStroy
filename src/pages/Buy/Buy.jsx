import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

const Buy = () => {
  const [area, setArea] = useState(100);
  const [pricePerSqM] = useState(35000); // фиксированная цена за м²
  const [floors, setFloors] = useState(1);
  const [foundation, setFoundation] = useState("strip"); // по умолчанию ленточный
  const [finishing, setFinishing] = useState(false);
  const [roof, setRoof] = useState(false);
  const [category, setCategory] = useState("");
  const [landscaping, setLandscaping] = useState(false);
  const [savedCalculations, setSavedCalculations] = useState([]);

  const getCategoryPrice = () => {
    switch (category) {
      case "black":
        return 0;
      case "gray":
        return 20000;
      case "white":
        return 35000;
      default:
        return 0;
    }
  };

  const calculateTotal = () => {
    let baseCost = area * (pricePerSqM + getCategoryPrice()) * floors;
    if (foundation === "pile") baseCost += 300000;
    if (foundation === "strip") baseCost += 500000;
    if (finishing && category !== "black") baseCost += area * 10000; // внутренняя отделка по площади
    if (roof && category !== "black") baseCost += area * 1000; // кровля по площади
    return baseCost;
  };

  const handleSave = () => {
    const newRecord = {
      area,
      pricePerSqM,
      floors,
      foundation,
      finishing: category !== "black" ? finishing : false,
      roof: category !== "black" ? roof : false,
      category,
      landscaping,
      total: calculateTotal()
    };
    setSavedCalculations([...savedCalculations, newRecord]);
  };

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

export default Buy;