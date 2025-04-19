import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import SkandiHouse2Data from './API/SkandiHouse2Data';
import PageWrapper from '../../../components/PageWrapper/PageWrapper';

const SkandiHouse2 = () => {
    useEffect(() => {
      // Когда компонент монтируется, прокручиваем страницу к верху
      window.scrollTo(0, 0);
    }, []);
  return (
    <PageWrapper>
      <ProjectPage data={SkandiHouse2Data} />
    </PageWrapper>
    );
};

export default SkandiHouse2;