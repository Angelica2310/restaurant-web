import React from "react";
import Slider from "@/components/Slider";
import NavBar from "@/components/NavBar";
import Map from "@/components/Map";
import GoogleReview from "@/components/GoogleReview";
import ViewCard from "@/components/ViewCard";
// import Animation from "@/components/Animation";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Slider />
        {/* <marquee
          behavior="scroll"
          direction="left"
          className="absolute -bottom-7 md:-bottom-10 lg:-bottom-16 xl:-bottom-20 z-10 font-extrabold"
        >
          <Animation />
        </marquee> */}
      </div>
      <ViewCard />
      <GoogleReview />
      <Map />
    </div>
  );
}
