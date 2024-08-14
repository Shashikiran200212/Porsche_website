import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col items-center bg-[#f8f8f9] px-4 py-2 h-screen overflow-hidden">
      <h1 className="text-black font-semibold text-4xl sm:text-5xl md:text-6xl mt-4 sm:mt-6 md:mt-0 text-center">
        Ferdinand Alexander Porsche
      </h1>
      <h2 className="text-black font-semibold text-lg sm:text-xl mt-2 text-center">
        1935-2012
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-4 space-y-8 md:space-y-0 md:space-x-1 ">
        <div className="text-black p-4 text-justify">
          Better known to Porsche enthusiasts as F.A. “Butzi” Porsche, he was the son of Dr.-Ing. Ferdinand “Ferry” and Dorothea Porsche, and grandson of Professor Ferdinand and Aloisia Porsche.
          While heading up the styling department at Porsche, he played a pivotal role in the design of the 904, the iconic 911, and the 914.
          He went on to establish Porsche Design. Like Porsche’s engineering firm, Butzi’s independent design firm handled contract work for outside clients — 
          designing everything from forklifts to airplane cockpits — but is better known for its own products, in this case a line of Porsche Design-branded watches, pens, knives, clothing, 
          appliances, and more.
          Today, Porsche Design is owned by Porsche AG, though the family maintains a significant interest.
          As a designer, Ferdinand Alexander Porsche enjoyed the reputation of a functionalist. A strict and clear line is discernible in all of the product designs that had emerged from his 
          studio. “Design must be functional and functionality must be translated into visual esthetics, without any reliance on gimmicks that have to be explained,” was the credo for his design 
          work. The purism of “Porsche Design” demands authenticity and discards anything that is unnecessary or superfluous.
        </div>
        <img
          src="/FAporsche.jpg"
          alt="Ferdinand Alexander Porsche"
          className="w-[700px]  h-[470px] object-cover rounded"
        />
        <div className="text-black p-4 text-justify">
          F.A. Porsche: “A product that is coherent in form requires no embellishment. It is enhanced by the purity of its form.” Form should be presented in a way that is easily understood 
          and that does not divert attention from the product and its functional purpose. He has always been convinced that “Good design must be honest”, “A good product must be discreetly good”.
          Later, he made this statement even more concise and clearer, emphasizing that “Design is not fashion”.
          Professor Ferdinand Alexander Porsche applied four fundamental principles in his work: “Reduce everything to its primary function. Focus on the clear and timeless form created in this 
          way. Use the most suitable and progressive materials for this purpose. Choose quality of finish combining tradition in craftsmanship with high technology”.
          Dr. Ing. h.c. F. Porsche AG, Stuttgart, is mourning Professor Ferdinand Alexander Porsche. The Honorary President of the Supervisory Board died on 5 April 2012 in Salzburg, aged 76. 
          Matthias Müller, President and Chief Executive Officer of Porsche AG, paid tribute to Ferdinand Alexander Porsche’s services to the sports car manufacturer: “We mourn the death of our 
          partner, Ferdinand Alexander Porsche. As the creator of the Porsche 911, he established a design culture in our company that has shaped our sports cars to this very day. His philosophy 
          of good design is a legacy to us that we will honour for all time.”
        </div>
      </div>

      <div className="text-black px-4 text-justify">
        Ferdinand Alexander Porsche was born in Stuttgart on 11 December 1935, the oldest son of Dorothea and Ferry Porsche. Even his childhood was shaped by cars, and he spent much of his 
        time in the engineering offices and development workshops of his grandfather Ferdinand Porsche. In 1943 the family accompanied the Porsche company’s move to Austria, where he went to 
        school in Zell am See. After returning to Stuttgart in 1950, he attended the private Waldorf school. After leaving school, he enrolled at the prestigious Ulm School of Design.

        In 1958, F.A. Porsche, as he was known by his colleagues, joined the engineering office of what was then Dr. Ing. h.c. F. Porsche KG. He soon proved his great talent for design by 
        sculpting the first model of a successor to the 356 model line out of plasticine. In 1962 he took over as head of the Porsche design studio, creating a worldwide furore one year later 
        with the Porsche 901 (or 911). With the Porsche 911, F.A. Porsche created a sports car icon whose timeless and classical form survives to this very day in what is now the seventh 911 
        generation. However, in addition to passenger cars, F.A. Porsche also concerned himself with designing the sports cars of the 1960s. His best-known designs include the Type 804 Formula 
        One racing car or the Porsche 904 Carrera GTS, now considered to be one of the most beautiful racing cars ever.

        In the course of the conversion of Porsche KG into a joint-stock corporation in 1971/72, Ferdinand Alexander Porsche, along with all the other family members, stood down from the 
        company’s front-line business operations. In 1972 he founded the “Porsche Design Studio” in Stuttgart, the head office of which was relocated to Zell am See in Austria in 1974. In the 
        decades that followed, he designed numerous classic gentlemen’s accessories such as watches, spectacles and writing implements that achieved global recognition under the “Porsche Design” 
        brand. In parallel, with his team, he designed a plethora of industrial products, household appliances and consumer durables for internationally renowned clients under the brand “Design 
        by F.A. Porsche”. A strong and clear design concept typifies all product designs created in his design studio to date. The credo of his design work was: “Design must be functional and 
        functionality has to be translated visually into aesthetics, without gags that have to be explained first.” F.A. Porsche: “A coherently designed product requires no adornment; it should 
        be enhanced by its form alone.” The design’s appearance should be readily comprehensible and not detract from the product and its function. His conviction was: “Good design should be 
        honest.”
      </div>
    </div>
  );
};

export default Page;
