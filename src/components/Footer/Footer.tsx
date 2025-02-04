import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 dark:bg-background text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 tracking-tighter">
              Front<span className="font-light">Sheet</span>
            </h3>
            <p className="text-zinc-400">
              Capacitando desenvolvedores web com ferramentas e recursos
              essenciais.
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Acesso rápido</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  Máscaras
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">vt-code</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
            <p className="text-zinc-400 mb-2">
              Mantenha-se atualizado com nossas últimas ferramentas e recursos
            </p>
            <input
              type="email"
              placeholder="Insira seu e-mail"
              className="w-full p-2 rounded bg-zinc-700 text-white"
            />
          </div>
        </div>
        <div className="mt-8 text-center text-zinc-400">
          <p>&copy; {new Date().getFullYear()} vt-code. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
