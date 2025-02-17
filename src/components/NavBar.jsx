import React from "react";
import ActiveLink from "./ActiveLink";
import Image from "next/image";
import Link from "next/link";
import MenuDropDown from "./MenuDropDown";
import BookingButton from "./BookingButton";

export default function NavBar() {
  return (
    <div className="top-0 sticky bg-[#dfdcdc] z-10 pb-2">
      {/* MOBILE */}
      <div className="md:hidden flex flex-row ">
        {/* LEFT */}
        <div className="w-1/3 flex">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={150} height={150} />
          </Link>
        </div>
        <div className=" w-1/3 text-xs flex justify-center">
          <BookingButton />
        </div>
        {/* RIGHT */}
        <div className="w-1/3 flex justify-end mr-2">
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
        <div className="w-2/3 flex cursor-pointer items-center justify-end gap-4 mr-4 text-xs md:text-xl lg:text-2xl">
          <ActiveLink href="/" variant="homeNav">
            Home
          </ActiveLink>
          <ActiveLink href="/about" variant="homeNav">
            About us
          </ActiveLink>
          <ActiveLink href="/contact" variant="homeNav">
            Contact us
          </ActiveLink>
          <ActiveLink href="/menu" variant="homeNav">
            Our Menu
          </ActiveLink>
          <BookingButton />
        </div>
      </div>
    </div>
  );
}
