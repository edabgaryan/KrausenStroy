import React, { useState } from 'react';

const images = [
  "https://i.ibb.co/7NJx660h/photo-1-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/4RdJ0mXj/photo-1-2025-04-22-19-56-42.jpg",
  "https://i.ibb.co/fz2zsmm3/photo-1-2025-04-22-19-59-49.jpg",
  "https://i.ibb.co/vyJB8y6/photo-2-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/d4J14Dbx/photo-2-2025-04-22-19-56-42.jpg",
  "https://i.ibb.co/MDBZyDTh/photo-2-2025-04-22-19-59-49.jpg",
  "https://i.ibb.co/KjvcTpFp/photo-3-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/HLZZYMwn/photo-3-2025-04-22-19-59-49.jpg",
  "https://i.ibb.co/yczrj48K/photo-4-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/Dg5CR7Fm/photo-4-2025-04-22-19-59-49.jpg",
  "https://i.ibb.co/tPp44rsC/photo-5-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/bM6HswKQ/photo-5-2025-04-22-19-59-49.jpg",
  "https://i.ibb.co/GQBs5zkJ/photo-6-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/xtRX69St/photo-6-2025-04-22-19-59-49.jpg",
  "https://i.ibb.co/zTp2w9qL/photo-7-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/b5xZx4mM/photo-8-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/Y7rqCTxn/photo-9-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/ksp0DQ6g/photo-10-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/QvhHgzbF/photo-11-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/6QQK7Mg/photo-12-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/xSv0kGxp/photo-13-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/1YfTzWdf/photo-14-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/zWwHcqbp/photo-15-2025-04-22-19-42-53.jpg",
  "https://i.ibb.co/sprwhxVd/photo-16-2025-04-22-19-42-53.jpg"
];

  

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () => setSelectedIndex((prev) => (prev + 1) % images.length);

  return (
    <div className='Ph__gallery'>
      <h2 className="gallery__title">Галерея</h2>
      <div className="PP__image-grid">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Gallery ${index}`}
            className="gallery-img"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>&times;</span>
          <button className="modal-prev" onClick={(e) => { e.stopPropagation(); showPrev(); }}>&#10094;</button>
          <img
            src={images[selectedIndex]}
            alt="Enlarged"
            className="modal-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="modal-next" onClick={(e) => { e.stopPropagation(); showNext(); }}>&#10095;</button>
        </div>
      )}
    </div>
  );
}
