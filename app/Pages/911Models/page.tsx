import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Page = () => {
  return (
    <div
      className="h-screen w-full bg-white overflow-hidden flex flex-col items-center relative"
      style={{ userSelect: "none" }}
    >
      {/* Container for header elements */}
      <div className="relative w-full flex flex-col items-center pt-4">
        <h1
          style={{ fontFamily: 'PorscheRegular' }}
          className="text-center text-2xl md:text-4xl lg:text-5xl font-normal mb-2"
        >
          PORSCHE
        </h1>
        <a href="/">
          <img
            src="/home.png"
            alt="Home"
            className="absolute top-2 left-2 md:top-3 md:left-10 py-4 w-[15px] md:w-[20px] h-auto transition-transform transform hover:scale-125 duration-200"
          />
        </a>
      </div>
      <hr className="w-full border-t-2 border-gray-300 my-4" />
      <div className="w-full flex-grow relative">
        <Carousel>
          <CarouselContent>
            {[
              { src: "/911models/911gt3rs.png", alt: "911 GT3 RS", text: "911 GT3 RS" },
              { src: "/911models/911st.png", alt: "911 ST", text: "911 ST" },
              { src: "/911models/911gt3.png", alt: "911 GT3", text: "911 GT3" },
              { src: "/911models/911turbo.png", alt: "911 Turbo", text: "911 Turbo" },
              { src: "/911models/911carrera.png", alt: "911 Carrera", text: "911 Carrera" },
            ].map(({ src, alt, text }) => (
              <CarouselItem
                key={alt}
                className="relative flex flex-col items-center justify-center w-full"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full max-h-[70vh] object-contain"
                />
                <h1
                  className="absolute top-10 md:top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-sm md:text-3xl lg:text-5xl font-extralight"
                  style={{ fontFamily: 'PorscheRegular' }}
                >
                  {text}
                </h1>
                <div className="mt-5">
                  <button className="px-4 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase font-semibold bg-transparent border-2 border-black transition-transform transform hover:scale-95 text-black duration-200 hover:bg-white hover:text-black">
                    <a href="https://credit-card-animation-gold.vercel.app/">
                      Book Now
                    </a>
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="md:block hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
        <div className="p-4 md:px-24 text-[10px] text-neutral-500">
          Any Manufacturer&apos;s Suggested Retail Price including Value Added
          Tax (MSRP incl. VAT) listed is for informational purposes only and
          excludes transportation fees, taxes (except for those stipulated
          otherwise), license, title, optional or regionally required equipment.
          In particular, the MSRP incl. VAT is exclusive of the additional
          consumption tax as required by the Notice regarding the Additional
          Levy of Consumption Tax on Super-luxury Cars, issued by the Ministry
          of Finance and State Administration of Taxation and effective from 1
          December 2016. The MSRP may be adjusted due to the VAT rate change
          effective from 1 April 2019 as required by the Public Announcement
          Concerning Relevant Policies on Continuing VAT Reform. Please consult
          with authorized dealers for specific pricing information.
        </div>
      </div>
    </div>
  );
};

export default Page;
