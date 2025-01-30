"use client";

import { useState, useEffect } from "react";
import { Home, Info, Menu } from "lucide-react";
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
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-[77px] py-5 px-6 border-b fixed top-0 inset-x-0 shadow-xl duration-200  ${
        isScrolled ? "bg-background/80 backdrop-blur" : "bg-background"
      } z-50`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto ">
        <Button variant={"ghost"} className="hover:bg-transparent" asChild>
          <Link href="/">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Front<span className="font-light">Sheet</span>
            </h1>
          </Link>
        </Button>
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
                <li className="flex items-center gap-3 py-3 px-3 border rounded-sm">
                  <Home />
                  <h2>Início</h2>
                </li>

                <li className="flex items-center gap-3 py-3 px-3 border rounded-sm">
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
