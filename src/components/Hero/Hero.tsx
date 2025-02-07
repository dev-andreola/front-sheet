import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="border-b bg-hero-gradient h-[527px] px-3 w-full flex flex-col items-center justify-center gap-2 text-center pt-[77px]">
      <h1 className="md:text-6xl text-5xl font-bold text-white tracking-tighter">
        {/* FrontEnd Developer's Toolkit */}
        Kit Essencial para FrontEnd
      </h1>
      <p className="text-sm mb-2 text-white opacity-50 lg:text-lg">
        {/* Your one-stop resource for web development tools and references */}
        Seu Hub Completo para Desenvolvimento Web
      </p>
      <Button className="bg-white hover:bg-white/80 text-black" size={"lg"}>
        {/* Explore Tools */}
        Explorar Ferramentas
      </Button>
    </div>
  );
}
