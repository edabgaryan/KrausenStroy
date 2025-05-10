import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import SkandiHouseData from './API/SkandiHouseData';
import PageWrapper from '../../../components/PageWrapper/PageWrapper';

const SkandiHouse = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
  <PageWrapper>
    <ProjectPage data={SkandiHouseData} />
  </PageWrapper>);
};

export default SkandiHouse;