/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-600"
    onClick={onClick}
  >
    <ArrowLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-600"
    onClick={onClick}
  >
    <ArrowRight />
  </button>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const mobileLinks= [];

  const webLinks = [
    {
      name: "hijja shop",
      webLink: "https://hijjashop.vercel.app",
      githubLink: "https://github.com/uchel09/edu-fesisco",
      photo: "/hijja.png",
    },
    {
      name: "chord c",
      webLink: "https://chord-c-next.vercel.app",
      githubLink: "https://github.com/uchel09/chord-c-next",
      photo: "/chord-merge.png",
    },
    {
      name: "chell photo stock",
      webLink: "https://chell-photo-stock.vercel.app/",
      githubLink: "https://github.com/uchel09/chell-photo-stock",
      photo: "/chell-photostock.png",
    },
    {
      name: "chell chat",
      webLink: "https://chell-chat-app.vercel.app",
      githubLink: "https://github.com/uchel09/chell-chat-app",
      photo: "/chell-chats.png",
    },
    {
      name: "chelldemy",
      webLink: "https://chelldemy.vercel.app",
      githubLink: "https://github.com/uchel09/chelldemy",
      photo: "/chelldemy.png",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1>Projects</h1>
      <div className="w-[90%] mx-auto h-full">
        {/* Tab Buttons */}
        <div className="flex justify-around border-b border-gray-300">
          {["web", "mobile"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`py-2 px-5 border-b-2 font-bold text-[18px] md:text-[25px] transition-colors duration-300 ${
                activeTab === tab
                  ? " bg-gradient-to-r text-transparent bg-clip-text from-[#ff014f] via-[#ff00ff] to-[#ffce3c] border-purple-500"
                  : "border-transparent text-gray-600"
              }`}
            >
              {tab === "web"
                ? `${tab.toUpperCase()} (${webLinks.length + " " + "Projects"})`
                : `${tab.toUpperCase()} (${
                    mobileLinks.length + " " + "Projects"
                  })`}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === "web" && (
            <Slider {...sliderSettings}>
              {webLinks.map((project, index) => (
                <div key={index} className="p-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img
                      src={project.photo}
                      alt={project.name}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-bold text-gray-800">
                        {project.name.toUpperCase()}
                      </h2>
                      <div className="flex justify-between mt-2">
                        <a
                          href={project.webLink}
                          target="_blank"
                          rel="noopener noreferrer"

                        className="text-white hover:shadow-xl shadow-black hover:underline bg-gradient-to-t from-[#6f3434] via-[#3a93d7] to-[#ffce3c]  px-2 rounded text-[20px] font-bold"
                        >
                          Visit
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline bg-gradient-to-r from-[#ff014f] via-[#ff00ff] to-[#ffce3c]  px-2 rounded text-[20px] font-bold"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
          {activeTab === "mobile" && (
            <div>
              <p>Konten untuk Tab Mobile</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
