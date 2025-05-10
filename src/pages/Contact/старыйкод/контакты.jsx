import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

export default function Contact() { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Имя:', name);
      console.log('Email:', email);
      console.log('Сообщение:', message);

      setName('');
      setEmail('');
      setMessage('');
  };

  return (
    <PageWrapper>
      <section className="contact">        
        <h2 className='contact__title'>Контакты</h2>
        <div className="contact-page container">
          <div className="contact-page__body">
            <div className='contact-p-b-box'>
              <a className="paragraph contact-page__paragraph">
                ИП Абгарян Эдгар Манвелович
              </a>
              <a className="paragraph contact-page__paragraph">
                +7 909 798 27 52
              </a>
              <a className="paragraph contact-page__paragraph" href="mailto:narinebeautystudio@gmail.com">
                NMDomStroy@gmail.com
              </a>
            </div>
            <div className="contact__item-list">
              <form onSubmit={handleSubmit} className="contact__form">
                <div className='contact-f__input'>
                  <input
                    placeholder='Ваше имя'
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="contact__form-input"
                  />
                  <input
                    placeholder='Ваш телефон'
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="contact__form-input"
                  />
                </div>
                <textarea
                  placeholder='Комментарий'
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  className="contact__form-textarea"
                />
                <button type="submit" className="contact__form-button">Отправить сообщение</button>
              </form>
            </div>
          </div>
          <div className="contact-page__img">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A13d3e937a05530ec3fa1c18d9c0f56d55630594b4ac7e00853ad689e5c2e6a58&amp;source=constructor"
              width="100%"
              height="400"
              frameBorder="0"
              title="map"
              style={{ borderRadius: '12px' }}
            ></iframe>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
