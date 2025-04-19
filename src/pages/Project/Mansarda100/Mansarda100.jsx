import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import Mansarda100Data from './API/Mansarda100Data';
import PageWrapper from '../../../components/PageWrapper/PageWrapper';

const Mansarda100 = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <PageWrapper>
      <ProjectPage data={Mansarda100Data} />
    </PageWrapper>
  );
};

export default Mansarda100;