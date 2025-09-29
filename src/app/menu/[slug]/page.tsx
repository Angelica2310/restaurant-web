"use client";

import { dishes, findByCategory } from "@/libs/dishes";
import DelayedImage from "@/components/DelayedImage";
import MenuNav from "@/components/MenuNav";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { Suspense, SyntheticEvent, useState } from "react";

export default function CategoryPage({
  //! "params" used to be plain objects, but with React 19 - Next treats them as async values
  //! "params" is now a Promise
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params); // <-- unwrap the Promise
  const items = findByCategory(slug, dishes);

  console.log("items", items);

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickImage(index: number) {
    setCurrentIndex(index);
  }

  const changePage = (direction: string) => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return prevIndex === items.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? items.length - 1 : prevIndex - 1;
      }
    });
  };

  const bgImage =
    slug === "drink"
      ? "url(/drink-background.jpg)"
      : "url(/menu-background02.png)";

  return (
    <div className="relative">
      <MenuNav />
      <div className=" flex justify-center items-center flex-col p-4 w-full">
        <div
          className="absolute inset-0 opacity-25 z-0 bg-top bg-no-repeat bg-cover bg-fixed"
          style={{
            backgroundImage: bgImage,
          }}
        ></div>
        <div className="hidden">
          {items.map((dish, index) => (
            <div key={dish.id}>
              <Image
                src={dish.src}
                alt={`${slug} ${dish.id}`}
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
                src={items[currentIndex]?.src}
                alt={`${items[currentIndex].id}`}
                width={800}
                height={800}
                sizes="100%"
                className="transition-opacity duration-500 opacity-0"
                onLoad={(e: SyntheticEvent<HTMLImageElement>) => {
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
          {currentIndex < items.length - 1 && (
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
