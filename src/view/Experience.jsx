const Experiences = () => {
  return (
    <div className=" w-[90%]   flex flex-col gap-10 mb-[100px] sm:mb-0 items-center justify-center text-white md:mt-0 mt-4">
      <div>
        <h1
          className=" block px-4 py-2 text-[30px] hover:bg-white  hover:text-black capitalize transition-colors duration-300 bg-gradient-to-r text-transparent bg-clip-text from-[#ff014f]
         via-[#ff00ff] to-[#ffce3c] font-bold cursor-pointer hover:translate-x-2 "
        >
          Experiences
        </h1>
      </div>
      <div className="group relative flex flex-col justify-start items-start bg-[white] text-black p-6 rounded-lg shadow-white shadow-2xl overflow-hidden">
        <span className="font-bold text-[20px]  relative z-10 group-hover:text-white transition-colors duration-500">
          Eduwork
        </span>
        <span className="font-semibold text-[18px]  relative z-10 group-hover:text-white transition-colors duration-500">
          Fullstack Web Developer MERN
        </span>
        <span className="mb-10 italic  relative z-10 group-hover:text-white transition-colors duration-500">
          Maret 2023 - Desember 2024
        </span>
        <span className="[word-spacing:0.15rem] sm:text-[14px] md:text-[18px] font-bold relative z-10 transition-colors duration-500 group-hover:text-white">
          Implemented the MVC architecture and developed RESTful APIs using
          Express.js. Designed and built responsive and dynamic user interfaces
          using React.js, Next.js, and Tailwind CSS. Successfully completed five
          projects, demonstrating expertise in front-end and back-end
          development while ensuring maintainable and scalable code.
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#011eff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
      </div>

      <div className="group relative flex flex-col justify-start items-start bg-[#ffffe6] text-black p-6 rounded-lg shadow-white shadow-2xl overflow-hidden">
        <span className="font-bold text-[20px] group-hover:text-white relative z-10">
          PT FIT AJA DIGITAL NUSANTARA{" "}
        </span>
        <span className="font-semibold text-[18px] group-hover:text-white relative z-10">
          Mobile Fluter Develper{" "}
        </span>
        <span className="mb-10 italic group-hover:text-white relative z-10">
          Juni 2023 - Juni 2023{" "}
        </span>
        <span className="[word-spacing:0.15rem] sm:text-[14px] md:text-[18px] font-bold relative z-10 transition-colors duration-500 group-hover:text-white">
          Developed a Model-View-View-Controller (MVVC) structure using Flutter
          and GetX for state management, ensuring well-organized and
          maintainable codebases. Successfully completed all assigned tasks
          within tight deadlines while collaborating effectively with the team
          to deliver high-quality features, adhering to industry best practices
          and coding standards.
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#011eff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
      </div>
    </div>
  );
};

export default Experiences;
