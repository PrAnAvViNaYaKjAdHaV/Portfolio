import "./Technologies.css";
import SkillBar from "../Skill-bar/SkillBar";
function revealh() {
  var revealsh = document.querySelectorAll(".revealh");
  var i = 0;
  while (i < revealsh.length) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsh[i] && revealsh[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      revealsh[i].classList.add("active");
    } else {
      revealsh[i].classList.remove("active");
    }
    i++;
  }
}
window.addEventListener("scroll", revealh);
const Technologies = () => {
  return (
    <div className="Technology__container">
      <h1 className="reveal">Technologies</h1>
      <div className="Technology__skills">
        <SkillBar skills="html" level="Advance" />
        <SkillBar skills="Css,sass" level="Advance" />
        <SkillBar skills="javascript" level="Advance" />
        <SkillBar skills="React" level="Advance" />
        <SkillBar skills="Redux" level="Regular" />
        <SkillBar skills="TypeScript" level="Regular" />
      </div>
    </div>
  );
};

export default Technologies;
