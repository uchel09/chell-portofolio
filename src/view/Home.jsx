import { TypeAnimation } from "react-type-animation";
import {motion} from "framer-motion"


const Home = () => {
    const textVariants = {
      initial: {
        x: 400,
        y: -300,
        opacity: 0,
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          staggerChildren: 0.1,
        },
      },
    };
    const textVariants2 = {
      initial: {
        x: -400,
        y: 300,
        opacity: 0,
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          staggerChildren: 0.1,
        },
      },
    };
     
  return (
    <>
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className=" md:w-[40%]  w-full flex  items-center justify-center"
      >
        <div
          className="w-[400px]  h-[400px] md:w-[300px] shadow-white shadow-lg  md:h-[300px] lg:w-[450px] lg:h-[450px] rounded-full bg-white bg-cover bg-center animate-wave"
          style={{ backgroundImage: "url('/uchel.png')" }}
        ></div>
      </motion.div>
      < motion.div 
          variants={textVariants2}
        initial="initial"
        whileInView="animate"
      className=" md:w-[60%] flex justify-center text-[white] space-x-2  text-[20px]  flex-col gap-5 font-bold">
        <span className="text-[30px] font-bold">
          My Name is Russel Emilian Rumbino
        </span>
        <div className="text-[28px]">
          <span className="lg:text-[35px] md:text-[28px]">
            I{"`"}m A{" "}
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Mobile Developer",
                2000,
                "Freelancer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                display: "inline-block",
              }}
              className="text-purple-400"
            />
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
