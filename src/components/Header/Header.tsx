import { Home, HomeIcon, Info, Menu } from "lucide-react";
import { Button } from "../ui/button";
import ButtonThemeSwitch from "../ButtonThemeSwitch/ButtonThemeSwitch";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { IconHomeSearch } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="w-full py-5 px-6 border-b fixed top-0 inset-x-0 shadow-sm bg-background">
      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-semibold">
          Front<span className="font-light">Sheet</span>
        </h1>
        <div className="flex items-center gap-3">
          <ButtonThemeSwitch />

          <Sheet>
            <SheetTrigger>
              <Button size="icon" variant={"outline"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Selecione o recurso desejado
                </SheetDescription>
              </SheetHeader>

              <ul className="mt-16 flex flex-col space-y-4">
                <li className="flex items-center gap-2 py-3 px-2 border rounded-sm">
                  <Home />
                  <h2>Início</h2>
                </li>

                <li className="flex items-center gap-2 py-3 px-2 border rounded-sm">
                  <Info />
                  <h2>Sobre nós</h2>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
