import { motion } from "framer-motion";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiPostman,
  SiGetx,
  SiGit,
  SiGithub,
  SiRedux,
  SiGo,
  SiVite,
  SiTailwindcss,
  SiGin,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

const Skillset = () => {
  return (
    <div className="md:w-[90%] w-full overflow-x-hidden">
      <div className="w-full  flex items-center justify-center mb-3">
        <h1
          className=" block px-4 py-2 text-[30px] hover:bg-white mt-20  hover:text-black capitalize transition-colors duration-300 bg-gradient-to-r text-transparent bg-clip-text from-[#ff014f]
         via-[#ff00ff] to-[#ffce3c] font-bold cursor-pointer hover:translate-x-2 "
        >
          SKILLS
        </h1>
      </div>

      <div className="w-full flex-wrap flex-col gap-[60px] md:gap-10 md:flex-row flex justify-between">
        <motion.div
          animate={{
            x: [0, -60, 60, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          whileInView="animate"
          className="w-[400px] h-[260px] flex flex-col px-4 rounded-xl hover:shadow-2xl hover:shadow-purple-400 shadow-xl shadow-white bg-black border-t-2 border-white"
        >
          <h3 className="text-slate-400 w-full text-center mb-3 text-[20px] font-bold">
            Fullstack Web
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-800 font-bold">
            <div className="flex text-white items-center gap-2">
              <p>JavaScript</p>
              <SiJavascript size={25} color="yellow" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>TypeScript</p>
              <SiTypescript size={25} color="blue" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>ReactJS</p>
              <SiReact size={25} color="cyan" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>NextJS</p>
              <SiNextdotjs size={25} />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>ExpressJS</p>
              <SiExpress size={25} color="white" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>NodeJS</p>
              <SiNodedotjs size={25} color="green" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>MongoDB</p>
              <SiMongodb size={25} color="green" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>PostgreSQL</p>

              <SiPostgresql size={30} className="text-blue-600 font-bold" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>MySQL</p>
              <SiMysql size={40} color="orange" />
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          whileInView="animate"
          className="w-[400px] h-[260px] flex flex-col justify-between items-center rounded-xl hover:shadow-2xl hover:shadow-purple-400 shadow-xl shadow-white bg-black border-t-2 border-white"
        >
          <h3 className="text-slate-400 w-full text-center mb-3 text-[20px] font-bold">
            Mobile
          </h3>
          <img src="icons8-flutter.svg" alt="flutter" />
          <p className="text-white w-full text-center mb-3 text-[20px] font-bold">
            Flutter
          </p>
        </motion.div>
        <motion.div
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          whileInView="animate"
          className="w-[400px] h-[260px] flex flex-col px-4 rounded-xl hover:shadow-2xl hover:shadow-purple-400 shadow-xl shadow-white bg-black border-t-2 border-white"
        >
          <h3 className="text-slate-400 w-full text-center mb-3 text-[20px] font-bold">
            Tools
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-800 font-bold">
            <div className="flex text-white items-center gap-2">
              <p>Git</p>
              <SiGit size={25} color="red" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>Github</p>
              <SiGithub size={25} color="white" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>Redux</p>
              <SiRedux size={25} color="cyan" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>Getx</p>
              <SiGetx size={25} color="purple" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>bloc</p>
              <img src="bloc.png" alt="bloc" width={100} height={100} />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>Postman</p>
              <SiPostman size={25} color="orange" />
            </div>

            <div className="flex text-white items-center gap-2">
              <p>Vercel</p>
              <SiVercel size={25} color="white" />
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          whileInView="animate"
          className="w-[400px] h-[260px] flex flex-col px-4 rounded-xl hover:shadow-2xl hover:shadow-purple-400 shadow-xl shadow-white bg-black border-t-2 border-white"
        >
          <h3 className="text-slate-400 w-full text-center mb-3 text-[20px] font-bold">
            Others
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-800 font-bold">
            <div className="flex text-white items-center gap-2">
              <p>Tailwind</p>
              <SiTailwindcss size={25} className="text-[aqua]" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>Vite</p>
              <SiVite size={25} color="orange" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>Golang</p>
              <SiGo size={35} className="text-[aqua]" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>Gin</p>
              <SiGin size={30} className="text-[aqua]" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>Html</p>
              <SiHtml5 size={25} className="text-[#da2316]" />
            </div>
            <div className="flex text-white items-center gap-2">
              <p>CSS</p>
              <SiCss3 size={25} className="text-[aqua]" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skillset;
