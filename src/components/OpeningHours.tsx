"use client";
import React, { useState } from "react";
import HoursTable from "./HoursTable";

export default function OpeningHours() {
  const [hoursDisplay, setHoursDisplay] = useState(false);
  return (
    <div>
      <button className="card" onClick={() => setHoursDisplay(true)}>
        <p className="text-xs md:text-base lg:text-lg">Opening Hours</p>
      </button>
      {hoursDisplay && (
        <div
          className="inset-0 bg-black bg-opacity-50 flex justify-center items-center fixed"
          onClick={() => setHoursDisplay(false)}
        >
          <div
            className="p-4 shadow-lg rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <HoursTable />
          </div>
        </div>
      )}
    </div>
  );
}
