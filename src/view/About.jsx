const About = () => {
  return (
    <div className=" w-[90%]   flex flex-col gap-10 mb-[100px] sm:mb-0 items-center justify-center text-white md:mt-0 mt-4">
      <div>
        <h1
          className=" block px-4 py-2 text-[30px] hover:bg-white  hover:text-black capitalize transition-colors duration-300 bg-gradient-to-r text-transparent bg-clip-text from-[#ff014f]
         via-[#ff00ff] to-[#ffce3c] font-bold cursor-pointer hover:translate-x-2 "
        >
          ABOUT ME
        </h1>
      </div>
      <div className="group relative flex justify-center items-center bg-[#ffff45] text-black p-6 rounded-lg shadow-white shadow-2xl overflow-hidden">
        <span className="[word-spacing:0.15rem] sm:text-[14px] md:text-[18px] font-bold relative z-10 transition-colors duration-500 group-hover:text-white">
          Mechanical Engineering graduate with a strong passion for website and
          mobile development. Proficient in MERN stack (MongoDB / Mysql,
          Express.js, React, Node.js) and Flutter for mobile app development.
          Experienced in applying the MVC pattern and state management (Redux,
          GetX) to build scalable and maintainable applications. Seeking a
          challenging role as a Front-End Developer, Back-End Developer, Mobile
          Developer, or Full-Stack Developer to contribute to impactful projects
          by leveraging technical expertise and problem-solving skills.
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#011eff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
      </div>
      <div className="flex gap-5 overflow-x-auto w-full justify-evenly p-3">
        <div className="group relative w-[200px] h-[70px] bg-[#ffff45] cursor-pointer rounded-xl shadow-white shadow-2xl overflow-hidden">
          <span className="text-black font-bold md:text-[25px] text-[15px] text-center relative z-10 transition-colors duration-500 group-hover:text-white flex items-center justify-center h-full">
            Projects 6
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#011eff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </div>
        <div className="group relative w-[200px] h-[70px] bg-[#ffff45] cursor-pointer rounded-xl shadow-white shadow-2xl overflow-hidden">
          <span className="text-black font-bold md:text-[25px] text-[15px] text-center relative z-10 transition-colors duration-500 group-hover:text-white flex items-center justify-center h-full">
            Experience 1+
          </span>

          <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#011eff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </div>

        <div className="group relative w-[200px] h-[70px] bg-[#ffff45] cursor-pointer rounded-xl shadow-white shadow-2xl overflow-hidden">
          <span className="text-black font-bold md:text-[25px] text-[15px] text-center relative z-10 transition-colors duration-500 group-hover:text-white flex items-center justify-center h-full">
            Clients 1
          </span>

          <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#011eff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
