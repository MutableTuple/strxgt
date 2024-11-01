"use client";

import React, { useRef, useEffect, useState } from "react";

export default function MonitorScreen() {
  const monitorRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Array of image URLs to switch between
  const images = [
    "https://raw.githubusercontent.com/MutableTuple/fm_images/refs/heads/main/cheetos2.png",
    "https://raw.githubusercontent.com/MutableTuple/fm_images/refs/heads/main/asas.png",
    "https://raw.githubusercontent.com/MutableTuple/fm_images/refs/heads/main/cheetos2%20(1).png",
    "https://raw.githubusercontent.com/MutableTuple/fm_images/refs/heads/main/cicada.png",
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out transition
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Switch to the next image
        setFade(false); // Start fade-in transition
      }, 500); // Half a second for the fade-out transition
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleMouseMove = (e) => {
    const monitor = monitorRef.current;
    const rect = monitor.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const rotateX = (y / 100 - 0.5) * -15;
    const rotateY = (x / 100 - 0.5) * 15;

    monitor.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const monitor = monitorRef.current;
    monitor.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={monitorRef}
      className="relative w-full max-w-lg h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden transition-transform duration-300 ease-out cursor-pointer sm:translate-x-4 md:translate-x-8 "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 flex items-center justify-center border bg-[#161B30] rounded-xl overflow-hidden p-4 sm:p-6 md:p-9">
        <img
          src={images[currentIndex]}
          alt="Monitor Content"
          className={`h-full w-full object-cover scale-105 sm:scale-110 md:scale-110 rounded-xl transition-opacity duration-500 ${
            fade ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"
          }`}
          style={{
            transition: "transform 0.5s ease", // Apply a smooth transition for movement
          }}
        />
      </div>
    </div>
  );
}
