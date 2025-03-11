"use client";

import MenuNav from "@/components/MenuNav";
import { dishes } from "@/dishes/dishes";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import { RingLoader } from "react-spinners";

export default function StarterPage() {
  const starterDishes = dishes.filter((starterdish) => {
    if (starterdish.category === "veggie") return starterdish;
  });
  // console.log("starterDishes", starterDishes);

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickImage(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="relative">
      <MenuNav />

      <div className=" flex justify-center items-center flex-col p-4 w-full bg-center bg-no-repeat bg-cover">
        <div
          className="absolute inset-0 opacity-25 z-0 bg-center bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage: "url(/menu-background02.png)",
          }}
        ></div>
        <div className="hidden">
          {starterDishes.map((dish, index) => (
            <div key={dish.id}>
              <Image
                src={dish.src}
                alt="img"
                width={100}
                height={100}
                onClick={() => handleClickImage(index)}
              />
            </div>
          ))}
        </div>
        {/* DISPLAY IMAGE */}
        <Suspense fallback={<RingLoader />}>
          <div className="flex cursor-pointer">
            <div className=" shadow-2xl animate-fadeInDown pt-4 w-[80vw] md:w-[60vw] lg:w-[40vw]">
              <Image
                src={starterDishes[currentIndex].src}
                alt="starter menu"
                width={0}
                height={0}
                sizes="100%"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
