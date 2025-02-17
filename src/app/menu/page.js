import Link from "next/link";
import React from "react";

export default function MenuPage() {
  return (
    <div className="text-xl md:text-2xl flex flex-col md:flex-row gap-6 justify-center items-center p-6">
      <Link
        href="/menu/starter"
        className="menu-category"
        style={{
          backgroundImage: "url(/starter-dish.jpg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <p>Appertizers</p>
      </Link>

      <Link
        href="/menu/main"
        className="menu-category"
        style={{
          backgroundImage: "url(/main-dish.jpg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 1,
        }}
      >
        <p>Main Course</p>
      </Link>
      <Link
        href="/menu/vegetarian"
        className="menu-category"
        style={{
          backgroundImage: "url(/veggie-dish.jpg)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 1,
        }}
      >
        <p>Vegeterian & Specialities</p>
      </Link>
    </div>
  );
}
