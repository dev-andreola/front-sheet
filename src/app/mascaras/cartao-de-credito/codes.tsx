export const mainFunction = `export function maskCreditCardNumber(credit_card: string) {
  return credit_card
    .replace(/\D/g, "")
    .replace(/(\d{12})(\d)/, "$1 $2")
    .replace(/(\d{8})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .slice(0, 19);
}`;

export const reactCode = `import React from "react";

export function maskCreditCardNumber(credit_card: string) {
  return credit_card
    .replace(/\D/g, "")
    .replace(/(\d{12})(\d)/, "$1 $2")
    .replace(/(\d{8})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .slice(0, 19);
}

export default function App() {
  const [creditCardNumber, setCreditCardNumber] = React.useState("");
  return (
    <div className="App">
      <input
        type="tel"
        placeholder="XXXX XXXX XXXX XXXX"
        value={creditCardNumber}
        onChange={(e) => setCreditCardNumber(maskCreditCardNumber(e.target.value))}
      />
    </div>
  );
}`;

export const jsCode = `<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <input id="credit-card-number" type="tel" placeholder="XXXX XXXX XXXX XXXX" />

    <script>
      function maskCreditCardNumber(credit_card) {
        return credit_card
          .replace(/\D/g, "")
          .replace(/(\d{12})(\d)/, "$1 $2")
          .replace(/(\d{8})(\d)/, "$1 $2")
          .replace(/(\d{4})(\d)/, "$1 $2")
          .slice(0, 19);
      }

      document.getElementById('credit-card-number').addEventListener('input', function(e) {
        e.target.value = maskCreditCardNumber(e.target.value);
      });
    </script>
  </body>
</html>`;
