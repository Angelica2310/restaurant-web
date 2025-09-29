"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BounceLoader } from "react-spinners";

export default function DelayedImage({ src, alt, ...props }) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowImage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return showImage ? (
    <Image src={src} alt={alt} {...props} />
  ) : (
    <div className="flex flex-col gap-3 items-center justify-center w-[80vw] md:w-[60vw] lg:w-[40vw] h-[60vh] md:h-[50vh] lg:h-[90vh]">
      <p>Hang on...</p>
      <BounceLoader
        size={30}
        speedMultiplier={1}
        color="rgba(105, 49, 31, 1)"
      />
    </div>
  );
}
