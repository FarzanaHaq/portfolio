import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <div className="bg-[#F2F6EB] ">
      <div className="max-w-6xl mx-auto flex justify-between px-8 pt-10 items-center">
        <div className=" space-x-8 text-[16px]">
          <Link to={"/"}>Home</Link>
          <Link to={"/skill"}>Skills</Link>
          <Link to={"/project"}>Projects</Link>
        </div>
        <div>
          <a target="_blank" href="https://github.com/FarzanaHaq">
            {" "}
            <button className=" text-[30px] ">
              <FaGithub />
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/farzana-haq-ridita/"
          >
            {" "}
            <button className="text-[30px] ">
              <FaLinkedinIn />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
