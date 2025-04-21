import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import HiTech90Data from './API/HiTech90Data';
import PageWrapper from '../../../components/PageWrapper/PageWrapper';

const HiTech90 = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <PageWrapper>
      <ProjectPage data={HiTech90Data} />
    </PageWrapper>
  );
};

export default HiTech90;