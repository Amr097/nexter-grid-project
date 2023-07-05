import React from "react";

const Card = ({ image, caption, location, rooms, area, price, cardId }) => {
  return (
    <div className="homes__card">
      <figure className="homes__head">
        <input className="homes__link" type="checkbox" id={cardId}></input>
        <label htmlFor={cardId} className="homes__label">
          <svg className="homes__icon">
            <use xlinkHref="images/sprite.svg#icon-heart-full"></use>
          </svg>
        </label>

        <img src={image} alt="Home Image" className="homes__img" />
        <figcaption className="homes__caption">{caption}</figcaption>
      </figure>
      <div className="homes__mid">
        <div className="homes__info">
          <svg>
            <use xlinkHref="images/sprite.svg#icon-map-pin"></use>
          </svg>
          <p>{location}</p>
        </div>
        <div className="homes__info">
          <svg>
            <use xlinkHref="images/sprite.svg#icon-profile-male"></use>
          </svg>
          <p>{rooms}</p>
        </div>
        <div className="homes__info">
          <svg>
            <use xlinkHref="images/sprite.svg#icon-expand"></use>
          </svg>
          <p>
            {area} m<sup>2</sup>
          </p>
        </div>
        <div className="homes__info">
          <svg>
            <use xlinkHref="images/sprite.svg#icon-key"></use>
          </svg>
          <p>{price}</p>
        </div>
      </div>
      <button className="butn btn-card">CONTACT RELATOR</button>
    </div>
  );
};

export default Card;
