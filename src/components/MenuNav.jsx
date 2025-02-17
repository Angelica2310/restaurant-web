import Link from "next/link";
import React from "react";
import ActiveLink from "./ActiveLink";

export default function MenuNav() {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-5 text-xs md:text-xl p-3">
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
