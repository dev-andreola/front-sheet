"use client";

import { jsCode, mainFunction, reactCode } from "./codes";
import MaskPage from "@/components/MaskPage/MaskPage";

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
  return (
    <MaskPage
      title="CNPJ"
      label="CNPJ"
      placeholder="00.000.000/0000-00"
      maskFunction={maskCNPJ}
      digits={18}
      codes={{ reactCode, jsCode, mainFunction }}
    />
  );
}
