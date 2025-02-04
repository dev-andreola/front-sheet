"use client";

import { jsCode, mainFunction, reactCode } from "./codes";
import MaskPage from "@/components/MaskPage/MaskPage";

function maskPaymentSlip(payment_slip: string): string {
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
  return (
    <MaskPage
      title="Boleto"
      label="Boleto"
      digits={54}
      maskFunction={maskPaymentSlip}
      placeholder="00000.00000 00000.000000 00000.000000 0 0000000"
      codes={{ jsCode, mainFunction, reactCode }}
    />
  );
}
