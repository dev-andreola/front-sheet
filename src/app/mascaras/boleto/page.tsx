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
          <label className="block text-sm font-medium mb-2">Boleto</label>
          <Input
            type="tel"
            placeholder="XXXXX.XXXXX XXXXX.XXXXXX XXXXX.XXXXXX X XXXXXXX"
            className="w-full p-2 border rounded-md"
            value={paymentSlip}
            onChange={(e) => setPaymentSlip(maskPaymentSlip(e.target.value))}
          />
        </div>

        <h2 className="text-lg font-semibold mb-2">Função de Máscara:</h2>
        <pre className="bg-zinc-900 text-white p-4 rounded-md text-sm overflow-x-auto">
          <code>{mainFunction}</code>
        </pre>

        <h2 className="text-lg font-semibold mt-4 mb-2">Exemplo:</h2>
        <div className="relative bg-zinc-900 text-white p-4 rounded-md text-sm overflow-x-auto">
          <div className="absolute top-2 left-2 flex gap-2">
            <Button
              className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
              onClick={() => setCode(reactCode)}
            >
              <Tooltip>
                <TooltipTrigger>
                  <IconBrandReact size={20} className="text-white" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Código em React</p>
                </TooltipContent>
              </Tooltip>
            </Button>
            <Button
              className="p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
              onClick={() => setCode(jsCode)}
            >
              <Tooltip>
                <TooltipTrigger>
                  <IconBrandJavascript size={20} className="text-white" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Código em Javascript</p>
                </TooltipContent>
              </Tooltip>
            </Button>
          </div>
          <Button
            className="absolute top-2 right-2 p-2 bg-zinc-800 rounded-md hover:bg-zinc-700"
            onClick={copyToClipboard}
          >
            <Tooltip>
              <TooltipTrigger>
                <IconCopy size={20} className="text-white" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Copiar código</p>
              </TooltipContent>
            </Tooltip>
          </Button>
          <pre className="pt-12">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
