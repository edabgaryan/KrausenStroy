import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

export default function HeaderSocials({ onClickMenu, onCloseMenu }) {
  return (
    <div>
      <ul className="header__socials">
        <div
          onClick={() => onCloseMenu(!onClickMenu)}
          className={
            onClickMenu ? 'header__open-menu active' : 'header__open-menu'
          }
        >
          <span></span>
        </div>
        <li className="h-socials__item vk">
          <a
            href="https://t.me/DOMAIZBLOKOV39"
            rel="noreferrer"
            target="_blank"
            alt="vk"
          >
            <FaTelegramPlane color="#333" className="h-socials__link" />
          </a>
        </li>
        <li className="h-socials__item">
        <a href="https://api.whatsapp.com/send/?phone=79097982752"             
            rel="noreferrer"
            target="_blank"
            alt="Wtatsapp">
            <IoLogoWhatsapp color="#333" className="h-socials__link" />
          </a>
        </li>

      </ul>
    </div>
  );
}
