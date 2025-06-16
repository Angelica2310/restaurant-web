"use client";

import DelayedImage from "@/components/DelayedImage";
import MenuNav from "@/components/MenuNav";
import { dishes } from "@/dishes/dishes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import { RingLoader } from "react-spinners";

export default function StarterPage() {
  const starterDishes = dishes.filter((starterdish) => {
    if (starterdish.category === "main") return starterdish;
  });
  // console.log("starterDishes", starterDishes);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [rightBtn, setRightBtn] = useState(true);

  function handleDirection() {}

  function handleClickImage(index) {
    setCurrentIndex(index);
  }

  const changePage = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === starterDishes.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? starterDishes.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <div className="relative">
      <MenuNav />
      <div className=" flex justify-center items-center flex-col p-4 w-full bg-center bg-no-repeat bg-cover ">
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
        <div className="flex cursor-pointer relative">
          {currentIndex > 0 && (
            <ChevronLeft
              onClick={() => changePage("prev")}
              className="fixed top-1/2 -translate-y-1/2 left-[2vw] md:left-[15vw] w-8 h-8 md:w-10 md:h-10 border rounded-2xl border-[--darktext]"
            />
          )}

          <div className=" shadow-2xl animate-fadeInDown pt-4 w-[80vw] md:w-[60vw] lg:w-[40vw]">
            <Suspense>
              <DelayedImage
                src={starterDishes[currentIndex].src}
                alt="starter menu"
                width={0}
                height={0}
                sizes="100%"
                className="transition-opacity duration-500 opacity-0"
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.add("opacity-100");
                }}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Suspense>
          </div>
          {currentIndex < starterDishes.length - 1 && (
            <ChevronRight
              onClick={() => changePage("next")}
              className="fixed top-1/2 -translate-y-1/2 right-[2vw] md:right-[15vw] w-8 h-8 md:w-10 md:h-10 border rounded-2xl border-[--darktext]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
