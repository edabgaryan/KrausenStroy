import React, { useState, useEffect } from 'react';
import data from '../../assets/API/ApiService.json'; 


const Service = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setItems(data);
    
    // Устанавливаем первый элемент в качестве выбранного при загрузке
    if (data.length > 0) {
      setSelectedItem(data[0]);
    }
  }, []);

  const handleButtonClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="service">
      <h2 className="service__title">Наши услуги</h2>
      <div className="service__container">
        {items.map((item, index) => (
          <div
            className={`service__container-btn ${selectedItem && selectedItem.title === item.title ? 'active' : ''}`} 
            key={index} 
            onClick={() => handleButtonClick(item)}
          >
            {item.title}
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="service__display">
          <img className='service__display-img' src={selectedItem.image} alt={selectedItem.title} />
          <div className="service__display-text-overlay">{selectedItem.description}</div>
        </div>
      )}
    </div>
  );
}

export default Service;
