"use client";

import MenuNav from "@/components/MenuNav";
import { dishes } from "@/dishes/dishes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function StarterPage() {
  const starterDishes = dishes.filter((starterdish) => {
    if (starterdish.category === "starter") return starterdish;
  });
  // console.log("starterDishes", starterDishes);

  const [currentIndex, setCurrentIndex] = useState(0);

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

      <div className=" flex justify-center items-center flex-col p-4">
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
          <ChevronLeft
            onClick={() => changePage("prev")}
            className="absolute top-1/2 -left-1/4"
          />

          <div className="border-2 border-[#69311f] p-4">
            <Image
              src={starterDishes[currentIndex].src}
              alt="hero img"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <ChevronRight
            onClick={() => changePage("next")}
            className="absolute top-1/2 -right-1/4"
          />
        </div>
      </div>
    </div>
  );
}
