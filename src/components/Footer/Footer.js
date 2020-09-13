import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">KOMOREBI</div>

      <div className="footer__lists">
        <ul className="footer__socials">
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest
            </a>
          </li>
        </ul>

        <ul className="footer__info">
          <li>910 473-9010</li>
          <li>info@komorebi.com</li>
          <li>Wilmington, NC 4724 New Centre Dr</li>
        </ul>

        <ul className="footer__nav">
          <li>Menu</li>
          <li>Cooking Lesson</li>
          <li>Reservation</li>
        </ul>

        <ul className="footer__webdetails">
          <li>Privacy Policy</li>
          <li>Design by Natalii Azizoca</li>
          <li>© 2020</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
