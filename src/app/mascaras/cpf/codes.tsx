export const mainFunction = `export function maskCPF(cpf: string) {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}`;

export const reactCode = `import React from "react";

export function maskCPF(cpf: string) {
  return cpf
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

export default function App() {
  const [cpf, setCPF] = React.useState("");
  return (
    <div className="App">
      <input
        type="tel"
        placeholder="XXX.XXX.XXX-XX"
        value={cpf}
        onChange={(e) => setCPF(maskCPF(e.target.value))}
      />
    </div>
  );
}`;

export const jsCode = `<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <input id="cpf" type="tel" placeholder="XXX.XXX.XXX-XX" />

    <script>
      function maskCPF(cpf) {
        return cpf
          .replace(/\D/g, "")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})/, "$1-$2")
          .replace(/(-\d{2})\d+?$/, "$1");
      }

      document.getElementById('cpf').addEventListener('input', function(e) {
        e.target.value = maskCPF(e.target.value);
      });
    </script>
  </body>
</html>`;
