import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { Home, Info } from "lucide-react";
import SideBarButton from "./SideBarButton";

export default function SideBarMenu() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
        <SheetDescription>Selecione o recurso desejado</SheetDescription>
      </SheetHeader>

      <ul className="mt-16 flex flex-col space-y-4">
        <SideBarButton title="Início" href="/" Icon={Home} />
        <SideBarButton title="Sobre Nós" href="/sobre" Icon={Info} />
      </ul>
    </SheetContent>
  );
}
