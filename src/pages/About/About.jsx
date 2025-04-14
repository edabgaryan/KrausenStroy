import React, { useEffect } from 'react';
import AboutValue from '../About/AboutValue/AboutValue'
import AboutTeam from '../About/AboutTeam/AboutTeam'
export default function About() {
  useEffect(() => {
    // Когда компонент монтируется, прокручиваем страницу к верху
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='about'>
      <div className='about__welcome'>
        <div className='about__w-box'>
          <h2 className='w-box__title'>NE|DOMSTROY</h2>
            <p className='w-box__paragraph'>NE|DOMSTROY зарекомендовала себя как надежный партнер в сфере проектирования и строительства домов. Мы специализируемся на создании современных, комфортных и функциональных решений для жилья из газобетона. Наша команда состоит из опытных специалистов, которые пристально следят за всем циклом работ — от концепции до завершения проекта.</p>
            <p className='w-box__paragraph'>Мы ценим качество и используем только проверенные материалы и технологии, что позволяет нам гарантировать долговечность и надежность каждого объекта. Индивидуальный подход к каждому клиенту помогает нам учитывать все пожелания и потребности, обеспечивая максимальное удовлетворение и комфорт.</p>
        </div>
        <div className='about__w-img'>
          <img src="https://i.ibb.co/FkChqShQ/dom4.jpg" alt="" />
        </div>
      </div>
      <AboutValue/>
    </section>
  );
}