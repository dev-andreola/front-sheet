export const mainFunction = `export function maskCEP(cep: string) {
  return cep
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 9);
}`;

export const reactCode = `import React from "react";

export function maskCEP(cep: string) {
  return cep
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 9);
}

export default function App() {
  const [cep, setCEP] = React.useState("");
  return (
    <div className="App">
      <input
        type="tel"
        placeholder="XXXXX-XXX"
        value={cep}
        onChange={(e) => setCEP(maskCEP(e.target.value))}
      />
    </div>
  );
}`;

export const jsCode = `<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <input id="cep" type="tel" placeholder="XXXXX-XXX" />

    <script>
      function maskCEP(cep) {
        return cep
          .replace(/\D/g, "")
          .replace(/(\d{5})(\d)/, "$1-$2")
          .slice(0, 9);
      }

      document.getElementById('cep').addEventListener('input', function(e) {
        e.target.value = maskCEP(e.target.value);
      });
    </script>
  </body>
</html>`;
