
import { useState } from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  RxHamburgerMenu,
} from "react-icons/all";
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
        <p>Projects</p>
        <p>Technologies</p>
        <p>About me</p>
      </div>
      <div className="Nav__socialMedia ">
        <div>
          <AiFillGithub size={27} />
        </div>
        <div>
          <AiFillLinkedin size={27} />
        </div>
        <div>
          <AiFillTwitterCircle size={27} />
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
