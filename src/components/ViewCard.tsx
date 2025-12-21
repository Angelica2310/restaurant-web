"use client";

import Link from "next/link";
import Image from "next/image";
import OpeningHours from "./OpeningHours";
import { motion, useScroll, useTransform } from "framer-motion";
import { Package, Award, ShoppingBag } from "lucide-react";

export default function ViewCard() {
  const { scrollYProgress } = useScroll();
  // small tilt feels nicer than 75deg
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-left-top"
      style={{ backgroundImage: "url(/lime.jpg)" }}
    >
      {/* subtle overlay for readability */}
      <div className="absolute inset-0 bg-white/40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* LEFT: spinning dish */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[70vw] max-w-[420px] md:w-[38vw] md:max-w-none lg:w-[32vw]">
              <Image
                src="/buntom.png"
                alt="Bún tôm"
                width={900}
                height={900}
                className="h-auto w-full animate-[spin_40s_ease-in-out_infinite] drop-shadow-md"
                priority={false}
              />
            </div>
          </div>

          {/* RIGHT: text + CTA */}
          <div className="relative">
            {/* floating decorative dish */}
            {/* <motion.div
              style={{ rotate }}
              className="pointer-events-none absolute -right-6 -bottom-24 hidden lg:block"
            >
              <div className="relative w-[220px] xl:w-[260px]">
                <Image
                  src="/bunthitnuong.png"
                  alt=""
                  width={700}
                  height={700}
                  className="h-auto w-full drop-shadow-lg"
                  aria-hidden
                />
              </div>
            </motion.div> */}

            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl leading-tight md:pt-2 md:text-5xl lg:text-6xl xl:text-7xl">
                Wonderful dining experience & food.
              </h2>

              <p className="mt-4 rounded-lg bg-white/70 px-4 py-3 text-justify text-base leading-relaxed backdrop-sepia-50 md:px-7 md:text-xl lg:px-10 lg:text-2xl">
                From the moment you step in, you'll be greeted with a cozy
                ambiance, friendly service, and the irresistible aroma of
                freshly prepared dishes. Whether you're here for a casual meal
                or a special occasion, we promise an unforgettable dining
                experience filled with vibrant flavors, fresh ingredients, and a
                touch of culinary artistry. Sit back, relax, and let us take you
                on a delicious journey that will keep you coming back for more!
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
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
        </div>

        {/* LIST */}
        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3 md:gap-8 lg:mt-16">
          <Feature
            icon={<Package className="h-7 w-7" />}
            title="Fast Delivery"
            desc="Within 30 minutes"
          />
          <Feature
            icon={<Award className="h-7 w-7" />}
            title="Absolute Dining"
            desc="Authentic Vietnamese Restaurant"
          />
          <Feature
            icon={<ShoppingBag className="h-7 w-7" />}
            title="Pickup Delivery"
            desc="Grab your food order"
          />
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="grid grid-cols-[64px_1fr] items-center gap-3">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border bg-white/70 p-2 backdrop-sepia-50">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold uppercase leading-tight md:text-lg">
          {title}
        </p>
        <p className="text-sm md:text-base">{desc}</p>
      </div>
    </div>
  );
}
