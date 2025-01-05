import Navbar from "./components/Navbar";
import About from "./view/About";
import ContactMe from "./view/contact";
import Experiences from "./view/Experience";
import Home from "./view/Home";
import Projects from "./view/Projects";
import Skillset from "./view/skillset";

function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center ">
      <Navbar />

      <div className="flex flex-col flex-1 items-center  md:w-[90%] w-[95%]">
        <div id="home" className="md:h-[100vh] w-full   flex flex-col pt-20">
          <div className="flex-1  flex w-full justify-beetween flex-col md:flex-row gap-5">
            <Home />
          </div>
        </div>
        <div id="about" className="w-full pt-20 flex flex-col  mb-12 ">
          <div className="flex-1  flex items-center justify-center">
            <About />
          </div>
        </div>
        <div id="skills" className=" w-full pt-20 flex flex-col">
          <div
            id="skills"
            className="flex-1  flex items-center justify-center  "
          >
            <Skillset />
          </div>
        </div>
        <div
          id="projects"
          className=" w-full min-h-screen gap-10 pt-20 flex flex-col  mt-20 items-center justify-center"
        >
          <Projects />
        </div>
        <div id="experiences" className="w-full pt-20 flex flex-col  mb-12 ">
          <div className="flex-1  flex items-center justify-center">
            <Experiences />
          </div>
        </div>
        <div id="contact" className=" w-full flex flex-col mb-20">
          <ContactMe />
        </div>
      </div>
      <footer className="w-full bg-green-400"></footer>
    </div>
  );
}

export default App;
