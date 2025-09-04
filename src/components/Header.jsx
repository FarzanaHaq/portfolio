import { Link } from "react-router";

export const Header = () => {
  return (
    <div>
      <div className="navbar bg-[#F2F6EB] shadow-sm lg:px-20 pt-3">
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
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/skill"}>Skills</Link>
              </li>
              <li>
                {" "}
                <Link to={"/project"}>Projects</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-[20px] lg:text-[25px] font-[700] text-[#2C3640]">
            Ridita .
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[16px] font-semibold text-[#7e807c]">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-[16px] font-semibold text-[#7e807c]">
              <Link to={"/skill"}>Skills</Link>
            </li>
            <li className="text-[16px] font-semibold text-[#7e807c]">
              <Link to={"/project"}>Projects</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/19BPjtrV2CqZlgi1DOEvBGYsFaFJcLXSr/view?usp=sharing"
            className=" px-2 lg:px-5 py-2  font-[600] border-2 text-gray-600"
          >
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
};
