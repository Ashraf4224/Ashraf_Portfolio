import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../images/contact.png";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nfc0r91", "template_j681kus", form.current, {
        publicKey: "T6Yiyf3VEQnuYlU8B",
      })
      .then(
        () => {
          alert("Successfully Send Your Query");
          form.current.reset();
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className="w-full h-[800px] pt-6 pd-6 border-b-[1px] border-gray-300 flex flex-col font-serif"
    >
      <h1 className="text-center pb-8 pt-6 font-bold text-3xl">
        Contact With Us
      </h1>
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="w-full md:w-1/2 h-auto ">
          <div className="w-[94%] h-auto overflow-hidden ">
            <img src={contact} alt="contact" className="hover:skew-x-6" />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-auto flex  mx-auto  ">
          <div className="w-[80%] h-auto flex flex-col mx-auto border">
            <h2 className="text-center pt-4 font-bold text-2xl">
              Fill The Form
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-3 mx-auto w-[94%] h-full p-2 text-black"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="text-black pl-2 rounded-lg  py-1 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="text-black pl-2 rounded-lg  py-1 outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                maxLength={1200}
                minLength={10}
                className="text-black pl-2 rounded-lg  py-1 outline-none"
                required
              />
              <button
                type="submit"
                value="Send"
                className="bg-gradient-to-r from-pink-700 to bg-purple-800 py-1 rounded-lg text-xl font-bold hover:text-white"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
