import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";

const font = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "TechBooks - Encontre aqui os seus livros preferidos",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className} bg-gradient-to-r from-neutral-900 to-cyan-500`}>
            <div className="min-h-screen flex flex-col">
              <HeaderBar/>
              <main className="flex-grow">{children}</main>
              <FooterBar/>
            </div>
      </body>
    </html>
  );
}
