import React from "react";
import Box from "../../assets/drawing.png";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="Hero__section">
      <div className="HeroSection__left">
        <h1>Hii my name is pranav jadhav</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolor
          sunt aliquam reprehenderit necessitatibus eligendi quidem, sed facere
        </p>
        <button>Let's begin</button>
      </div>
      <div className="HeroSection__right">
        <img src={Box} />
      </div>
    </div>
  );
};

export default HeroSection;
