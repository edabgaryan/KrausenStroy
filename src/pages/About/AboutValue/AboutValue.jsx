import React from 'react';

export default function AboutValue() {
  return (
    <section className='value'>
        <div className='value__text'>
            <h2 className='value__title'>Вещи, которые имеют значение для нас</h2>
            <p className='value__paragraph'>Концепции окружающей среды в архитектуре относятся к стратегиям проектирования и внедрения, которые сосредоточены на сохранении природных ресурсов, сохранении энергии, управлении отходами и создании здоровой внутренней среды.</p>
        </div>
        <div className='value__container'>
            <div className='value__column'>
                    <div className="value__c-item">
                        <h3 className='value__c-star'>*</h3>
                        <h4 className='value__g-c-title'>Прозрачность и открытость</h4>
                        <p className='value__g-c-paragraph'>Вы всегда знаете за что платите и что получите. Открыто признаем и устраняем ошибки. Будем держать в курсе всех этапов, отправлять фото и видео. Обезопасим вашу стройку со всех сторон.</p>
                    </div>
                    <div className="value__c-item">
                        <h3 className='value__c-star'>*</h3>
                        <h4 className='value__g-c-title'>Соблюдение норм и стандартов</h4>
                        <p className='value__g-c-paragraph'>Важно придерживаться строительных норм и правил для обеспечения безопасности и комфорта.</p>
                    </div>
                    <div className="value__c-item">
                        <h3 className='value__c-star'>*</h3>
                        <h4 className='value__g-c-title'>Качество материалов</h4>
                        <p className='value__g-c-paragraph'>Использование надежных и долговечных материалов гарантирует прочность и долговечность строений.</p>
                    </div>
                    <div className="value__c-item">
                        <h3 className='value__c-star'>*</h3>
                        <h4 className='value__g-c-title'>Каждый проект – важный</h4>
                        <p className='value__g-c-paragraph'>Мы не гонимся за большим количеством заказов и новых объектов, ведь с увеличением объема – можно потерять в качестве. Проектирование и строительство каждого нашего дома контролирует лично руководитель компании.</p>
                    </div>
            </div>
        </div>
    </section>
  );
}