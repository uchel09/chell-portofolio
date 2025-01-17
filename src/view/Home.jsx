import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className=" md:w-[40%]  w-full flex  items-center justify-center">
        <div
          className="w-[400px]  h-[400px] md:w-[300px] shadow-white shadow-lg  md:h-[300px] lg:w-[450px] lg:h-[450px] rounded-full bg-white bg-cover bg-center animate-wave"
          style={{ backgroundImage: "url('/uchel.png')" }}
        ></div>
      </div>
      <div className=" md:w-[60%] flex justify-center text-[white] space-x-2  text-[20px]  flex-col gap-5 font-bold">
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
        <div className="w-full flex  gap-10  ">
          <a
            href="/CV-RusselEmilianRumbino_1.pdf"
            download="CV-Russel.pdf"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:text-black hover:bg-white hover:shadow-lg hover:shadow-white"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="bg-purple-500 text-white px-4 py-2 rounded hover:text-black hover:bg-white hover:shadow-lg hover:shadow-white"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
