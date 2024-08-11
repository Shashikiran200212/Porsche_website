"use client"

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

const BounceLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src="icon.svg" alt="Loading icon" className="w-[500px] h-[500px]" />
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
          <div className="h-5 w-5 animate-bounce rounded-full bg-white [animation-delay:-0.13s]"></div>
          <div className="h-5 w-5 animate-bounce rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};



export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ userSelect: 'none' }} className="bg-white">
      {loading ? <BounceLoader /> : (
        <>
          <Hero />
          <Showcase />
        </>
      )}
    </main>
  );
}
