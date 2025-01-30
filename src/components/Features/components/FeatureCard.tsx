import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Feature } from "@/types/Feature";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="border p-4 rounded-xl w-full bg-background">
      <CardHeader className="px-0 pt-4 pb-0">
        <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
      </CardHeader>
      <CardDescription className="text-md">
        {feature.description}
      </CardDescription>

      <CardContent className="space-y-2 px-0 mt-6 pb-0">
        <Button variant="card" size="card">
          <span className="text-lg">Flexbox Generator</span>
          <span className="text-sm text-muted-foreground">
            Generate CSS for flexible layouts
          </span>
        </Button>

        <Button variant="card" size="card">
          <span className="text-lg">Color Palette Creator</span>
          <span className="text-sm text-muted-foreground">
            Create a color palette for your project
          </span>
        </Button>
      </CardContent>
    </Card>
  );
}
