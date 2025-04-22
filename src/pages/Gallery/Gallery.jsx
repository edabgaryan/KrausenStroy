import React, { useState } from 'react';

const images = [
    "https://i.ibb.co.com/HT16ZT4Z/photo-15-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/WpjpMfbs/photo-1-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/dwb5bC4K/photo-9-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/d0j6pJs3/photo-10-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/zLLkwpP/photo-11-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/RxByKxW/photo-12-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/Jwc5cv9B/photo-5-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/NdpXdp2h/photo-3-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/WWr1j28R/photo-7-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/Lhhcbfjj/photo-8-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/bgSHkBKm/photo-4-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/mVCx4Bxg/photo-14-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/zhbSYQHC/photo-6-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/Tx18nMY0/photo-2-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/GfDFC824/photo-1-2025-04-22-19-56-42.jpg",
    "https://i.ibb.co.com/vv1HCY1y/photo-1-2025-04-22-19-59-49.jpg",
    "https://i.ibb.co.com/rRSYzCc7/photo-16-2025-04-22-19-42-53.jpg",
    "https://i.ibb.co.com/S7QSdhRK/photo-2-2025-04-22-19-56-42.jpg",
    "https://i.ibb.co.com/0RgQ4Fby/photo-2-2025-04-22-19-59-49.jpg",
    "https://i.ibb.co.com/QvThRpwD/photo-3-2025-04-22-19-59-49.jpg",
    "https://i.ibb.co.com/Y7tPPcXt/photo-4-2025-04-22-19-59-49.jpg",
    "https://i.ibb.co.com/99mvY9Nt/photo-5-2025-04-22-19-59-49.jpg",
    "https://i.ibb.co.com/tTvwZmw4/photo-6-2025-04-22-19-59-49.jpg",

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
