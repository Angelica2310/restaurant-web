import Link from "next/link";
import React, { useState, useEffect } from "react";
import ActiveLink from "./ActiveLink";

export default function MenuNav() {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="flex justify-center items-center gap-2 md:gap-5 text-xs md:text-xl sticky z-10 top-20 py-2 transition-all duration-300 bg-transparent">
      <ActiveLink href="/menu/starter" variant="menuNav">
        Appertizers
      </ActiveLink>
      <ActiveLink href="/menu/main" variant="menuNav">
        Main Course
      </ActiveLink>
      <ActiveLink href="/menu/veggie" variant="menuNav">
        Vegeterian & Specialities
      </ActiveLink>
      <ActiveLink href="/menu/drink" variant="menuNav">
        Beverages
      </ActiveLink>
    </div>
  );
}
