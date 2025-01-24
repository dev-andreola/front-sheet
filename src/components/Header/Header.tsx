import { Menu, MoonIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="w-full py-4 px-6 border-b fixed top-0 inset-x-0 shadow-sm bg-background">
      <div className="flex items-center justify-between ">
        <h1 className="text-3xl font-semibold">
          Front<span className="font-light">Sheet</span>
        </h1>
        <div className="flex items-center gap-3">
          <Button size="icon" variant={"outline"}>
            <MoonIcon />
          </Button>
          <Button size="icon" variant={"outline"}>
            <Menu />
          </Button>
        </div>
      </div>
    </div>
  );
}
