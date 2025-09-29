"use client";
import Image from "next/image";
import React from "react";

export default function GoogleReview() {
  return (
    <div
      className="w-full bg-left-top bg-no-repeat justify-center flex bg-cover items-center relative pt-8 bg-fixed"
      style={{
        backgroundImage: "url(/review-background.jpg)",
      }}
    >
      {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
      <script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></script>
      <div
        className="elfsight-app-6b7f1c4d-9ca8-4469-9d65-7232a5d1686b"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
