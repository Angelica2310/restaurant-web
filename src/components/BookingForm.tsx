"use client";
import React, { useRef, useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

type BookingFormProps = {
  setFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function formatDDMMYYYYFromISO(iso: string) {
  const [yyyy, mm, dd] = iso.split("-");
  return `${dd}-${mm}-${yyyy}`;
}

export default function BookingForm({ setFormOpen }) {
  const form = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState("");

  const CLOSED_START_ISO = "2026-02-15";
  const CLOSED_END_ISO = "2026-03-13";

  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(form.current!);
    console.log("tel =", fd.get("tel"));

    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    // hard block submit
    if (!date) {
      setDateError("Please choose a date.");
      return;
    }

    const inClosedRange = date >= CLOSED_START_ISO && date <= CLOSED_END_ISO;

    if (inClosedRange) {
      setDateError(
        `Sorry, we will close from ${CLOSED_START_ISO} to ${CLOSED_END_ISO}.`
      );
      return;
    }

    emailjs
      .sendForm("service_fzq0n18", "template_iq6x4n9", form.current, {
        publicKey: "viFgEQwSnD7Ao-QuZ",
      })
      .then((res) => {
        console.log("restaurant email success:", res);
        console.log("sending to customer...");
        // 1️⃣ send confirmation to customer
        return emailjs.sendForm(
          "service_fzq0n18",
          "template_1xmy8mh",
          form.current!,
          {
            publicKey: "viFgEQwSnD7Ao-QuZ",
          }
        );
      })
      .then((res) => {
        console.log("customer email success:", res);
        // 2️⃣ both emails sent successfully
        setMessage("Your table has been reserved!");
        form.current?.reset();

        setTimeout(() => {
          successRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);

        setTimeout(() => {
          setMessage("");
        }, 5000);
      })
      .catch((error) => {
        console.log("FAILED full error:", error);
        console.log("FAILED text:", error?.text);
        console.log("FAILED status:", error?.status);
        setMessage("Something went wrong. Please try again.");
      });
  };

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value; // YYYY-MM-DD
    setDate(value);

    if (!value) {
      setDateError("");
      return;
    }

    const inClosedRange = value >= CLOSED_START_ISO && value <= CLOSED_END_ISO;

    if (inClosedRange) {
      setDateError(
        `Sorry, we will close from ${formatDDMMYYYYFromISO(
          CLOSED_START_ISO
        )} to ${formatDDMMYYYYFromISO(CLOSED_END_ISO)}.`
      );
    } else {
      setDateError("");
    }
  }

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
              Full Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              required
              placeholder=""
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[--darktext] focus:shadow-md"
            />
          </div>

          <div className="mb-2">
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
              placeholder=""
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[--darktext] focus:shadow-md"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-base font-medium text-[--darktext]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6"
            />
          </div>

          <div className="mb-2">
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
              placeholder=""
              min="0"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[--darktext] focus:shadow-md"
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-2">
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
                  value={date}
                  onChange={handleDateChange}
                  placeholder="dd/mm/yyyy"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[--darktext] focus:shadow-md"
                />
                {dateError && (
                  <p className="mt-1 text-sm text-red-600">{dateError}</p>
                )}
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-2">
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
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl">
            <div className="text-center text-xl font-semibold text-green-700 bg-green-100 border border-green-300 p-8 rounded-2xl shadow-lg">
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
