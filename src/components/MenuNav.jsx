import Link from "next/link";
import React from "react";
import ActiveLink from "./ActiveLink";

export default function MenuNav() {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-5 text-xs md:text-xl sticky top-20 pb-2 z-50 transition-all duration-300 bg-transparent lg:bg-[rgb(223,220,220,0.8)] lg:shadow-lg">
      <ActiveLink href="/menu/starter" variant="menuNav">
        Appertizers
      </ActiveLink>
      <ActiveLink href="/menu/main" variant="menuNav">
        Main Course
      </ActiveLink>
      <ActiveLink href="/menu/vegetarian" variant="menuNav">
        Vegeterian & Specialities
      </ActiveLink>
      <ActiveLink href="/menu/drink" variant="menuNav">
        Beverages
      </ActiveLink>
    </div>
  );
}
