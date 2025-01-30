import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="border-b bg-hero-gradient h-[527px] px-3 w-full flex flex-col items-center justify-center gap-2 text-center pt-[77px]">
      <h3 className="text-6xl  font-bold text-white tracking-tighter">
        FrontEnd Developer&apos;s Toolkit
      </h3>
      <p className="text-sm mb-2 text-white opacity-50 lg:text-lg">
        Your one-stop resource for web development tools and references
      </p>
      <Button className="bg-white hover:bg-white/80 text-black" size={"lg"}>
        Explore Tools
      </Button>
    </div>
  );
}
