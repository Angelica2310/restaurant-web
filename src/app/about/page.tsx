import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col lg:flex-row lg:p-20 p-6 gap-5 text-justify justify-center items-center pb-20">
      <Image
        src="/pho-ga.jpg"
        alt=""
        width={800}
        height={800}
        sizes="100%"
        className=" w-full max-w-[600px] h-auto mx-auto"
      />
      <div>
        <p className="text-xl lg:text-2xl xl:text-4xl font-black lg:max-w-[600px] xl:max-w-[800px]">
          Welcome to Pho Lan, Your Gateway to Authentic Vietnamese Cuisine!
        </p>
        <p className="lg:max-w-[800px] xl:max-w-[1020px] 2xl:max-w-[1050px]">
          Step into a world of vibrant flavours, fresh ingredients, and
          time-honoured recipes at{" "}
          <span className="font-[1000] italic">Pho Lan</span>. Vietnamese
          cuisine is a perfect balance of sweet, sour, salty, and umami, brought
          to life through fragrant herbs, aromatic broths, and delicate spices.
          From the comforting warmth of{" "}
          <span className="font-[1000] italic">pho</span> to the crisp freshness
          of <span className="font-[1000] italic">spring rolls</span>, every
          dish tells a story of tradition and culture. Whether you’re craving a
          hearty bowl of <span className="font-[1000] italic">bun cha</span>, a
          sizzling plate of <span className="font-[1000] italic">banh xeo</span>
          , or a bold sip of authentic{" "}
          <span className="font-[1000] italic">Vietnamese coffee</span>, our
          menu brings the heart of Vietnam to your table. Come and experience
          the rich culinary heritage of Vietnam—one bite at a time!
        </p>
      </div>
    </div>
  );
}
