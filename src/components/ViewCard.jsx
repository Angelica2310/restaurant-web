"use client";

import Link from "next/link";
import OpeningHours from "./OpeningHours";

export default function ViewCard() {
  return (
    <div
      className="w-full h-[50vh] md:h-[70vh] bg-center bg-no-repeat justify-center flex text-xl md:text-2xl lg:text-4xl bg-cover items-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.527), rgba(0,0,0,0.5)), url(/background.jpg)",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <Link className="card" href="/menu">
          <p>Our Menu</p>
        </Link>
        <OpeningHours />
      </div>
    </div>
  );
}
