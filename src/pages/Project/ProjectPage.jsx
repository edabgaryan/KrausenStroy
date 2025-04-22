import React, { useState, useEffect } from 'react';


const ProjectPage = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="ProjectPage">
      <div className="ProjectPage__section">
        <img src={data.mainImage} alt="Главное изображение" className="ProjectPage__image" />
        <div className="PP__overlay-text">{data.title}</div>
      </div>

      <div className="ProjectPage__description">
        <div className="PP__d-column">
          {data.gridInfo.map((item, index) => (
            <div className='PP__d-grid-column' key={index}>
              <h4 className='PP__d-grid-title'>{item.label}</h4>  
              <p className='PP__d-grid-paragraph'>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="PP__d-column-text">
          {data.description.map((paragraph, index) => (
            <p className='PP__d-column-text-paragraph' key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="PP__image-grid">
        {data.images.map((imgSrc, index) => (
          <div className="PP__grid-item" key={index}>
            <img
              className='PP__image-grid-img'
              src={imgSrc}
              alt={`Изображение ${index + 1}`}
              onClick={() => openModal(index)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>&times;</span>
          <button className="modal-prev" onClick={(e) => { e.stopPropagation(); showPrev(); }}>&#10094;</button>
          <img src={data.images[currentIndex]} alt={`modal-${currentIndex}`} className="modal-img" onClick={(e) => e.stopPropagation()} />
          <button className="modal-next" onClick={(e) => { e.stopPropagation(); showNext(); }}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;