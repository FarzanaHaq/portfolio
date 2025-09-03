import React from "react";

export const About = () => {
  return (
    <div className="bg-[#2C3640]">
      <div className=" pt-30 pb-25 flex items-start max-w-6xl mx-auto">
        <div className=" flex-1/3">
          <div className="">
            <div className="bg-white w-[120px] h-2 "></div>
            <div className="mb-2">
              <h1 className=" text-[50px] font-[700] text-white mt-5 leading-15">
                ABOUT <br /> ME
              </h1>
              <p className=" text-[18px] font-[600] text-[#BFC9D1] mt-2">
                Get to know me better as a <br /> web developer
              </p>
            </div>
          </div>
        </div>
        <div className="flex-2/3">
          <section className="px-6">
            <p className="text-lg text-[#BFC9D1] leading-relaxed">
              Hi, I’m
              <span className="font-semibold text-white"> Ridita</span>, a
              passionate
              <span className="text-white font-semibold px-2">
                MERN Stack Developer
              </span>
              who loves building dynamic, user-friendly, and scalable web
              applications. With expertise in{" "}
              <span className="font-semibold">
                MongoDB, Express.js, React, and Node.js
              </span>
              , I bring ideas to life through clean code and intuitive UI
              design.
            </p>

            <p className="mt-4 text-lg text-[#BFC9D1] leading-relaxed ">
              I enjoy crafting full-stack solutions that not only work smoothly
              but also deliver a seamless user experience. From developing
              RESTful APIs to creating responsive interfaces, I’m always excited
              to take on challenges and explore new technologies in the
              JavaScript ecosystem.
            </p>

            <p className="mt-4 text-lg text-[#BFC9D1] leading-relaxed ">
              When I’m not coding, you’ll probably find me learning new tools,
              contributing to side projects, or experimenting with modern design
              trends to make my applications stand out.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
