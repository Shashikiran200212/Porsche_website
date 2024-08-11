import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";


export default function Home() {
  return (
    <main style={{ userSelect: 'none', }} className="bg-white">
      <Hero/>
      <Showcase/>
    </main>
  );
}
