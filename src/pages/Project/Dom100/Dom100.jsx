import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import Dom100Data from './API/Dom100Data';

const Dom100 = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return <ProjectPage data={Dom100Data} />;
};

export default Dom100;