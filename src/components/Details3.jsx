
import gardenPhoto from "../assets/garden.jpeg";

const Details3 = () => {
  return (
    <div className="bg-[#F2F6EB] pb-20 pt-10">
      <div className="max-w-6xl mx-auto ">
           <img src={gardenPhoto} className="px-5" alt="" />
        <h1 className="text-center font-[700] text-[30px] text-[#2C3640] mt-13">
          GardenHub
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 px-5">
          <div className="">
            <h2 className="text-[#2C3640] font-[700] text-[20px]">
              Description
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C] text-justify">
              A community-driven web application for gardening enthusiasts to
              connect, share tips, ask questions, join local events, and bond
              over shared interests like composting, balcony gardening,
              hydroponics, and more. Whether you're a seasoned green thumb or
              just starting out, this platform brings people together to learn
              and grow both plants and friendships!
            </p>

            <h2 className="text-[#2C3640]  font-[700] text-[20px] mt-3">
              Duration
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">5 Days</p>
            <h2 className="text-[#2C3640]  font-[700] text-[20px] mt-3">
              Challenges
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">
              Creating database using MongoDB
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
              <li>Share gardening tips, photos, and ideas</li>
              <li>Connect with nearby gardening enthusiasts</li>
              <li>Post plant care questions and help others</li>
              <li>: Create or join community events & workshops</li>
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
  );
};

export default Details3;
