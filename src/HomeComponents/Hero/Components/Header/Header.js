import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src="/images/logo.png" alt="logo" className="header__logo" />{" "}
      <h3 className="heading-3">your own home</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="butn header__btn">view our properties</button>
      <p className="header__text">As seen on</p>
      <div className="header__images">
        <img src="/images/logo-bbc.png" alt="" className="" />
        <img src="/images/logo-forbes.png" alt="" className="" />
        <img src="/images/logo-techcrunch.png" alt="" className="" />
        <img src="/images/logo-bi.png" alt="" className="" />
      </div>
    </header>
  );
};

export default Header;
