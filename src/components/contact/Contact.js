import React, { useState } from "react";
import Title from "../layout/Title";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(formData.email)
      .toLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!formData.username) return setErrMsg("Name is required!");
    if (!formData.phoneNumber) return setErrMsg("Phone number is required!");
    if (!formData.email) return setErrMsg("Email is required!");
    if (!emailValidation()) return setErrMsg("Enter valid email!");
    if (!formData.subject) return setErrMsg("Subject is required!");
    if (!formData.message) return setErrMsg("Message is required!");

    setErrMsg("");
    setSuccessMsg("Sending...");

    emailjs
      .send(
        "service_xq40bi7",     // 🔴 Replace with your Service ID
        "template_4kfh9od",    // 🔴 Replace with your Template ID
        {
          name: formData.username,
          email: formData.email,
          phone: formData.phoneNumber,
          title: formData.subject,
          message: formData.message,
        },
        "aKnfW82CD6VHh3Ugd"   // 🔴 Replace with your Public Key
      )
      .then(
        () => {
          setSuccessMsg("Message sent successfully!");
          setFormData({
            username: "",
            phoneNumber: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          setErrMsg("Failed to send message. Check console.");
          setSuccessMsg("");
        }
      );
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>

      <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
        <ContactLeft />

        <div className="w-full lgl:w-[60%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-shadowOne">
          <form onSubmit={handleSend} className="flex flex-col gap-6">

            {errMsg && (
              <p className="text-red-500 text-center">{errMsg}</p>
            )}
            {successMsg && (
              <p className="text-green-500 text-center">{successMsg}</p>
            )}

            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={formData.username}
              onChange={handleChange}
              className="contactInput"
            />

            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="contactInput"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="contactInput"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="contactInput"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="contactTextArea"
            />

            <button
              type="submit"
              className="w-full h-12 bg-[#141518] rounded-lg text-gray-400 hover:text-white duration-300"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
