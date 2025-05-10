import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useScrollDirection from './hooks/useScrollDirection';
import managementSteps from './API/ManagementAPI';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ManagementStep = ({ step, delay }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const scrollDirection = useScrollDirection();

  React.useEffect(() => {
    if (inView && scrollDirection === 'down') {
      controls.start('visible');
    }
  }, [inView, controls, scrollDirection]);

  return (
    <motion.div
      ref={ref}
      className="column__right-box"
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className='right__box-num'>{step.num}</h3>
      <h3 className='right__box-title'>{step.title}</h3>
      <p className='right__box-paragraph'>{step.text}</p>
    </motion.div>
  );
};

const Management = () => {
  return (
    <div className="management">
      <div className="management__column-left">
        <h2 className='column__left-title'>Как мы организуем процесс работы</h2>
        <p className='column__left-paragraph'>
          В нашей строительной компании процесс работы организован на нескольких ключевых этапах...
        </p>
        <Link to="/about" className="management__btn">О нас</Link>
      </div>

      <div className="management__column-right">
        {managementSteps.map((step, i) => (
          <ManagementStep key={step.num} step={step} delay={i * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default Management;
