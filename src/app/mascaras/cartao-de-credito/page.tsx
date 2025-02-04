"use client";

import { jsCode, mainFunction, reactCode } from "./codes";
import MaskPage from "@/components/MaskPage/MaskPage";

function maskCreditCardNumber(credit_card: string): string {
  return credit_card
    .replace(/\D/g, "")
    .replace(/(\d{12})(\d)/, "$1 $2")
    .replace(/(\d{8})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .slice(0, 19);
}

export default function CreditCardMaskPage() {
  return (
    <MaskPage
      title="Cartão de Crédito"
      label="Número do Cartão"
      digits={19}
      placeholder="0000 0000 0000 0000"
      maskFunction={maskCreditCardNumber}
      codes={{ jsCode, mainFunction, reactCode }}
    />
  );
}
