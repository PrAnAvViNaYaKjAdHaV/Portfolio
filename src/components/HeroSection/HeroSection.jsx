
import Box from "../../assets/drawing.png";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="Hero__section">
      <div className="HeroSection__left">
        <h1>Hii my name is pranav jadhav</h1>
        <p>
          As a front-end developer, I create user-friendly interfaces using HTML, CSS, and JavaScript. I specialize in responsive design and cross-browser compatibility, ensuring websites work seamlessly across devices and browsers. I am proficient in popular frontend frameworks like React
        </p>
        <a className="resume" href="https://drive.google.com/uc?export=download&id=1WyNvRAmUPgf8zav0XAXZiY_IBlif5aYB">Resume</a>
      </div>
      <div className="HeroSection__right">
        <img src={Box} />
      </div>
    </div>
  );
};

export default HeroSection;
