"use client";
import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

type BookingFormProps = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BookingForm({ setFormOpen }) {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(form.current!);
    console.log("tel =", fd.get("tel"));

    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    emailjs
      .sendForm("service_53hb6lm", "template_iq6x4n9", form.current, {
        publicKey: "viFgEQwSnD7Ao-QuZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Your table has been reserved!");
          form.current?.reset();

          setTimeout(() => {
            setMessage("");
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Something went wrong. Please try to do it again :(");
        }
      );
  };
  return (
    <div className="flex items-center justify-center p-12 relative bg-[--background] w-[90vw] lg:w-[60vw] mt-20">
      <div
        className="absolute top-2 right-1 cursor-pointer"
        onClick={() => setFormOpen(false)}
      >
        <X />
      </div>
      <div className="mx-auto w-full max-w-[550px]">
        <form
          action="https://formbold.com/s/FORM_ID"
          method="POST"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="mb-2">
            <label
              htmlFor="fName"
              className="block text-base font-medium text-[--darktext]"
            >
              John Doe
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              required
              placeholder="Full Name"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[--darktext] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="tel"
              className="block text-base font-medium text-[--darktext]"
            >
              Phone Number{" "}
            </label>
            <input
              type="number"
              name="tel"
              id="tel"
              required
              placeholder="07777 123 456"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[--darktext] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="guest"
              className="block text-base font-medium text-[--darktext]"
            >
              How many people in total?
            </label>
            <input
              type="number"
              name="guest"
              required
              id="guest"
              placeholder="5"
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[--darktext] focus:shadow-md"
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="block text-base font-medium text-[--darktext]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  placeholder="dd/mm/yyyy"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[--darktext] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="block text-base font-medium text-[--darktext]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  required
                  placeholder="--:--"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[--darktext] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-base font-medium text-[--darktext]">
              Note
            </label>
            <div className="flex items-center space-x-6">
              <textarea
                name="note"
                placeholder="Anything if you wish to inform us!"
                className="block w-full h-32 px-6 py-3 mt-2 text-base text-gray-700 placeholder-gray-400 bg-white border-2 border-gray-200 rounded-lg    focus:border-[--darktext] focus:outline-none"
              ></textarea>
            </div>
          </div>

          <div>
            <button className="hover:shadow-form rounded-md bg-[--darktext] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
        {message && (
          <div className="mt-6 text-center text-lg font-semibold text-green-700 bg-green-100 border border-green-300 p-6 rounded-xl shadow-md animate-pulse">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
