import React from "react";
import Slider from "@/components/Slider";
import NavBar from "@/components/NavBar";
import Map from "@/components/Map";
// import GoogleReview from "@/components/GoogleReview";
import GoogleReviewsStatic from "@/components/GoggleReviewStatic";
import ViewCard from "@/components/ViewCard";
import ClosureBanner from "@/components/ClosureBanner";

export default function Home() {
  return (
    <div>
      {/* <ClosureBanner /> */}
      <div className="relative">
        <Slider />
      </div>
      <ViewCard />
      {/* <GoogleReview /> */}
      <GoogleReviewsStatic />
      <Map />
    </div>
  );
}
