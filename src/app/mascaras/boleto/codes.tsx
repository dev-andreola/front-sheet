export const mainFunction = `export function maskPaymentSlip(payment_slip: string) {
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
}`;

export const reactCode = `import React from "react";

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
  const [paymentSlip, setPaymentSlip] = React.useState("");
  return (
    <div className="App">
      <input
        type="tel"
        placeholder="XXXXX.XXXXX XXXXX.XXXXXX XXXXX.XXXXXX X XXXXXXXXXXXXXXXX"
        value={paymentSlip}
        onChange={(e) => setPaymentSlip(maskPaymentSlip(e.target.value))}
      />
    </div>
  );
}`;

export const jsCode = `<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <input id="payment-slip" type="tel" placeholder="XXXXX.XXXXX XXXXX.XXXXXX XXXXX.XXXXXX X XXXXXXXXXXXXXXXX" />

    <script>
      function maskPaymentSlip(payment_slip) {
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

      document.getElementById('payment-slip').addEventListener('input', function(e) {
        e.target.value = maskPaymentSlip(e.target.value);
      });
    </script>
  </body>
</html>`;
