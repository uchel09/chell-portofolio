import Navbar from "./components/Navbar";
import About from "./view/About";
import Home from "./view/Home";
import Projects from "./view/Projects";

function App() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col flex-1 items-center lg:w-[80%] md:w-[90%] w-[95%]">
        <div id="home" className="md:h-[100vh] w-full   flex flex-col pt-20">
          <div className="flex-1  flex w-full justify-beetween flex-col md:flex-row gap-5">
            <Home />
          </div>
        </div>
        <div id="about" className="h-[100vh] w-full pt-20 flex flex-col  ">
          
          <div className="flex-1  flex items-center justify-center">
            <About/>
          </div>
        </div>
        <div id="projects" className="h-[100vh] w-full gap-10 pt-20 flex flex-col  mt-20 items-center justify-center">

           <Projects/>
        </div>
        <div id="contact" className="h-[100vh] w-full pt-20 flex flex-col">
          <h1 className="text-4xl text-[#ff00ff] text-center ">Contact</h1>
        </div>
      </div>
      <footer className="w-full bg-green-400"></footer>
    </div>
  );
}

export default App;
