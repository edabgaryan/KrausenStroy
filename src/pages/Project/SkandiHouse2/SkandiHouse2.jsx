import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import SkandiHouse2Data from './API/SkandiHouse2Data';

const SkandiHouse2 = () => {
    useEffect(() => {
      // Когда компонент монтируется, прокручиваем страницу к верху
      window.scrollTo(0, 0);
    }, []);
  return <ProjectPage data={SkandiHouse2Data} />;
};

export default SkandiHouse2;