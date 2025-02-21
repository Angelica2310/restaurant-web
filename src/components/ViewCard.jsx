"use client";
import Link from "next/link";
import OpeningHours from "./OpeningHours";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Animation from "./Animation";
import { Package, Award, ShoppingBag } from "lucide-react";
import FadeInText from "./FadeInText";

Animation;

export default function ViewCard() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 2], [0, 45]);
  return (
    // <div
    //   className="w-full h-[50vh] md:h-[70vh] bg-center bg-no-repeat justify-center flex bg-cover items-center relative"
    //   style={{
    //     backgroundImage:
    //       "linear-gradient(rgba(0,0,0,0.527), rgba(0,0,0,0.5)), url(/background.jpg)",
    //     backgroundPosition: "center",
    //   }}
    // >
    <div
      className="w-full bg-left-top bg-no-repeat justify-center flex bg-cover items-center relative"
      style={{
        backgroundImage: "url(/lime.jpg)",
      }}
    >
      <div className="flex flex-col justify-center items-center ">
        <div className="grid grid-cols-[1fr_2fr] items-center justify-center">
          <div>
            <Image
              src="/buntom.png"
              alt="bun tom"
              width={0}
              height={0}
              sizes="100%"
              className="w-[50vw] md:w-[50vw] lg:w-[40vw] xl:w-[40vw] h-auto animate-[spin_40s_ease-in-out_infinite]"
            />
          </div>
          <div>
            <p className="text-4xl pt-10 lg:text-6xl xl:text-8xl xl:pb-6 lg:px-8 px-4 py-4 pb-2 hover:animate-tada font-serif">
              Wonderful dining experience & food.
            </p>
            <div className="text-justify md:text-xl lg:text-2xl md:pl-3 bg-white/70 backdrop-sepia-50 md:py-2 md:px-7 lg:px-10 px-4">
              <FadeInText />
            </div>
            <motion.div style={{ rotate }}>
              <Image
                src="/bunthitnuong.png"
                alt="fish dish"
                width={0}
                height={0}
                sizes="100%"
                className="hidden lg:block lg:w-[20vw] xl:w-[20vw] h-auto absolute right-1 -bottom-13 lg:-bottom-32 xl:-bottom-15"
              />
            </motion.div>
            <div className="flex py-4 md:py-8 gap-3 justify-center items-center">
              <Link
                className="card text-sm md:text-base lg:text-lg"
                href="/menu"
              >
                <p>Our Menu</p>
              </Link>
              <OpeningHours />
            </div>
          </div>
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-4 py-5 md:flex-row md:py-8 lg:gap-24 lg:py-16">
          <div className="grid grid-cols-[0.5fr_3fr] grid-rows-2 items-center">
            <Package className="border rounded-full bg-white/70 backdrop-sepia-50 w-[60px] h-[60px] row-span-2 p-2 mr-3" />
            <p className="font-bold md:text-xl leading-tight uppercase">
              Fast Delivery
            </p>
            <p className="text-sm md:text-base">Within 30 minutes</p>
          </div>
          <div className="grid grid-cols-[0.5fr_3fr] grid-rows-2 items-center">
            <Award className="border rounded-full bg-white/70 backdrop-sepia-50 w-[60px] h-[60px] row-span-2 p-2 mr-3" />
            <p className="font-bold md:text-xl leading-tight uppercase">
              Absolute Dining
            </p>
            <p className="text-sm md:text-base">
              Authentic Vietnamese Restaurant
            </p>
          </div>
          <div className="grid grid-cols-[0.5fr_3fr] grid-rows-2 items-center">
            <ShoppingBag className="border rounded-full bg-white/70 backdrop-sepia-50 w-[60px] h-[60px] row-span-2 p-2 mr-3" />
            <p className="font-bold md:text-xl leading-tight uppercase">
              Pickup Delivery
            </p>
            <p className="text-sm md:text-base">Grab your food order</p>
          </div>
        </div>
      </div>
    </div>
  );
}
