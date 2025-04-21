import React, { useEffect } from 'react';
import AboutValue from '../About/AboutValue/AboutValue'
import AboutTeam from '../About/AboutTeam/AboutTeam'
import PageWrapper from '../../components/PageWrapper/PageWrapper';

export default function About() {
  useEffect(() => {
    // Когда компонент монтируется, прокручиваем страницу к верху
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <section className='about'>
        <div className='about__welcome'>
          <div className='about__w-box'>
            <h2 className='w-box__title'>DOMAIZBLOKOV</h2>
              <p className='w-box__paragraph'>DOMAIZBLOKOV — это команда, которая уже более 10 лет строит стильные и надёжные дома из блоков в Калининграде и области.
                Мы не просто строим дома — мы создаём продуманные пространства для жизни. Каждый проект — это сочетание архитектурной эстетики, инженерной точности и современного комфорта.</p>
              <p className='w-box__paragraph'>Мы сопровождаем клиентов на каждом этапе — от выбора участка до въезда в готовый дом.

                Если вы ищете партнёра, которому можно доверить свой будущий дом — мы здесь.</p>
              <p className='w-box__paragraph'>DOMAIZBLOKOV — дома, в которых хочется жить.</p>
          </div>
          <div className='about__w-img'>
            <img src="https://i.ibb.co/FkChqShQ/dom4.jpg" alt="" />
          </div>
        </div>
        <AboutValue/>
      </section>
    </PageWrapper>
  );
}