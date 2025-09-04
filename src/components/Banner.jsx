import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "../../src/index.css";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="py-10 px-7 lg:py-25 bg-[#F2F6EB] ">
      <div className="lg:pl-28 ">
        <motion.p
          className="bg-[#2C3640] w-[150px] h-2"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.p>

        <div className="lg:leading-21">
          {/* First line */}
          <motion.h3
            className="text-[25px] lg:text-[70px] font-[700] text-[#2C3640] mt-5"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'M RIDITA
          </motion.h3>

          {/* Second line */}
          <motion.h1
            className="text-[25px] lg:text-[70px] font-[700] text-[#2C3640]"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration:0.8, delay: 0.6 }}
          >
            A WEB DEVELOPER
          </motion.h1>
        </div>

        {/* Third line */}
        <motion.p
          className="text-[18px] lg:text-[25px] font-medium mt-2 text-[#66686C] w-[310px] lg:w-[620px] text-justify lg:text-left"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          A mern stack developer from bangladesh passionate about building web
          applications that are not only functional but also visually appealing.
        </motion.p>

        <div>
          <motion.button
            className="mt-6 px-4 py-3 text-[18px] lg:px-12 lg:py-4 lg:text-[30px]  font-[500] bg-[#2C3640] text-white"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Let's Talk
          </motion.button>

          <motion.p
            className="text-[25px] lg:text-[30px] font-[600] mt-10 lg:mt-20 ml-1"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Follow Me
          </motion.p>
        </div>

        <motion.div
          className="flex gap-4 mt-3 ml-1"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <a target="_blank" href="https://github.com/FarzanaHaq">
            <button className="text-[30px] lg:text-[35px] text-[#2C3640]">
              <FaGithub />
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/farzana-haq-ridita/"
          >
            <button className="text-[30px] lg:text-[35px] text-[#2C3640]">
              <FaLinkedinIn />
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
