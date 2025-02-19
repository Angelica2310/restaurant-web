"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");

  //   console.log("form", form.current);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    emailjs
      .sendForm("service_53hb6lm", "template_oliqvlp", form.current, {
        publicKey: "viFgEQwSnD7Ao-QuZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage(
            "Your message has been received. We will get back to you shortly! ✅ "
          );
          e.target.reset();

          setTimeout(() => {
            setMessage("");
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Oops! Something went wrong. Please try again. ❌");
        }
      );
  };
  return (
    <div className="p-4 py-6 rounded-lg bg-gray-50  md:p-8">
      <form ref={form} onSubmit={sendEmail}>
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-gray-600 ">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-200 rounded-lg    focus:border-[--darktext] focus:outline-none "
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600 ">
            Email address
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="johndoe@example.com"
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-200 rounded-lg    focus:border-[--darktext] focus:outline-none "
            required
          />
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2 text-sm text-gray-600 ">Message</label>
          <textarea
            className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-200 rounded-lg md:h-56    focus:border-[--darktext] focus:outline-none"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Send"
          className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[--darktext] rounded-lg hover:bg-[--medtext] focus:outline-none cursor-pointer"
        />
      </form>
      {message && (
        <div className="mt-4 text-center text-sm font-medium text-green-600 bg-green-100 p-3 rounded-lg">
          {message}
        </div>
      )}
    </div>
  );
}
