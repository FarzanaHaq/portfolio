import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "../../src/index.css";
import emailPhoto from "../assets/Midjourney.jpg";

const Banner = () => {
  return (
    <div className="py-25 bg-[#F2F6EB] ">
      <div className="pl-28">
        <p className="bg-[#2C3640] w-[150px] h-2"></p>
        <div className="leading-21">
          <h3 className=" text-[70px] font-[700] text-[#2C3640] mt-5 ">
            I'M RIDITA
          </h3>

          <h1 className="text-[70px] font-[700] text-[#2C3640]">
            A WEB DEVELOPER
          </h1>
        </div>

        <p className="  text-[25px] font-medium mt-2 text-[#66686C]">
          A mern stack developer from bangladesh passionate about <br />{" "}
          building web applications that are not only functional <br /> but also
          visually appealing.
        </p>
        <div>
          <button className="mt-6 px-12 py-4 text-[30px]  font-[500] bg-[#2C3640] text-white">
            Let's Talk
          </button>
          <p className="text-[30px] font-[600] mt-20 ml-1">Follow Me</p>
        </div>
        <div className="flex gap-4 mt-3 ml-1">
          <a target="_blank" href="https://github.com/FarzanaHaq">
            <button className=" text-[35px] text-[#2C3640]">
              <FaGithub />
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/farzana-haq-ridita/"
          >
            <button className=" text-[35px] text-[#2C3640]">
              <FaLinkedinIn />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
