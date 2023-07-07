import React from "react";
import "./Relators.scss";

const Relators = () => {
  return (
    <div className="relators">
      <h3 className="heading-3">top 3 relators</h3>{" "}
      <div className="relators__list">
        {" "}
        <img src="/images/realtor-1.jpeg" alt="" className="relators__image" />
        <div className="relators__info">
          <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
          <p className="relators__sold">245 houses sold</p>
        </div>
        <img src="/images/realtor-2.jpeg" alt="" className="relators__image" />
        <div className="relators__info">
          <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
          <p className="relators__sold">212 houses sold</p>
        </div>
        <img src="/images/realtor-3.jpeg" alt="" className="relators__image" />
        <div className="relators__info">
          <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
          <p className="relators__sold">198 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Relators;
