
import "./Project.css";
import ProjectImage from "../../assets/image.png";
const Project = () => {
  return (
    <div className="Project__content" id="Projects">
      <h1 className="reveal">Projects</h1>
      <div className="Project__main">
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
