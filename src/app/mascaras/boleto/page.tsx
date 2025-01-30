"use client";

import React, { useState } from "react";

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

  return (
    <div className="mt-[77px]">
      <div className="max-w-2xl mx-auto p-6 bg-background my-12 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Máscara de Boleto</h1>
        <div className="border p-4 rounded-md mb-6">
          <label className="block text-sm font-medium mb-2">Boleto</label>
          <input
            type="tel"
            placeholder="XXXXX.XXXXX XXXXX.XXXXXX XXXXX.XXXXXX X XXXXXXX"
            className="w-full p-2 border rounded-md"
            value={paymentSlip}
            onChange={(e) => setPaymentSlip(maskPaymentSlip(e.target.value))}
          />
        </div>

        <h2 className="text-lg font-semibold mb-2">Função de Máscara:</h2>
        <pre className="bg-zinc-900 text-white p-4 rounded-md text-sm overflow-x-auto">
          <code>{`export function maskPaymentSlip(payment_slip: string) {
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
}`}</code>
        </pre>

        <h2 className="text-lg font-semibold mt-4 mb-2">Exemplo:</h2>
        <pre className="bg-zinc-900 text-white p-4 rounded-md text-sm overflow-x-auto">
          <code>{`import React, { useState } from "react";

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

export default function App() {
  const [paymentSlip, setPaymentSlip] = useState("");
  return (
    <div className="App">
      <input
        type="tel"
        placeholder="XXXXX.XXXXX XXXXX.XXXXXX XXXXX.XXXXXX X XXXXXXX"
        value={paymentSlip}
        onChange={(e) => setPaymentSlip(maskPaymentSlip(e.target.value))}
      />
    </div>
  );
}`}</code>
        </pre>
      </div>
    </div>
  );
}
