"use client";
import React, { useState } from "react";
import HoursTable from "./HoursTable";

export default function OpeningHours() {
  const [hoursDisplay, setHoursDisplay] = useState(false);
  return (
    <div>
      <button className="card" onClick={() => setHoursDisplay(true)}>
        <p>Our Opening Hours</p>
      </button>
      {hoursDisplay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
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
