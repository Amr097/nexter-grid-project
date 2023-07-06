import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="item">find your dream home</li>
        <li className="item">request proposal</li>
        <li className="item">download home planner</li>
        <li className="item">contact us</li>
        <li className="item">submit your property</li>
        <li className="item">come work with us!</li>
      </ul>
      <p className="footer__text">
        &copy; Copyright 2023 Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Qui quae minima, quo sed, placeat expedita libero,
        facilis minus eveniet mollitia corrupti. At unde accusamus nemo
        explicabo maxime expedita ipsam iste.
      </p>
    </footer>
  );
};

export default Footer;
