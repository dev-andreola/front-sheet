"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import ButtonThemeSwitch from "../ButtonThemeSwitch/ButtonThemeSwitch";
import { Sheet, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import SideBarMenu from "./SideBarMenu";

export default function Header() {
  return (
    <div className="w-[100vw] h-[77px] py-5 px-6 border-b fixed top-0 inset-x-0 shadow-md duration-200  bg-background/80 backdrop-blur z-50">
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
            <SheetTrigger asChild>
              <Button size="icon" variant={"outline"}>
                <Menu />
              </Button>
            </SheetTrigger>

            <SideBarMenu />
          </Sheet>
        </div>
      </div>
    </div>
  );
}
