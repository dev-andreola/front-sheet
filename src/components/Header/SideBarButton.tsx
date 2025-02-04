import Link from "next/link";
import { Button } from "../ui/button";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface SideBarButtonProps {
  Icon: LucideIcon;
  href: string;
  title: string;
}

export default function SideBarButton({
  Icon,
  href,
  title,
}: SideBarButtonProps) {
  const pathname = usePathname();

  return (
    <li>
      <Button
        variant={pathname === href ? "default" : "ghost"}
        className="flex items-center gap-3 py-5 px-3 border rounded-sm w-full"
        asChild
      >
        <Link href={href} target="_top">
          <Icon />
          <h2>{title}</h2>
        </Link>
      </Button>
    </li>
  );
}
