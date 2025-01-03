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
          I graduated with a degree in Mechanical Engineering in 2021 from Sam
          Ratulangi University. Since then, I have developed a strong passion
          for Website and Mobile Development. I have completed training in the
          MERN stack, gaining hands-on experience with MongoDB, Express.js,
          React, and Node.js. In addition, I possess skills in Mobile
          Development as a Flutter Developer. Through this training, I mastered
          the MVC pattern, which helps in organizing code, separating
          application logic, and enhancing maintenance and scalability.
          Furthermore, I honed my ability to manage application state using
          Redux in React, allowing me to simplify complex codebases and
          streamline development workflows. I am currently open to opportunities
          as a Front-End Developer, Back-End Developer,Mobile Developer or
          Full-Stack Developer. I am eager to leverage my technical expertise,
          strong problem-solving abilities, and passion for creating seamless
          user experiences to contribute to impactful projects.
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
