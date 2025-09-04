import campPhoto from "../assets/camp-photo.jpeg";
import lostPhoto from "../assets/lost-found.jpeg";
import gardenPhoto from "../assets/garden.jpeg";
import { ExternalLink, Info } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div className="bg-[#F2F6EB] pt-28 pb-32 ">
      <div className="max-w-6xl mx-auto ">
        <motion.div
          className="pl-6"
          initial={{ y: 100, opacity: 0 }} // starts lower
          whileInView={{ y: 0, opacity: 1 }} // animates upward when in view
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bg-[#2C3640] w-[120px] h-2 "></div>
          <div className="mb-2">
            <h1 className="text-[30px] lg:text-[50px] font-[700] text-[#2C3640] mt-5 lg:leading-15">
              SELECTED <br /> WORKS
            </h1>
            <p className=" text-[18px] font-[600] text-gray-600 mt-2">
              Take a look of some of my projects i <br /> have done.
            </p>
          </div>
        </motion.div>

        <div className="">
          <div className=" lg:shadow-xl/30 mt-10 lg:mt-20 lg:flex lg:items-center gap-10 lg:h-[500px] px-3">
            <div className="flex-1/2">
              <img className="object-cover" src={campPhoto} alt="" />
            </div>
            <div className="lg:flex-1/2 lg:pr-25">
              <p className="text-[19px] font-[600] text-[#2D3441] mt-5 lg:mt-10">
                Fullstack Website
              </p>
              <h1 className="text-[20px] mt-2 lg:mt-5 lg:text-[35px] font-[600] text-[#2D3441]">
                CampCare
              </h1>
              <p className=" lg:text-[17px] font-[600] text-[#71746C] mt-2 whitespace-normal">
                This is a Medical Camp Management System (MCMS) using the MERN
                stack. This system helps the Organizer, and Participants easily
                manage and coordinate medical camps.
              </p>
              <div className="mt-8 flex gap-5 flex-wrap">
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  React
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Express
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  MongoDB
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Firebase
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Tailwind
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  DaisyUI
                </button>
              </div>

              <div className="mt-10 flex justify-center lg:justify-start gap-5 pb-10">
                <a
                  href="https://assignment-twelve-d99dd.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 flex items-center gap-2 bg-[#2D3441] text-white font-semibold hover:bg-[#1B2029] transition duration-200"
                >
                  <ExternalLink size={16} /> Live Link
                </a>
                <Link
                  to={"/detail-1"}
                  className="px-6 py-2 flex items-center gap-2 border border-[#2D3441] text-[#2D3441] font-semibold hover:bg-[#2D3441] hover:text-white transition duration-200"
                >
                  <Info size={16} /> Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:shadow-xl/30 mt-10 lg:mt-20 lg:flex lg:items-center gap-10 lg:h-[500px] px-5 lg:px-0">
            <div className="flex-1/2">
              <img className="object-cover" src={lostPhoto} alt="" />
            </div>
            <div className="flex-1/2 lg:pr-25">
              <p className="text-[19px] font-[600] text-[#2D3441]">
                Fullstack Website
              </p>
              <h1 className="text-[20px] mt-2 lg:mt-5 lg:text-[35px] font-[600] text-[#2D3441]">
                WhereIsIt
              </h1>
              <p className=" lg:text-[17px] font-[600] text-[#71746C] mt-2 whitespace-normal">
                This project is a Lost and Found Website, a platform designed to
                connect individuals who have lost personal belongings with those
                who may have found them.
              </p>
              <div className="mt-8 flex gap-5 flex-wrap">
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  React
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Express
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  MongoDB
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Firebase
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Tailwind
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  DaisyUI
                </button>
              </div>

              <div className="mt-10 flex gap-5 pb-10">
                <a
                  href="https://assignment-ten-ec683.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 flex items-center gap-2 bg-[#2D3441] text-white font-semibold hover:bg-[#1B2029] transition duration-200"
                >
                  <ExternalLink size={16} /> Live Link
                </a>
                <Link
                  to={"/detail-2"}
                  className="px-6 py-2 flex items-center gap-2 border border-[#2D3441] text-[#2D3441] font-semibold hover:bg-[#2D3441] hover:text-white transition duration-200"
                >
                  <Info size={16} /> Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:shadow-xl/30 mt-10 lg:mt-20 lg:flex lg:items-center gap-10 lg:h-[500px] px-5 lg:px-0">
            <div className="flex-1/2">
              <img className=" object-cover" src={gardenPhoto} alt="" />
            </div>
            <div className="flex-1/2 lg:pr-25">
              <p className="text-[19px] font-[600] text-[#2D3441] mt-7">
                Fullstack Website
              </p>
              <h1 className="mt-2 lg:mt-5 text-[20px]  lg:text-[35px] font-[600] text-[#2D3441]">
                GardenHub
              </h1>
              <p className=" text-[17px] font-[600] text-[#71746C] mt-2">
                A platform for gardening enthusiasts to share tips, find local
                gardeners, ask plant care questions, post or join gardening
                events, and connect over shared interests.
              </p>
              <div className="mt-8 flex gap-5 flex-wrap">
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  React
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Express
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  MongoDB
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Firebase
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Tailwind
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  DaisyUI
                </button>
              </div>

              <div className="mt-10 flex gap-5 pb-10">
                <a
                  href="https://simple-firebase-aa7ab.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 flex items-center gap-2 bg-[#2D3441] text-white font-semibold hover:bg-[#1B2029] transition duration-200"
                >
                  <ExternalLink size={16} /> Live Link
                </a>
                <Link
                  to={"/detail-3"}
                  className="px-6 py-2 flex items-center gap-2 border border-[#2D3441] text-[#2D3441] font-semibold hover:bg-[#2D3441] hover:text-white transition duration-200"
                >
                  <Info size={16} /> Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
