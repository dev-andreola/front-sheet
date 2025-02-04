import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/Footer/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FrontSheet | Kit Essencial para FrontEnd",
  description:
    "Seu atalho para um desenvolvimento web mais produtivo! Descubra ferramentas, guias e referências indispensáveis para todo desenvolvedor Front-End.",
  keywords:
    "frontend toolkit, ferramentas front-end, dev tools, desenvolvimento web, ferramentas para front-end, desenvolvimento front-end, recursos para desenvolvedores, ferramentas para desenvolvedores, kit de ferramentas para web, desenvolvimento de sites, produtividade para desenvolvedores, código eficiente, front-end developer resources, referências para front-end, melhores ferramentas para desenvolvedores front-end, como melhorar a produtividade no front-end, guia essencial para desenvolvimento web, ferramentas indispensáveis para front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased bg-muted`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <div className="flex flex-col justify-between w-full min-h-dvh">
              <Header />

              {children}

              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
