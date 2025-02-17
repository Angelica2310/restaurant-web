"use client";

import MenuNav from "@/components/MenuNav";
import { dishes } from "@/dishes/dishes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function StarterPage() {
  const starterDishes = dishes.filter((starterdish) => {
    if (starterdish.category === "drink") return starterdish;
  });
  // console.log("starterDishes", starterDishes);

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickImage(index) {
    setCurrentIndex(index);
  }

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
          <div className=" p-4 shadow-2xl">
            <Image
              src={starterDishes[currentIndex].src}
              alt="starter menu"
              width={0}
              height={0}
              sizes="70vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
