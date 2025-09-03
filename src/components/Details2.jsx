import React from 'react'

const Details2 = () => {
  return (
     <div className="bg-[#F2F6EB] pb-20">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-center font-[700] text-[30px] text-[#2C3640]">
         WhereIsIt
        </h1>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="">
            <h2 className="text-[#2C3640] font-[700] text-[20px]">
              Description
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">
             This project is a Lost and Found Website, a platform designed to connect individuals who have lost personal belongings with those who may have found them. Users can report lost items, browse found items, and interact to recover their belongings.
            </p>

            <h2 className="text-[#2C3640]  font-[700] text-[20px] mt-3">
              Duration
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">5 Days</p>
            <h2 className="text-[#2C3640]  font-[700] text-[20px] mt-3">
              Challenges
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">
             Filter/search posts by item type or keyword
            </p>
            <h2 className="text-[#2C3640]  font-[700] text-[20px] mt-3">
              Learnings
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">
              Crud using mongoDB
            </p>
          </div>
          <div>
            <h3 className="text-[#2C3640]  font-[700] text-[20px]">Features</h3>
            <ul className="text-[17px] font-[600] text-[#71746C] list-disc ml-10">
              <li>Secure login/register with Firebase Authentication.</li>
              <li>Post lost or found items with image, description, and location.</li>
              <li>
               Filter/search posts by item type or keyword.
              </li>
              <li>View item details and contact the poster.</li>
               <li>Framer Motion for elegant transitions.</li>
              <li>Firebase login/register</li>

            </ul>
            <h2 className="text-[#2C3640]  font-[700] text-[20px] mt-3 mb-2">
              Tech Stack
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">
              React, Tailwind css, daisyui, Framer motion, Firebase
              authentication, Node.js, Express.js, MongoDB
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details2