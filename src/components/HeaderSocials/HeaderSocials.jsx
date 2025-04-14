import React from 'react';
import { PiWhatsappLogoLight } from "react-icons/pi";
import { PiTelegramLogoLight } from "react-icons/pi";

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
            href="https://t.me/edabgaryan"
            rel="noreferrer"
            target="_blank"
            alt="vk"
          >
            <PiTelegramLogoLight color="#333" className="h-socials__link" />
          </a>
        </li>
        <li className="h-socials__item">
        <a href="https://api.whatsapp.com/send/?phone=79097982752"             
            rel="noreferrer"
            target="_blank"
            alt="Wtatsapp">
            <PiWhatsappLogoLight color="#333" className="h-socials__link" />
          </a>
        </li>

      </ul>
    </div>
  );
}
