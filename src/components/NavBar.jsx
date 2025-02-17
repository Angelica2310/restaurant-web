import React from "react";
import ActiveLink from "./ActiveLink";
import Image from "next/image";
import Link from "next/link";
import MenuDropDown from "./MenuDropDown";

export default function NavBar() {
  return (
    <div>
      {/* MOBILE */}
      <div className="md:hidden flex flex-row">
        {/* LEFT */}
        <div className="w-1/2 flex">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={150} height={150} />
          </Link>
        </div>
        {/* RIGHT */}
        <div className="w-1/2 flex justify-end mr-2">
          <MenuDropDown />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex ">
        {/* LEFT */}
        <div className="w-1/3 flex">
          <Link href="/">
            {" "}
            <Image src="/logo.png" alt="logo" width={250} height={250} />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="w-2/3 flex cursor-pointer items-center justify-end gap-4 mr-4 text-2xl">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">About us</ActiveLink>
          <ActiveLink href="/contact">Contact us</ActiveLink>
          <ActiveLink href="/menu">Our Menu</ActiveLink>
        </div>
      </div>
    </div>
  );
}
