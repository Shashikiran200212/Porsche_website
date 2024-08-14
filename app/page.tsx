"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
import Sep from "@/components/sep";

const BounceLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src="icon.svg" alt="Loading icon" className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]" />
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 animate-bounce rounded-full bg-black [animation-delay:-0.13s]"></div>
          <div className="h-5 w-5 animate-bounce rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = localStorage.getItem("hasLoaded");

    if (hasLoaded) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasLoaded", "true");
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main style={{ userSelect: "none" }} className="bg-white min-h-screen">
      {loading ? (
        <BounceLoader />
      ) : (
        <>
          <Hero />
          <Showcase />
          <Sep/>
          <Hero2 />
          <Footer />
        </>
      )}
    </main>
  );
}
