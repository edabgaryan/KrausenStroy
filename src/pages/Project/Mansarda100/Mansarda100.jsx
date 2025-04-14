import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import Mansarda100Data from './API/Mansarda100Data';

const Mansarda100 = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return <ProjectPage data={Mansarda100Data} />;
};

export default Mansarda100;