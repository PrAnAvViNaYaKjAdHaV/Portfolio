
import { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from "../../assets/logo.png";

import "./nav.css";
const Nav = () => {
  const [menue, setMenue] = useState(false);
  return (
    <div className="Nav__bar">
      <div className="Nav__logo">
        <img src={Logo} alt="logo" />
        <p>Portfolio</p>
      </div>
      <div className="Nav__section">
        <a href="#Projects">Projects</a>
        <a href="#Technologies">Technologies</a>
        <a href="#About_me">About me</a>
      </div>
      <div className="Nav__socialMedia ">
        <div>
          <a href="https://github.com/PrAnAvViNaYaKjAdHaV" target="blank"><AiFillGithub size={27} /></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/pranav-jadhav-501435219/" target="blank"><AiFillLinkedin size={27} /></a>
        </div>
        <div>
          <a href="https://twitter.com/pranav31274812" target="blank"> <AiFillTwitterCircle size={27} /></a>
        </div>
      </div>
      <div className="Nav__hamburger" onClick={() => setMenue((prev) => !prev)}>
        <div className="HamburgerMenue">
          <RxHamburgerMenu size={27} />
        </div>
      </div>
      {menue && (
        <div className="Nav_overlay">
          <p>Projects</p>
          <p>Technologies</p>
          <p>About me</p>
        </div>
      )}
    </div>
  );
};

export default Nav;
