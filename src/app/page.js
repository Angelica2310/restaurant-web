import React from "react";
import Slider from "@/components/Slider";
import NavBar from "@/components/NavBar";
import ViewCard from "@/components/ViewCard";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div>
      <Slider />
      <ViewCard />
      <Map />
    </div>
  );
}
