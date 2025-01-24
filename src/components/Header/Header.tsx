import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import ButtonThemeSwitch from "../ButtonThemeSwitch/ButtonThemeSwitch";

export default function Header() {
  return (
    <div className="w-full py-5 px-6 border-b fixed top-0 inset-x-0 shadow-sm bg-background">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-semibold">
          Front<span className="font-light">Sheet</span>
        </h1>
        <div className="flex items-center gap-3">
          <ButtonThemeSwitch />
          <Button size="icon" variant={"outline"}>
            <Menu />
          </Button>
        </div>
      </div>
    </div>
  );
}
