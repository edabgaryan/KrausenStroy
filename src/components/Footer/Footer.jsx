import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <p>Калининград, ул. Примерная, 1</p>
          <p><a href="tel:+79097813514">+7 (909) 798-27-52</a></p>
          <p><a href="mailto:domaizblokov@gmail.com@gmail.com">DOMAIZBLOKOV@gmail.com</a></p>
          <div className="footer__socials">
            <a className='footer__' href="https://t.me/domaizblokov" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
            <a href="https://wa.me/79097982752" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://instagram.com/domaizblokov" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
