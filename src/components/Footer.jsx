import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <div className="bg-[#F2F6EB] border-t-2 border-gray-600 ">
    <div className="max-w-6xl mx-auto flex justify-between px-8 pt-10 items-center">
          <div className=" space-x-8 text-[16px]">
        <Link>Home</Link>
        <Link>Services</Link>
        <Link>Portfolio</Link>
        <Link>About Us</Link>
      </div>
      <div>
        <Link>
          {" "}
          <button className=" text-[30px] ">
            <FaGithub />
          </button>
        </Link>
        <Link>
          {" "}
          <button className="text-[30px] ">
            <FaLinkedinIn />
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};
