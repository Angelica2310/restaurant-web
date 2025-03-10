"use client";

import MenuNav from "@/components/MenuNav";
import { dishes } from "@/dishes/dishes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

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
    <div>
      <MenuNav />

      <div
        className=" flex justify-center items-center flex-col p-4 w-full bg-center bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: "url(/menu-background02.png)",
        }}
      >
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
              className="absolute top-1/2 -left-10 md:-left-20 md:w-10 md:h-10 border rounded-2xl border-[--darktext]"
            />
          )}

          <div className=" shadow-2xl animate-fadeInDown">
            <Image
              src={starterDishes[currentIndex].src}
              alt="starter menu"
              width={0}
              height={0}
              sizes="60vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          {currentIndex < starterDishes.length - 1 && (
            <ChevronRight
              onClick={() => changePage("next")}
              className="absolute top-1/2 -right-10 md:-right-20 md:w-10 md:h-10 border rounded-2xl border-[--darktext]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
