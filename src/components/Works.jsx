import campPhoto from "../assets/camp-photo.jpeg";
import lostPhoto from "../assets/lost-found.jpeg";
import gardenPhoto from "../assets/garden.jpeg";
import { ExternalLink, Info } from "lucide-react";
import { Link } from "react-router";

const Works = () => {
  return (
    <div className="bg-[#F2F6EB] pt-28 pb-32">
      <div className="max-w-6xl mx-auto ">
        <div className="">
          <div className="bg-[#2C3640] w-[120px] h-2 "></div>
          <div className="mb-2">
            <h1 className=" text-[50px] font-[700] text-[#2C3640] mt-5 leading-15">
              SELECTED <br /> WORKS
            </h1>
            <p className=" text-[18px] font-[600] text-gray-600 mt-2">
              Take a look of some of my projects i <br /> have done.
            </p>
          </div>
        </div>

        <div>
          <div className="shadow-xl/30 mt-20 flex items-center gap-10 ">
            <div className="flex-1/2">
              <img className="h-[500px]" src={campPhoto} alt="" />
            </div>
            <div className="flex-1/2 pr-25">
              <p className="text-[19px] font-[600] text-[#2D3441]">
                Fullstack Website
              </p>
              <h1 className="mt-5 text-[35px] font-[600] text-[#2D3441]">
                CampCare
              </h1>
              <p className=" text-[17px] font-[600] text-[#71746C] mt-2">
                This is a Medical Camp Management System (MCMS) using the MERN
                stack. This system helps the Organizer, and Participants easily
                manage and coordinate medical camps.
              </p>
              <div className="mt-8 flex gap-5">
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
              </div>
              <div className="flex gap-5 mt-3">
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Tailwind
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  DaisyUI
                </button>
              </div>
              <div className="mt-10 flex gap-5">
                <a
                  href="https://assignment-twelve-d99dd.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 flex items-center gap-2 bg-[#2D3441] text-white font-semibold hover:bg-[#1B2029] transition duration-200"
                >
                  <ExternalLink size={16} /> Live Link
                </a>
                <Link to={"/detail-1"} className="px-6 py-2 flex items-center gap-2 border border-[#2D3441] text-[#2D3441] font-semibold hover:bg-[#2D3441] hover:text-white transition duration-200">
                  <Info size={16} /> Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="shadow-xl/30 mt-20 flex items-center gap-10 ">
            <div className="flex-1/2">
              <img className="h-[500px]" src={lostPhoto} alt="" />
            </div>
            <div className="flex-1/2 pr-25">
              <p className="text-[19px] font-[600] text-[#2D3441]">
                Fullstack Website
              </p>
              <h1 className="mt-5 text-[35px] font-[600] text-[#2D3441]">
                WhereIsIt
              </h1>
              <p className=" text-[17px] font-[600] text-[#71746C] mt-2">
                This project is a Lost and Found Website, a platform designed to
                connect individuals who have lost personal belongings with those
                who may have found them.
              </p>
              <div className="mt-8 flex gap-5">
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
              </div>
              <div className="flex gap-5 mt-3">
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Tailwind
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  DaisyUI
                </button>
              </div>
              <div className="mt-10 flex gap-5">
                <a
                  href="https://assignment-ten-ec683.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 flex items-center gap-2 bg-[#2D3441] text-white font-semibold hover:bg-[#1B2029] transition duration-200"
                >
                  <ExternalLink size={16} /> Live Link
                </a>
                <Link to={"/detail-2"} className="px-6 py-2 flex items-center gap-2 border border-[#2D3441] text-[#2D3441] font-semibold hover:bg-[#2D3441] hover:text-white transition duration-200">
                  <Info size={16} /> Details
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="shadow-xl/30 mt-20 flex items-center gap-10 ">
            <div className="flex-1/2">
              <img className="h-[500px]" src={gardenPhoto} alt="" />
            </div>
            <div className="flex-1/2 pr-25">
              <p className="text-[19px] font-[600] text-[#2D3441]">
                Fullstack Website
              </p>
              <h1 className="mt-5 text-[35px] font-[600] text-[#2D3441]">
                GardenHub
              </h1>
              <p className=" text-[17px] font-[600] text-[#71746C] mt-2">
                A platform for gardening enthusiasts to share tips, find local
                gardeners, ask plant care questions, post or join gardening
                events, and connect over shared interests.
              </p>
              <div className="mt-8 flex gap-5">
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
              </div>
              <div className="flex gap-5 mt-3">
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  Tailwind
                </button>
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/20 font-[600] text-[#2D3441] text-[14px]">
                  DaisyUI
                </button>
              </div>
              <div className="mt-10 flex gap-5">
                <a
                  href="https://simple-firebase-aa7ab.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 flex items-center gap-2 bg-[#2D3441] text-white font-semibold hover:bg-[#1B2029] transition duration-200"
                >
                  <ExternalLink size={16} /> Live Link
                </a>
                <Link to={"/detail-3"} className="px-6 py-2 flex items-center gap-2 border border-[#2D3441] text-[#2D3441] font-semibold hover:bg-[#2D3441] hover:text-white transition duration-200">
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
