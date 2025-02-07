"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  IconBrandCss3,
  IconBrandTailwind,
  IconCheck,
  IconCopy,
  IconInfoCircle,
} from "@tabler/icons-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function BoxShadowGeneratorPage() {
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(4);
  const [blur, setBlur] = useState(12);
  const [spread, setSpread] = useState(2);
  const [opacity, setOpacity] = useState(0.4);
  const [inset, setInset] = useState(false);
  const [shadowColor, setShadowColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#f4f4f5");
  const [boxColor, setBoxColor] = useState("#ffffff");
  const [code, setCode] = useState("css");

  const { toast } = useToast();

  function hexToRgba(hex: string, alpha: number) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  const cssBoxShadow = `${
    inset ? "inset " : ""
  }${horizontal}px ${vertical}px ${blur}px ${spread}px ${hexToRgba(
    shadowColor,
    opacity
  )}`;

  const tailwindBoxShadow = `shadow-[${
    inset ? "inset_" : ""
  }${horizontal}px_${vertical}px_${blur}px_${spread}px_${hexToRgba(
    shadowColor,
    opacity
  )}]`;

  const copyToClipboard = (codeToCopy: string) => {
    navigator.clipboard.writeText(codeToCopy);
    toast({
      description: (
        <div className="flex items-center gap-2">
          <IconCheck />
          <p>Código copiado!</p>
        </div>
      ),
      duration: 1000,
    });
  };

  return (
    <div className="mt-[77px]">
      <div className="max-w-2xl mx-auto p-6 my-6 lg:my-12 rounded-lg bg-background">
        <h1 className="text-2xl font-bold mb-4">Gerador de Box Shadow</h1>

        <div className="flex flex-col-reverse md:flex-row gap-8 w-full rounded-md mb-6">
          <div className="space-y-4 w-full">
            <div>
              <Label>Horizontal</Label>
              <Slider
                defaultValue={[horizontal]}
                min={-50}
                max={50}
                step={1}
                onValueChange={(value) => setHorizontal(value[0])}
              />
            </div>

            <div>
              <Label>Vertical</Label>
              <Slider
                defaultValue={[vertical]}
                min={-50}
                max={50}
                step={1}
                onValueChange={(value) => setVertical(value[0])}
              />
            </div>

            <div>
              <Label>Desfoque</Label>
              <Slider
                defaultValue={[blur]}
                min={0}
                max={50}
                step={1}
                onValueChange={(value) => setBlur(value[0])}
              />
            </div>

            <div>
              <Label>Amplitude</Label>
              <Slider
                defaultValue={[spread]}
                min={-20}
                max={20}
                step={1}
                onValueChange={(value) => setSpread(value[0])}
              />
            </div>

            <div>
              <Label>Opacidade</Label>
              <Slider
                defaultValue={[opacity]}
                min={0}
                max={1}
                step={0.1}
                onValueChange={(value) => setOpacity(value[0])}
              />
            </div>

            <div className="grid grid-cols-3 gap-4 py-2">
              <div>
                <Label>Sombra</Label>
                <Input
                  type="color"
                  value={shadowColor}
                  onChange={(e) => setShadowColor(e.target.value)}
                />
              </div>

              <div>
                <Label>Caixa</Label>
                <Input
                  type="color"
                  value={boxColor}
                  onChange={(e) => setBoxColor(e.target.value)}
                />
              </div>

              <div>
                <Label>Fundo</Label>
                <Input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-2 py-2">
              <Label>Sombra Interna</Label>
              <Switch checked={inset} onCheckedChange={setInset} />
            </div>
          </div>

          <div
            className="w-full flex items-center justify-center p-10 rounded-lg"
            style={{ backgroundColor }}
          >
            <div
              className="w-24 h-24 rounded-lg"
              style={{ boxShadow: cssBoxShadow, backgroundColor: boxColor }}
            />
          </div>
        </div>

        <div className="relative bg-zinc-900 text-white p-4 rounded-md text-sm overflow-x-auto">
          <div className="absolute top-2 left-2 flex gap-2 z-20">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
                  onClick={() => setCode("css")}
                >
                  <IconBrandCss3 size={20} className="text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Código em CSS</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
                  onClick={() => setCode("tailwind")}
                >
                  <IconBrandTailwind size={20} className="text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Código em Tailwind</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="absolute top-2 right-2 z-20">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
                  onClick={() =>
                    copyToClipboard(
                      code === "css"
                        ? `box-shadow: ${cssBoxShadow};`
                        : tailwindBoxShadow
                    )
                  }
                >
                  <IconCopy size={20} className="text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copiar código</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <pre className="pt-12">
            <ScrollArea className="w-full pb-4">
              {code === "css" ? (
                <code>box-shadow: {cssBoxShadow};</code>
              ) : (
                <code>{tailwindBoxShadow}</code>
              )}
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </pre>
        </div>
        <div>
          <Alert className="mt-4">
            <IconInfoCircle className="size-4" />
            <AlertTitle className="mb-2">Observação</AlertTitle>
            <AlertDescription className="space-y-2">
              <p>
                Sombra com alto valor de <code>blur</code> (desfoque) pode
                impactar a performance em dispositivos menos potentes,
                especialmente se usada em elementos de alta frequência na
                interface (como listas grandes).
              </p>
              <p>
                Embora amplamente suportado, alguns navegadores antigos requerem
                prefixos como <code>-webkit-box-shadow</code> e{" "}
                <code>-moz-box-shadow</code>, mas isso raramente é necessário em
                projetos modernos.
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
