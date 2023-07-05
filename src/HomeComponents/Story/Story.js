import React from "react";
import "./Story.scss";

const Story = () => {
  return (
    <>
      <div className="story__pictures">
        <img
          src="images/story-1.jpeg"
          alt="story image"
          className="story__image story__image--2"
        />
        <img
          src="images/story-2.jpeg"
          alt="story image"
          className="story__image story__image--3"
        />
      </div>
      <div className="story__content">
        <h3 className="heading-3">happy customers</h3>
        <h2 className="heading-2 heading-2--dark">
          &ldquo;The best decision of our lives&ldquo;
        </h2>
        <p className="story__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo
          voluptas ex eveniet harum iusto doloremque, dolores accusantium. Quasi
          mollitia libero voluptatem distinctio labore laborum quos nisi
          expedita. Labore, vitae?
        </p>
        <button className="butn">find your own home</button>
      </div>
    </>
  );
};

export default Story;
