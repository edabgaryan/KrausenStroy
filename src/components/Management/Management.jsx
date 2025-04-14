import React from 'react';
import { Link } from 'react-router-dom';

const Management = () => {
  return (
    <div className="management">
      <div className="management__column-left">
        <h2 className='column__left-title'>Как мы организуем процесс работы</h2>
        <p className='column__left-paragraph'>В нашей строительной компании процесс работы организован на нескольких ключевых этапах, что обеспечивает высокое качество и эффективность выполнения проектов.</p>
        <Link to="/about" className="management__btn">
          О нас
        </Link>
      </div>
      <div className="management__column-right">
        <div className="column__right-box">
          <h3 className='right__box-num'>1</h3>
          <h3 className='right__box-title'>Консультация</h3>
          <p className='right__box-paragraph'>Мы начинаем с детальной консультации, чтобы понять пожелания клиента и обсудить параметры проекта. Это помогает установить четкие ожидания и определить основные этапы работы.</p>
        </div>
        <div className="column__right-box">
          <h3 className='right__box-num'>2</h3>
          <h3 className='right__box-title'>Проектирование</h3>
          <p className='right__box-paragraph'>На основе собранной информации наши специалисты разрабатывают архитектурные и инженерные проекты. В этом этапе мы учитываем все требования и пожелания клиента, а также технические нюансы.</p>
        </div>
        <div className="column__right-box">
          <h3 className='right__box-num'>3</h3>
          <h3 className='right__box-title'>Строительство</h3>
          <p className='right__box-paragraph'>После утверждения проекта мы переходим к строительству. Используя качественные материалы и современные технологии, команда организует все работы, контролируя соблюдение сроков и стандартов.</p>
        </div>
        <div className="column__right-box">
          <h3 className='right__box-num'>4</h3>
          <h3 className='right__box-title'>Завершение и сдача объекта  </h3>
          <p className='right__box-paragraph'>На финальном этапе мы проводим проверку выполненных работ и устраняем возможные недочеты. После этого объект сдаётся заказчику, обеспечивая полное соответствие его ожиданиям и требованиям.</p>
        </div>
      </div>
    </div>
  );
};

export default Management;
