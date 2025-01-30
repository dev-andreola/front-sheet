import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="h-[3000px]">
        <Features />
      </div>
    </div>
  );
}
