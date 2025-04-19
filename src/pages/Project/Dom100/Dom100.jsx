import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import Dom100Data from './API/Dom100Data';
import PageWrapper from '../../../components/PageWrapper/PageWrapper';

const Dom100 = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <PageWrapper>
      <ProjectPage data={Dom100Data} />
    </PageWrapper>
  );
};

export default Dom100;