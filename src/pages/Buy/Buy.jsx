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

        <div className="calculator-container">
          <h1 className="title">Калькулятор стоимости дома</h1>

          <label>Категория отделки:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Выберите категорию</option>
            <option value="black">Чёрный ключ (35 000 ₽/м²)</option>
            <option value="gray">Серый ключ (+20 000 ₽/м²)</option>
            <option value="white">Белый ключ (+35 000 ₽/м²)</option>
          </select>

          {category && (
            <>
              <label>Площадь дома (м²):</label>
              <input type="number" value={area} onChange={(e) => setArea(Number(e.target.value))} />

              <label>Цена за м² (фиксированная):</label>
              <input type="number" value={pricePerSqM} disabled />

              <label>Количество этажей:</label>
              <input type="number" value={floors} onChange={(e) => setFloors(Math.min(5, Number(e.target.value)))} min={1} max={5} />

              <label>Тип фундамента:</label>
              <select value={foundation} onChange={(e) => setFoundation(e.target.value)}>
                <option value="strip">Ленточный (+500 000 ₽)</option>
                <option value="pile">Свайный (+300 000 ₽)</option>
              </select>

              {category !== "black" && (
                <>
                  <label>
                    <input type="checkbox" checked={finishing} onChange={() => setFinishing(!finishing)} />
                    Внутренняя отделка (+10 000 ₽ за м²)
                  </label>

                  <label>
                    <input type="checkbox" checked={roof} onChange={() => setRoof(!roof)} />
                    Кровля (+1 000 ₽ за м²)
                  </label>
                </>
              )}

              <label>
                <input type="checkbox" checked={landscaping} onChange={() => setLandscaping(!landscaping)} />
                Благоустройство (цена договорная)
              </label>

              <div className="result">Стоимость: {calculateTotal().toLocaleString("ru-RU")} ₽</div>

              <button onClick={handleSave}>Сохранить расчёт</button>
            </>
          )}

          {savedCalculations.length > 0 && (
            <div className="saved-results">
              <h2>Сохранённые расчёты:</h2>
              <ul>
                {savedCalculations.map((item, index) => (
                  <li key={index}>
                    {item.area} м², {item.floors} эт., {item.total.toLocaleString("ru-RU")} ₽
                    {item.landscaping ? " + благоустройство (договорная)" : ""}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Buy;