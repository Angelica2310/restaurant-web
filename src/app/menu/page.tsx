import Link from "next/link";
import React from "react";

export default function MenuPage() {
  return (
    <div>
      <div className="text-xl md:text-2xl flex flex-col md:flex-row gap-6 justify-center items-center p-10 pt-20 text-center">
        <Link
          href="/menu/starter"
          className="menu-category"
          style={{
            backgroundImage: "url(/starter-dish.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
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
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
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
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p>Vegeterian & Specialities</p>
        </Link>
        <Link
          href="/menu/drink"
          className="menu-category"
          style={{
            backgroundImage: "url(/drink.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p>Beverages</p>
        </Link>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl md:text-2xl lg:text-4xl pt-10">
          GOT A QUESTION?
        </h1>
        <Link
          href="/contact"
          className="text-lg md:text-xl lg:text-2xl bg-[#69311f] text-white rounded-md p-2 mt-5 mb-10 cursor-pointer"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
