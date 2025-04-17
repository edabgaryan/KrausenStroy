import React from 'react';
import { Link } from 'react-router-dom'; 
import imagesData from '../../assets/API/ApiGallery.json'; 

const Gallery = () => {
  return (
    <div className="gallery">
      {imagesData.map((image, index) => (
        <Link
          key={index}
          to={image.path} 
          className="gallery__block"
        >
          <img src={image.src} alt={image.alt} className="gallery__img" />
          <div className='gallery__overlay-block'>
          <div className="gallery__overlay-price">
            <div className="gallery__overlay__price-text">{image.descriptionprice}</div>
          </div>
          <div className="gallery__overlay">
            <div className="gallery__overlay-text">{image.description}</div>
          </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
