import React, { useState, useEffect } from 'react';

export default function Contact() { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    // Когда компонент монтируется, прокручиваем страницу к верху
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
      e.preventDefault();
      // Обработка отправки данных формы
      console.log('Имя:', name);
      console.log('Email:', email);
      console.log('Сообщение:', message);
      
      // Здесь можно добавить логику для отправки данных на сервер

      // Очистка формы после отправки
      setName('');
      setEmail('');
      setMessage('');
  };
  return (
    <section className="contact ">        
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
          <img className='c-p__images' src="https://i.ibb.co/bMPzrsfp/ssss.jpg" alt="" />
      </div>
    </div>
  </section>
  );
}
