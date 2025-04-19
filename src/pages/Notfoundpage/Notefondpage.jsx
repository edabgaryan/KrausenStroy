import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

const NotFound = () => {
  return (
    <PageWrapper>
      <motion.div
        className="notfound"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="notfound__title">404</h1>
        <p className="notfound__text">
          Упс... страница не найдена или ещё в строительстве.
        </p>
        <Link to="/" className="notfound__button">
          Вернуться на главную
        </Link>
      </motion.div>
    </PageWrapper>
  );
};

export default NotFound;
