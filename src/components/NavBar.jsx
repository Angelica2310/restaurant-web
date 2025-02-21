import React from "react";
import ActiveLink from "./ActiveLink";
import Image from "next/image";
import Link from "next/link";
import MenuDropDown from "./MenuDropDown";
import BookingButton from "./BookingButton";

export default function NavBar() {
  return (
    <div className="top-0 sticky pb-2 z-50 bg-[--background] ">
      {/* MOBILE */}
      <div className="md:hidden flex flex-row ">
        {/* LEFT */}
        <div className="w-1/3 flex animate-tada">
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
        <div className="w-1/3 flex animate-tada">
          <Link href="/">
            {" "}
            <Image src="/logo.png" alt="logo" width={250} height={250} />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="w-2/3 flex cursor-pointer items-center justify-end gap-4 mr-4 text-base md:text-lg lg:text-xl lg:indent-7 transition-all duration-300 ease-in-out">
          <ActiveLink href="/" variant="homeNav">
            <div className="animate-zoomIn">Home</div>
          </ActiveLink>
          <ActiveLink href="/about" variant="homeNav">
            <div className="animate-zoomIn">About us</div>
          </ActiveLink>
          <ActiveLink href="/contact" variant="homeNav">
            <div className="animate-zoomIn">Contact us</div>
          </ActiveLink>
          <ActiveLink href="/menu" variant="homeNav">
            <div className="animate-zoomIn">Our Menu</div>
          </ActiveLink>
          <BookingButton />
        </div>
      </div>
    </div>
  );
}
