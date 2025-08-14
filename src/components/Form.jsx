import { useState } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import emailPhoto from "../assets/5849.jpg";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#F2F6EB] pb-30 pt-30">
      <div className="max-w-6xl mx-auto mb-10">
        <div className="bg-[#2C3640] w-[120px] h-2 "></div>
        <div className="mb-2">
          <h1 className=" text-[50px] font-[700] text-[#2C3640] mt-5 leading-15">
            LET'S CONNECT
          </h1>
        </div>
      </div>
      <div className="flex max-w-6xl mx-auto gap-5">
        <div className="flex-1/2">
          <div className="shadow-xl/30 p-8 mb-5">
            <h1 className="mt-5 text-[35px] font-[600] text-[#2D3441] leading-12">
              Let's create something <br /> amazing together!
            </h1>
            <p className=" text-[17px] font-[600] text-[#71746C] mt-2">
              Feel free to reach out for projects, collaborations or web <br />
              development inquiries via the form or email.
            </p>
            <div className=" p-3">
              <div className="border-b-2 p-5 border-[#2D3441]">
                <div className="flex items-center gap-2">
                  <h1 className="text-[#2D3441] text-[40px] font-[600]">01</h1>
                  <p className="text-[#71746c] text-[25px] ">Email</p>
                </div>
                <p className="text-[#2D3441] text-[20px]">
                  farzanaridita97@gmail.com
                </p>
              </div>
              <div className="border-b-2 p-5 border-[#2D3441]">
                <div className="flex items-center gap-2">
                  <h1 className="text-[#2D3441] text-[40px] font-[600]">02</h1>
                  <p className="text-[#71746c] text-[25px]">Phone</p>
                </div>
                <p className="text-[#2D3441] text-[20px]">+88 01911344474</p>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <h1 className="text-[#2D3441] text-[40px] font-[600]">03</h1>
                  <p className="text-[#71746c] text-[25px]">Location</p>
                </div>
                <p className="text-[#2D3441] text-[20px]">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1/2">
          <form
            onSubmit={handleSubmit}
            className=" mx-auto space-y-4 pt-6 pb-8 px-10 shadow-xl/30 "
          >
            <h1 className="text-center text-[#2D3441]  text-[35px] font-bold py-5">
              Send me a message
            </h1>
            <div>
              <label className="block font-[600] mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="You Name"
                required
              />
            </div>

            <div>
              <label className="block font-[600] mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="your Email"
                required
              />
            </div>

            <div>
              <label className="block font-[600] mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block font-[600] mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Your message"
                rows="5"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#2C3640] text-white px-6 py-2 text-[18px] mt-0.5 "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
