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
       
        <Carousel items={cards} />
      </div>
    );
  }


const contentArray = [
  {
    text: "The first rule of Porsche enthusiasts is that you drive your passion. From designing the perfect driving machine to pushing the limits of innovation, Porsche is dedicated to excellence. Embrace the legacy, explore the future, and experience the thrill that only Porsche can deliver.",
    imgSrc: "/engine1.png",
    imgAlt: "Porsche car image",
  },
  {
    text: "With every curve and every straight, the Porsche 911 delivers an experience like no other. It's more than just a car; it's a symbol of what it means to be driven. Push boundaries, explore possibilities, and feel the excitement of the 911.",
    imgSrc: "/911models/911gt3rs.png",
    imgAlt: "Porsche 911 image",
  },
  {
    text: "Every Porsche is a promise of performance and elegance. From the iconic design to the unmatched driving dynamics, the essence of Porsche can be felt in every detail. This is more than a car—it's a lifestyle.",
    imgSrc: "/back.png",
    imgAlt: "Porsche lifestyle image",
  },
];

const DummyContent = () => {
  return (
    <>
      {contentArray.map((content, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-white p-4 md:p-8 lg:p-12 rounded-3xl mb-4 border border-gray-200"
        >
          <p className="text-black text-sm md:text-base lg:text-lg font-sans max-w-full md:max-w-3xl mx-auto">
            <span className="font-bold text-black">{content.text}</span>
          </p>
          <Image
            src={content.imgSrc}
            alt={content.imgAlt}
            height={300}
            width={300}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

export default DummyContent;


  const data = [
    {
      category: "911 Legacy",
      title: "Discover the iconic evolution of the Porsche 911.",
      src: "/c1.jpeg",
      content: <DummyContent />,
    },
    {
      category: "Driven by Innovation",
      title: "Explore cutting-edge technology behind every Porsche.",
      src: "/c2.jpg",
      content: <DummyContent />,
    },
    {
      category: "Luxury Redefined",
      title: "Step into a world where luxury and speed unite.",
      src: "/c3.jpeg",
      content: <DummyContent />,
    },
    {
      category: "Timeless Design",
      title: "Experience the art of design with every curve and contour.",
      src: "/c4.jpeg",
      content: <DummyContent />,
    },
    {
      category: "Performance Heritage",
      title: "Celebrate decades of racing history and innovation.",
      src: "/c5.jpeg",
      content: <DummyContent />,
    },
    {
      category: "Engineered Excellence",
      title: "Precision engineering meets unparalleled performance.",
      src: "/c6.jpg",
      content: <DummyContent />,
    },
  ];
    