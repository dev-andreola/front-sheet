import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Feature } from "@/types/Feature";
import Link from "next/link";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="border p-4 rounded-xl w-full bg-background">
      <CardHeader className="px-0 pt-4 pb-0">
        <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
      </CardHeader>
      <CardDescription className="text-md">
        {feature.description}
      </CardDescription>

      <CardContent className="flex flex-col gap-2 md:gap-4 px-0 mt-6 pb-0 md:grid md:grid-cols-2">
        {feature.tools.map((tool) => (
          <Button key={tool.title} variant="card" size="card" asChild>
            <Link href={tool.href}>
              <span className="text-lg">{tool.title}</span>
              <span className="text-sm text-muted-foreground">
                {tool.description}
              </span>
            </Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
