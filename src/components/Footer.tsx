import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const paymentImages = [
    { src: "/applepay.png", alt: "Apple Pay" },
    { src: "/mastercard.png", alt: "MasterCard" },
    { src: "/visa.png", alt: "Visa" },
  ];

  return (
    <div>
      <div className="py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 text-sm bg-[#af8e4b] text-[#dfdcdc]">
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between gap-24">
          {/* LEFT */}
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8">
            <Link href="/">
              <div className="-ml-3 -mb-10">
                <Image src="/logo02.png" width={150} height={100} alt="logo" />
              </div>
            </Link>
            <p>931 Spring Bank W, Hull HU5 5BE</p>
            <span className="font-semibold">pholan281022@gmail.com</span>
            <span className="font-semibold">+44 7577 686868</span>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/people/Ph%E1%BB%9F-Lan-Hull/100087597489339/"
                target="_blank"
              >
                <Image
                  src="/facebook.png"
                  alt="facebook logo"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.instagram.com/pholan281022/?hl=en"
                target="_blank"
              >
                <Image
                  src="/instagram.png"
                  alt="instagram logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
          {/* CENTER */}
          <div className="hidden lg:flex justify-between w-1/3">
            <div className="flex flex-col ">
              <h1 className="text-lg text-[#69311f] font-semi mb-8 mt-10">
                BROWSE
              </h1>
              <div className="flex flex-col gap-6">
                <Link href="/">Home Page</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/menu">Our Menu</Link>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-6 md:mt-10">
            <h1 className="text-lg text-[#69311f] font-semi">SUBSCRIBE</h1>
            <p>Sign up to our newsletters</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Email address"
                className="p-4 w-3/4 outline-none"
              />
              <button className="w-1/4 bg-[#69311f] text-white hover:bg-[#765613]">
                JOIN
              </button>
            </div>
            <span className="font-semibold">Accepted Payments</span>
            <div className="flex justify-between">
              {paymentImages.map(
                (image, index) =>
                  image.src && (
                    <Image
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      width={40}
                      height={20}
                    />
                  )
              )}
            </div>
          </div>
          {/* BOTTOM */}
        </div>
        <div className="mt-10 pt-6 border-t border-[#dfdcdc]/30 text-center text-xs text-[#dfdcdc]">
          © {new Date().getFullYear()} Phở Lan Hull. All rights reserved. •
          Design & development by{" "}
          <a
            href="https://www.angelicagiang.com/"
            target="_blank"
            rel="noopener"
            className="text-[#765613] hover:text-[#69311f] transition"
          >
            Angelica
          </a>
        </div>
      </div>
    </div>
  );
}
