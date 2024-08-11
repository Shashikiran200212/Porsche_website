  "use client";
  import Image from "next/image";
  import React from "react";
  import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

  export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
      <Card key={card.src} card={card} index={index} />
    ));

    return (
      <div className="w-full h-full py-10 md:py-20 px-4 md:px-6 lg:px-8 bg-white text-black">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-6 text-center">
          Get to know your iSad.
        </h2>
        <Carousel items={cards} />
      </div>
    );
  }

  const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => (
          <div
            key={"dummy-content" + index}
            className="bg-white p-4 md:p-8 lg:p-12 rounded-3xl mb-4 border border-gray-200"
          >
            <p className="text-black text-sm md:text-base lg:text-lg font-sans max-w-full md:max-w-3xl mx-auto">
              <span className="font-bold text-black">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src=""
              alt="Macbook mockup from Aceternity UI"
              height={300}
              width={300}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        ))}
      </>
    );
  };

  const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "/c1.jpeg",
      content: <DummyContent />,
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "/c2.jpg",
      content: <DummyContent />,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "/c3.jpeg",
      content: <DummyContent />,
    },
    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "/c4.jpeg",
      content: <DummyContent />,
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: "/c5.jpeg",
      content: <DummyContent />,
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: "/c6.jpg",
      content: <DummyContent />,
    },
  ];
    