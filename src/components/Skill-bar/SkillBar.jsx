// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SkillBar.css";
function classNames(...args) {
  return args.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
const SkillBar = ({ skills, level }) => {
  return (
    <div className="SkillBar__main ">
      <div className="Skills__name reveal">
        <p>{skills}</p>
        <p>{level}</p>
      </div>
      <div
        className={classNames(
          "Skills__bar",
          level === "Advance" ? "advance" : "regular"
        )}
      >
        <div className="Skills__bar__progress revealh"></div>
      </div>
    </div>
  );
};

export default SkillBar;
