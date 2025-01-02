import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Inisialisasi EmailJS dengan public key
    emailjs.init("YOUR_PUBLIC_KEY");

    emailjs
      .sendForm(
        "service_az9xb2r",
        "template_1n5mofd",
        e.target,
        "hEMTHuYaOhB4XO2T0"
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          console.log(response);
        },
        (error) => {
          alert("Error sending email. Please try again.");
          console.log(error);
        }
      );
  };

  return (
    <motion.div className="min-h-screen flex flex-col items-center gap-10 md:flex-row justify-center w-full p-9 ">
      <div className="w-full md:w-1/2  p-8 bg-white  rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Contact Me
        </h2>
        <p className="text-xl  text-center text-gray-800 mb-6">
          these fields will sent to
        </p>
        <p className="text-xl  font-bold text-center text-gray-800 mb-6">
          russel.emilian@gmail.com
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="md:w-1/2 w-full flex flex-col gap-10">
        <div className="group relative flex justify-center items-center bg-[#ffff45] text-black p-3 rounded-lg shadow-white shadow-2xl overflow-hidden">
          <div className="[word-spacing:0.15rem] sm:text-[14px] md:text-[18px] font-bold relative z-10 transition-colors duration-500 group-hover:text-white flex flex-col">
            <span>Whatsapp : 081247302797</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#ff85de] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </div>
        <div className="group relative flex justify-center items-center bg-[#ffff45] text-black p-3 rounded-lg shadow-white shadow-2xl overflow-hidden">
          <div className="[word-spacing:0.15rem] sm:text-[14px] md:text-[18px] font-bold relative z-10 transition-colors duration-500 group-hover:text-white flex flex-col">
            <span>Whatsapp : 081247302797</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#ff85de] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </div>
        <div className="group relative flex justify-center items-center bg-[#ffff45] text-black p-3 rounded-lg shadow-white shadow-2xl overflow-hidden">
          <div className="[word-spacing:0.15rem] sm:text-[14px] md:text-[18px] font-bold relative z-10 transition-colors duration-500 group-hover:text-white flex flex-col">
            <span>Whatsapp : 081247302797</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#ff85de] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </div>
        <div className="group relative flex justify-center items-center bg-[#ffff45] text-black p-3 rounded-lg shadow-white shadow-2xl overflow-hidden">
          <div className="[word-spacing:0.15rem] sm:text-[14px] md:text-[18px] font-bold relative z-10 transition-colors duration-500 group-hover:text-white flex flex-col">
            <span>Whatsapp : 081247302797</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff014f] to-[#ff85de] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
