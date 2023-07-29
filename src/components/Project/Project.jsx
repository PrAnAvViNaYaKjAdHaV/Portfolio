
import "./Project.css";
import ProjectImage from "../../assets/image.png";
import ProjectOne from '../../assets/projects/Project_one.png';
const Project = () => {
  return (
    <div className="Project__content" id="Projects">
      <h1 className="reveal">Projects</h1>
      <div className="Project__main">
        <div className="Project__box reveal">
          <img src={ProjectOne} />
          <h3>PROJECT 1</h3>
          <div className="Project__partiotion"></div>
          <p>
            These is a e-commerce website that made with react js,redux and firebase i am still working on these project you can watch project progress also
          </p>
          <div className="Project_Link">
            <a href="https://crown-clothing-shoping-app.netlify.app" target="blank" className="Project__button">Look it up</a>
            <a href="https://github.com/PrAnAvViNaYaKjAdHaV/crwn-clothing-v2" target="blank" className="Project__button">github</a>
          </div>
        </div>
        <div className="Project__box reveal">
          <img src={ProjectImage} />
          <h3>PROJECT 1</h3>
          <div className="Project__partiotion"> </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            cupiditate enim laborum ab possimus! Placeat odit nesciunt quod.
          </p>
          <button className="Project__button">Look it up</button>
        </div>
        <div className="Project__box reveal">
          <img src={ProjectImage} />
          <h3>PROJECT 1</h3>
          <div className="Project__partiotion"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            cupiditate enim laborum ab possimus! Placeat odit nesciunt quod.
          </p>
          <button className="Project__button">Look it up</button>
        </div>
        <div className="Project__box reveal">
          <img src={ProjectImage} />
          <h3>PROJECT 1</h3>
          <div className="Project__partiotion"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            cupiditate enim laborum ab possimus! Placeat odit nesciunt quod.
          </p>
          <button className="Project__button">Look it up</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
