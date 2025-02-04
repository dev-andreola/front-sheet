"use client";

import React from "react";
import { jsCode, mainFunction, reactCode } from "./codes";
import MaskPage from "@/components/MaskPage/MaskPage";

function maskCPF(cpf: string): string {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export default function CPFMaskPage() {
  return (
    <MaskPage
      title="CPF"
      label="CPF"
      placeholder="000.000.000-00"
      digits={14}
      maskFunction={maskCPF}
      codes={{ jsCode, mainFunction, reactCode }}
    />
  );
}
