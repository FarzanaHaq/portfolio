const Details1 = () => {
  return (
    <div className="bg-[#F2F6EB] pb-20 pt-20">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-center font-[700] text-[30px] text-[#2C3640]">
          CampCare
        </h1>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="">
            <h2 className="text-[#2C3640] font-[700] text-[20px]">
              Description
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">
              A full-stack web application designed to simplify the organization
              and participation of medical camps. This system provides separate
              dashboards for Organizers and Participants, allowing efficient
              camp planning, registration, and payment through a seamless and
              secure platform. Built with the MERN stack, MCMS is ideal for
              NGOs, healthcare groups, and volunteers aiming to conduct medical
              outreach events.
            </p>

            <h2 className="text-[#2C3640]  font-[700] text-[20px] mt-3">
              Duration
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">12 Days</p>
            <h2 className="text-[#2C3640]  font-[700] text-[20px] mt-3">
              Challenges
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">
              Payment integration using stripe api.
            </p>
            <h2 className="text-[#2C3640]  font-[700] text-[20px] mt-3">
              Learnings
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">
              Role based access, Dashboard, tanstack query.
            </p>
          </div>
          <div>
            <h3 className="text-[#2C3640]  font-[700] text-[20px]">Features</h3>
            <ul className="text-[17px] font-[600] text-[#71746C] list-disc ml-10">
              <li>Separate dashboards for Organizers and Participants.</li>
              <li>Organizers can create, update, and monitor medical camps.</li>
              <li>
                Stripe integration for collecting participation fees or
                donations.
              </li>
              <li>Browse upcoming medical camps with full event details.</li>
              <li>Firebase login/register with role-based access.</li>
              <li>Framer Motion for elegant transitions.</li>
            </ul>
            <h2 className="text-[#2C3640]  font-[700] text-[20px] mt-3 mb-2">
              Tech Stack
            </h2>
            <p className="text-[17px] font-[600] text-[#71746C]">
              React, Tailwind css, daisyui, Framer motion, Firebase
              authentication, Node.js, Express.js, MongoDB, Stripe Api
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details1;
