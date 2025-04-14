import React, { useState } from 'react';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Project from '../../pages/Project/Project'
import Buy from '../../pages/Buy/Buy'
import Dom100 from '../../pages/Project/Dom100/Dom100'
import Mansarda100 from '../../pages/Project/Mansarda100/Mansarda100'
import SkandiHouse from '../../pages/Project/SkandiHouse/SkandiHouse'
import SkandiHouse2 from '../../pages/Project/SkandiHouse2/SkandiHouse2'

import Contact from '../../pages/Contact/Contact';
import Notefondpage from '../../pages/Notfoundpage/Notefondpage';
import { Routes, Route, Link } from 'react-router-dom';

import HeaderSocials from '../HeaderSocials/HeaderSocials';


export default function Navbar() {
  const [menuOpenend, setMenuOpenend] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__wrap container">
          <Link to="/" className="header__logo">
          </Link>
          <nav
            className={menuOpenend ? 'header__menu active' : 'header__menu'}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="h-menu__wrap">
              <li className="h-menu__item">
                <Link
                  onClick={() => setMenuOpenend(!menuOpenend)}
                  to="/"
                  className="h-menu__link"
                >
                  Главная
                </Link>
              </li>
              <li className="h-menu__item">
                <Link
                  onClick={() => setMenuOpenend(!menuOpenend)}
                  to="/about"
                  className="h-menu__link"
                >
                  О нас
                </Link>
              </li>
              <li className="h-menu__item">
                <Link
                  onClick={() => setMenuOpenend(!menuOpenend)}
                  to="/project"
                  className="h-menu__link"
                >
                  Проекты
                </Link>
              </li>
              <li className="h-menu__item">
                <Link
                  onClick={() => setMenuOpenend(!menuOpenend)}
                  to="/buy"
                  className="h-menu__link"
                >
                  Как купить
                </Link>
              </li>
              <li className="h-menu__item last">
                <Link
                  onClick={() => setMenuOpenend(!menuOpenend)}
                  to="/contact"
                  className="h-menu__link"
                >
                  Контакты
                </Link>
              </li>
              <li className="h-menu__item h-menu__item-whapp">
                  <a 
                    className="whapp__btn" 
                    href="https://api.whatsapp.com/send/?phone=79622535796"             
                    rel="noreferrer"
                    target="_blank"
                    alt="Wtatsapp">
                      WhatsApp
                  </a>
              </li>
            </ul>
          </nav>
          <HeaderSocials
            onClickMenu={menuOpenend}
            onCloseMenu={setMenuOpenend}
          />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/Dom100" element={<Dom100/>} />
        <Route path="/project/Mansarda100" element={<Mansarda100/>} />
        <Route path="/project/SkandiHouse" element={<SkandiHouse/>} />
        <Route path="/project/SkandiHouse2" element={<SkandiHouse2/>} />
        <Route path="*" element={<Notefondpage />} />
      </Routes>
    </>
  );
}
