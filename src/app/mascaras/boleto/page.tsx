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
  IconCopy,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { jsCode, mainFunction, reactCode } from "./codes";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

export function maskPaymentSlip(payment_slip: string) {
  return payment_slip
    .replace(/\D/g, "")
    .replace(/(\d{33})(\d)/, "$1 $2")
    .replace(/(\d{32})(\d)/, "$1 $2")
    .replace(/(\d{26})(\d)/, "$1.$2")
    .replace(/(\d{21})(\d)/, "$1 $2")
    .replace(/(\d{15})(\d)/, "$1.$2")
    .replace(/(\d{10})(\d)/, "$1 $2")
    .replace(/(\d{5})(\d)/, "$1.$2")
    .slice(0, 54);
}

export default function PaymentSlipMaskPage() {
  const [paymentSlip, setPaymentSlip] = useState("");
  const [code, setCode] = useState(reactCode);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Código copiado para a área de transferência!");
  };

  return (
    <div className="mt-[77px]">
      <div className="max-w-2xl mx-auto p-6 bg-background my-6 lg:my-12 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Máscara de Boleto</h1>
        <div className="border p-4 rounded-md mb-6">
          <Label className="block text-sm font-medium mb-2">Boleto</Label>
          <Input
            type="tel"
            placeholder="XXXXX.XXXXX XXXXX.XXXXXX XXXXX.XXXXXX X XXXXXXX"
            className="w-full p-2 border rounded-md"
            value={paymentSlip}
            onChange={(e) => setPaymentSlip(maskPaymentSlip(e.target.value))}
          />
          <Progress
            className="mt-2"
            value={Math.min(paymentSlip.length * (100 / 54), 100)}
          ></Progress>
        </div>

        <h2 className="text-lg font-semibold mb-2">Função de Máscara:</h2>
        <div className="relative bg-zinc-900 text-white p-4 rounded-md text-sm overflow-x-auto">
          <div className="absolute top-2 right-2">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
                  onClick={copyToClipboard}
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
          <div className="absolute top-2 left-2 flex gap-2">
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
          <div className="absolute top-2 right-2">
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
                  onClick={copyToClipboard}
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
