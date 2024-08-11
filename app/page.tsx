"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Models from "@/components/Models";
import Footer from "@/components/Footer";

const BounceLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src="icon.svg" alt="Loading icon" className=" w-[300px] h-[300px]  md:w-[500px] md:h-[500px] " />
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
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 5000); // 2 seconds

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ userSelect: 'none' }} className="bg-white min-h-screen">
      {loading ? <BounceLoader /> : (
        <>
          <Hero />
          <Showcase />
          <Models/>
          <Footer/>

        </>
      )}
    </main>
  );
}
