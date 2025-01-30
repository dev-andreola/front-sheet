import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function Features() {
  return (
    <div className="px-3 py-8 space-y-6">
      <div className="border p-4 rounded-xl w-full bg-background">
        <div className="text-xl font-semibold">CSS Tools</div>
        <p className="text-muted-foreground mb-3">
          Enhance your styling workflow
        </p>
        <div className="space-y-2">
          <Card className="bg-background">
            <CardHeader>
              <CardTitle>Flexbox Generator</CardTitle>
              <CardDescription>
                Generate CSS for flexible layouts
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-background">
            <CardHeader>
              <CardTitle>Color Palette Creator</CardTitle>
              <CardDescription>
                Create a color palette for your project
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="border p-4 rounded-xl w-full bg-background">
        <div className="text-xl font-semibold">JavaScript Utilities</div>
        <p className="text-muted-foreground mb-3">
          Boost your JavaScript productivity
        </p>
        <div className="space-y-2">
          <Card className="bg-background">
            <CardHeader>
              <CardTitle>RegEx Tester</CardTitle>
              <CardDescription>Test your regular expressions</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-background">
            <CardHeader>
              <CardTitle>Code Formatter</CardTitle>
              <CardDescription>Format your code with ease</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
