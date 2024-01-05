import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FAQSection } from "@/components";
import { TokenomicsSection } from "@/components";
import { FooterSection } from "@/components";
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets:['latin']
});

export const metadata: Metadata = {
  title: "Aegis AI",
  description: "Audit your code for security vulnerabilities",
};

export default function RootLayout({}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="bg-black">
          <TokenomicsSection/>
          <FAQSection/>
          <FooterSection/>
        </main>
      </body>
    </html>
  );
}
