import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { VscTools } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import "../../src/index.css";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each child
    },
  },
};

// Variants for each card
const item = {
  hidden: { y: 80, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Skills = () => {
  return (
    <div
      className="pt-20 pb-28 bg-[#2C3640]
    "
    >
      <div className="max-w-6xl mx-auto">
        <div className="pl-8 lg:pl-2">
          <div className="bg-white w-[120px] h-2 mt-10 "></div>
          <div className="mb-2">
            <h1 className="text-[30px] lg:text-[50px] font-[700] text-white mt-5">
              MY SKILLS
            </h1>
            <p className=" text-[18px] font-[400] text-[#BFC9D1]">
              Things that I have learned so far
            </p>
          </div>
        </div>
        <div className="px-5">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 mt-10"
            variants={container}
            initial="hidden"
            whileInView="show" // 👈 animate when in view
            viewport={{ once: true, amount: 0.2 }} // 👈 controls scroll trigger
          >
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className=" p-10 shadow-xl/30"
            >
              {" "}
              <div className="flex gap-3 items-center">
                {" "}
                <FaCode className="text-[30px] text-[#BFC9D1]" />{" "}
                <p className="text-white text-[18px] lg:text-[22px] font-bold">
                  {" "}
                  Frontend Development{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex mt-5 gap-5">
                {" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30 ">
                  {" "}
                  <FaReact className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    React{" "}
                  </span>{" "}
                </button>{" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30 ">
                  {" "}
                  <RiNextjsFill className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    Next.js{" "}
                  </span>{" "}
                </button>{" "}
              </div>{" "}
              <div className="flex mt-5 gap-3">
                {" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30 ">
                  {" "}
                  <BiLogoTypescript className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    TypeScript{" "}
                  </span>{" "}
                </button>{" "}
                <button className="px-3 py-2 flex items-center gap-1 shadow-xl/30 ">
                  {" "}
                  <RiTailwindCssFill className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px] inline">
                    {" "}
                    Tailwind CSS{" "}
                  </span>{" "}
                </button>{" "}
              </div>{" "}
              <div className="flex mt-5 gap-5">
                {" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30">
                  {" "}
                  <SiHtml5 className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    HTML{" "}
                  </span>{" "}
                </button>{" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30 ">
                  {" "}
                  <FaCss3Alt className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    CSS{" "}
                  </span>{" "}
                </button>{" "}
              </div>{" "}
            </motion.div>
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className=" p-10 shadow-xl/30"
            >
              {" "}
              <div className="flex gap-3 items-center">
                {" "}
                <FaDatabase className="text-[25px] text-[#BFC9D1]" />{" "}
                <p className="text-white text-[18px] lg:text-[22px] font-bold">
                  {" "}
                  Backend Development{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex mt-5 gap-5">
                {" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30 ">
                  {" "}
                  <FaNodeJs className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    Node.js{" "}
                  </span>{" "}
                </button>{" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30 ">
                  {" "}
                  <SiExpress className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    Express.js{" "}
                  </span>{" "}
                </button>{" "}
              </div>{" "}
              <div className="flex mt-5 gap-3">
                {" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30">
                  {" "}
                  <SiMongodb className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    MongoDB{" "}
                  </span>{" "}
                </button>{" "}
                <button className="px-3 py-2 flex items-center gap-1 shadow-xl/30 ">
                  {" "}
                  <SiMongoose className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px] inline">
                    {" "}
                    Mongoose{" "}
                  </span>{" "}
                </button>{" "}
              </div>{" "}
              <div className="flex mt-5 gap-3">
                {" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30 ">
                  {" "}
                  <SiPrisma className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    Prisma{" "}
                  </span>{" "}
                </button>{" "}
              </div>{" "}
            </motion.div>
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className=" p-10 shadow-xl/30"
            >
              {" "}
              <div className="flex gap-5 items-center">
                {" "}
                <VscTools className="text-[30px] text-[#BFC9D1]" />{" "}
                <p className="text-white text-[18px] lg:text-[22px] font-bold">
                  {" "}
                  Tools & Technologies{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex mt-5 gap-5">
                {" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30 ">
                  {" "}
                  <FaReact className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    VS Code{" "}
                  </span>{" "}
                </button>{" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30">
                  {" "}
                  <IoLogoFirebase className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    Firebase{" "}
                  </span>{" "}
                </button>{" "}
              </div>{" "}
              <div className="flex mt-5 gap-3">
                {" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30">
                  {" "}
                  <IoLogoVercel className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    Vercel{" "}
                  </span>{" "}
                </button>{" "}
                <button className="px-3 py-2 flex items-center gap-1 shadow-xl/30">
                  {" "}
                  <FaGithub className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px] inline">
                    {" "}
                    GitHub{" "}
                  </span>{" "}
                </button>{" "}
              </div>{" "}
              <div className="flex mt-5 gap-5">
                {" "}
                <button className="px-5 py-2 flex items-center gap-1 shadow-xl/30">
                  {" "}
                  <SiPostman className="text-[20px] text-[#BFC9D1] font-bold" />{" "}
                  <span className="font-bold text-[#BFC9D1] text-[14px]">
                    {" "}
                    Postman{" "}
                  </span>{" "}
                </button>{" "}
              </div>{" "}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
