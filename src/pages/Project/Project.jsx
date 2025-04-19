import React, { useEffect } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

export default function AboutValue() {
      useEffect(() => {
        // Когда компонент монтируется, прокручиваем страницу к верху
        window.scrollTo(0, 0);
      }, []);
  return (
    <PageWrapper>
      <section className='project'>
          <h2 className='project__title'>Проекты домов</h2>
          <Gallery/>
      </section>
    </PageWrapper>
  );
}