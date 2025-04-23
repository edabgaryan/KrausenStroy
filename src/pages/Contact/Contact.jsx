import React, { useEffect } from 'react';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import PageWrapper from '../../components/PageWrapper/PageWrapper';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <section className="contact-modern">
        <div className="contact-modern__container">
          <h1 className="contact-modern__title">Свяжитесь<br />с нами удобным<br />для вас способом</h1>

          <div className="contact-modern__info">
            <div className="contact-modern__column">
              <p className="contact-modern__label">Телефон</p>
              <a className="contact-modern__value" href="tel:+79097982752">+7 909 798 27 52</a>
            </div>
            <div className="contact-modern__column">
              <p className="contact-modern__label">Почта</p>
              <a className="contact-modern__value" href="mailto:DOMBERG@gmail.com">DOMBERG@gmail.com</a>
            </div>
            <div className="contact-modern__column">
              <p className="contact-modern__label">Соц. сети</p>
              <div className="contact-modern__socials">
                <a href="https://www.instagram.com/DOMBERG" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://t.me/DOMBERG" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                <a href="https://api.whatsapp.com/send/?phone=79097982752" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
