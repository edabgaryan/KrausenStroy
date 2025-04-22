import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Project from '../../pages/Project/Project';
import Gallery from '../../pages/Gallery/Gallery';
import Buy from '../../pages/Buy/Buy';
import Dom100 from '../../pages/Project/Dom100/Dom100';
import Mansarda100 from '../../pages/Project/Mansarda100/Mansarda100';
import SkandiHouse from '../../pages/Project/SkandiHouse/SkandiHouse';
import SkandiHouse2 from '../../pages/Project/SkandiHouse2/SkandiHouse2';
import HiTech90 from '../../pages/Project/HiTech90/HiTech90';
import Contact from '../../pages/Contact/Contact';
import Notefondpage from '../../pages/Notfoundpage/Notefondpage';

import HeaderSocials from '../HeaderSocials/HeaderSocials';


export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();

  // Автоматически закрывает меню при переходе по ссылке
  React.useEffect(() => {
    setMenuOpened(false);
  }, [location.pathname]);

  return (
    <>
      <header className="header">
        <div className="header__wrap container">
          <Link to="/" className="header__logo">
          </Link>
          <nav className={`header__menu ${menuOpened ? 'active' : ''}`}>
            <ul className="h-menu__wrap">
              {[
                { to: '/', label: 'Главная' },
                { to: '/about', label: 'О нас' },
                { to: '/project', label: 'Проекты' },
                { to: '/gallery', label: 'Галерея' },
                { to: '/buy', label: 'Как купить' },
                { to: '/contact', label: 'Контакты' },
              ].map(({ to, label }) => (
                <li key={to} className="h-menu__item">
                  <Link to={to} className="h-menu__link">
                    {label}
                  </Link>
                </li>
              ))}

              <li className="h-menu__item h-menu__item-whapp">
                <a
                  href="https://api.whatsapp.com/send/?phone=79622535796"
                  className="h-menu__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>

          <HeaderSocials onClickMenu={menuOpened} onCloseMenu={setMenuOpened} />
        </div>
      </header>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/Dom100" element={<Dom100 />} />
          <Route path="/project/Mansarda100" element={<Mansarda100 />} />
          <Route path="/project/SkandiHouse" element={<SkandiHouse />} />
          <Route path="/project/SkandiHouse2" element={<SkandiHouse2 />} />
          <Route path="/project/HiTech90" element={<HiTech90 />} />
          <Route path="*" element={<Notefondpage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
