export const mainFunction = `export function maskCNPJ(cnpj: string) {
  return cnpj
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}`;

export const reactCode = `import React from "react";

export function maskCNPJ(cnpj: string) {
  return cnpj
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export default function App() {
  const [cnpj, setCNPJ] = React.useState("");
  return (
    <div className="App">
      <input
        type="tel"
        placeholder="XX.XXX.XXX/XXXX-XX"
        value={cnpj}
        onChange={(e) => setCNPJ(maskCNPJ(e.target.value))}
      />
    </div>
  );
}`;

export const jsCode = `<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <input id="cnpj" type="tel" placeholder="XX.XXX.XXX/XXXX-XX" />

    <script>
      function maskCNPJ(cnpj) {
        return cnpj
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1/$2")
          .replace(/(\d{4})(\d)/, "$1-$2")
          .replace(/(-\d{2})\d+?$/, "$1");
      }

      document.getElementById('cnpj').addEventListener('input', function(e) {
        e.target.value = maskCNPJ(e.target.value);
      });
    </script>
  </body>
</html>`;
