"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  IconBrandJavascript,
  IconBrandReact,
  IconCheck,
  IconCopy,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { jsCode, mainFunction, reactCode } from "./codes";

export function maskCNPJ(cnpj: string) {
  return cnpj
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export default function CNPJMaskPage() {
  const [cnpj, setCnpj] = useState("");
  const [code, setCode] = useState(reactCode);

  const { toast } = useToast();

  const copyToClipboard = (codeToCopy: string) => {
    navigator.clipboard.writeText(codeToCopy);
    toast({
      description: (
        <div className="flex items-center gap-2">
          <IconCheck />
          <p>Código copiado!</p>
        </div>
      ),
      duration: 3000,
    });
  };

  return (
    <div className="mt-[77px]">
      <div className="max-w-2xl mx-auto p-6 bg-background my-6 lg:my-12 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Máscara de CNPJ</h1>
        <div className="border p-4 rounded-md mb-6">
          <Label className="block text-sm font-medium mb-2">CNPJ</Label>
          <Input
            type="tel"
            placeholder="XX.XXX.XXX/XXXX-XX"
            className="w-full p-2 border rounded-md"
            value={cnpj}
            onChange={(e) => setCnpj(maskCNPJ(e.target.value))}
          />
          <Progress
            className="mt-2 border-red-300"
            value={Math.min(cnpj.length * (100 / 18), 100)}
          ></Progress>
        </div>

        <h2 className="text-lg font-semibold mb-2">Função de Máscara:</h2>
        <div className="relative bg-zinc-900 text-white p-4 rounded-md text-sm overflow-x-auto">
          <div className="absolute top-2 right-2 z-20">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
                  onClick={() => copyToClipboard(mainFunction)}
                >
                  <IconCopy size={20} className="text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copiar código</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <pre>
            <ScrollArea className="w-full">
              <code>{mainFunction}</code>
              <ScrollBar orientation="horizontal" className="pb-4" />
            </ScrollArea>
          </pre>
        </div>

        <h2 className="text-lg font-semibold mt-4 mb-2">Exemplo:</h2>
        <div className="relative bg-zinc-900 text-white p-4 rounded-md text-sm overflow-x-auto">
          <div className="absolute top-2 left-2 flex gap-2 z-20">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
                  onClick={() => setCode(reactCode)}
                >
                  <IconBrandReact size={20} className="text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Código em React</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
                  onClick={() => setCode(jsCode)}
                >
                  <IconBrandJavascript size={20} className="text-white" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Código em Javascript</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="absolute top-2 right-2 z-20">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
                  onClick={() => copyToClipboard(code)}
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
              <code>{code}</code>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </pre>
        </div>
      </div>
    </div>
  );
}
