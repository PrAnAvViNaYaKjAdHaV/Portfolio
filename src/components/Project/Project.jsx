
import "./Project.css";
import ProjectImage from "../../assets/image.png";
import ProjectOne from '../../assets/projects/Project_one.png';
import ProjectTwo from '../../assets/projects/Project_two.png';
import ProjectThree from '../../assets/projects/Project_three.png';
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
            These is a e-commerce website that made with react js,redux and firebase i am still working on these project
          </p>
          <div className="Project_Link">
            <a href="https://crown-clothing-shoping-app.netlify.app" target="blank" className="Project__button">Look it up</a>
            <a href="https://github.com/PrAnAvViNaYaKjAdHaV/crwn-clothing-v2" target="blank" className="Project__button">github</a>
          </div>
        </div>
        <div className="Project__box reveal">
          <img src={ProjectTwo} />
          <h3>PROJECT 2</h3>
          <div className="Project__partiotion"></div>
          <p>
            These is todo list app is beginner level project that i ever made with reactjs and firebase
          </p>
          <div className="Project_Link">
            <a href="https://singular-hummingbird-b188da.netlify.app" target="blank" className="Project__button">Look it up</a>
            <a href="https://github.com/PrAnAvViNaYaKjAdHaV/MyToDoList" target="blank" className="Project__button">github</a>
          </div>
        </div>
        <div className="Project__box reveal">
          <img src={ProjectThree} />
          <h3>PROJECT 3</h3>
          <div className="Project__partiotion"></div>
          <p>
            These is chat app that can communicate with people who has account on these chat app with user name you can find that person on chat app and can stat chatting with them
          </p>
          <div className="Project_Link">
            <a href="https://stately-griffin-0d4949.netlify.app/login" target="blank" className="Project__button">Look it up</a>
            <a href="https://github.com/PrAnAvViNaYaKjAdHaV/C-lProject" target="blank" className="Project__button">github</a>
          </div>
        </div>
        <div className="Project__box reveal">
          <img src={ProjectImage} />
          <h3>PROJECT 4</h3>
          <div className="Project__partiotion"></div>
          <p>
            comming soon !!!!!
          </p>
          <button className="Project__button">Look it up</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
