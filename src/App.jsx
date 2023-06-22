import "./App.css";
import Nav from "./components/Nav/nav";
import HeroSection from "./components/HeroSection/HeroSection";
import Project from "./components/Project/Project";
import Technologies from "./components/Technologies/Technologies";
import AboutMe from "./components/AboutMe/AboutMe";
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var i = 0;
  while (i < reveals.length) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i] && reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
    i++;
  }
}
window.addEventListener("scroll", reveal);

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection />
      <Project />
      <Technologies />
      <AboutMe />
    </div>
  );
}

export default App;
