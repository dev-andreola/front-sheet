"use client";

import { jsCode, mainFunction, reactCode } from "./codes";
import MaskPage from "@/components/MaskPage/MaskPage";

export function maskCEP(cep: string) {
  return cep
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 9);
}

export default function CEPMaskPage() {
  return (
    <MaskPage
      title="CEP"
      label="CEP"
      digits={9}
      placeholder="XXXXX-XXX"
      maskFunction={maskCEP}
      codes={{ jsCode, mainFunction, reactCode }}
    />
  );
}
