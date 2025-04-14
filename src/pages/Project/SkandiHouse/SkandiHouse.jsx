import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import SkandiHouseData from './API/SkandiHouseData';

const SkandiHouse = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return <ProjectPage data={SkandiHouseData} />;
};

export default SkandiHouse;