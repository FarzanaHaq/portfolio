import React from "react";
import { Link } from "react-router";

export const Header = () => {
  return (
    <div>
      <div className="navbar bg-[#F2F6EB] shadow-sm px-20 pt-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-[25px] font-[600]">
            Ridita . 
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[16px] font-semibold text-[#7e807c]">
              <Link>Home</Link>
            </li>
            <li className="text-[16px] font-semibold text-[#7e807c]">
              <Link>Skills</Link>
            </li>
            <li className="text-[16px] font-semibold text-[#7e807c]">
              <Link>Projects</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a  className=" px-5 py-2  font-[600] border-2 text-gray-600">Get Resume</a>
        </div>
      </div>
    </div>
  );
};
