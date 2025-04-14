import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../components/Service/Service';
import Management from '../../components/Management/Management';
import Gallery from '../../components/Gallery/Gallery';

export default function Home() {
    useEffect(() => {
      // Когда компонент монтируется, прокручиваем страницу к верху
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div className='home'>
      <div className='feature'>
        <div className='feature__block'>
          <div className='feature__wrap'>
            <div className='feature__container'>
              <img className="feature__wrap-images" src="https://i.ibb.co/Lhgsszxw/ZIGNs-Uvx4-PHL7fkwdob-KVHv-Zjl8.jpg" alt="#" />
              <div className='feature__text-block'>
                  <h3 className='feature__wrap-title'>Постройте дом своей мечты.</h3>
                  <p className='feature__wrap-paragraph'>Проектируем и строим современные дома.</p>
                  <div className='feature__btn-block'>
                    <Link to="/project" className="feature__btn feature__btn-b">
                      Проекты
                    </Link>
                    <Link to="/about" className="feature__btn feature__btn-w">
                      О нас
                    </Link>
                  </div>
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className='experience'>
          <div className="experience__text-column">
            <h3 className="experience__text-title">Хотите современную виллу, уютный коттедж или индивидуальный проект?</h3>
            <p className="experience__text-paragraph">Мы реализуем любую вашу идею</p>
          </div>
          <div className="experience__grid-column">
            <div className="experience__grid-container">
              <div className="experience__grid-item">
                <h4 className='experience__g-i-title'>10+</h4>
                <p className='experience__g-i-paragraph'>На рынке загородного строительства</p>
              </div>
              <div className="experience__grid-item">
                <h4 className='experience__g-i-title'>200+</h4>
                <p className='experience__g-i-paragraph'>Спроектировали и построили</p>
              </div>
              <div className="experience__grid-item experience__g-i-third">
                <h4 className='experience__g-i-title'>100%</h4>
                <p className='experience__g-i-paragraph'>Довольные клиенты</p>
              </div>
            </div>
          </div>
      </div>
      <Service />
      <Management/>
      <Gallery/>
    </div>
  );
}
