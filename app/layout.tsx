import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components";
import Head from 'next/head';

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aegis-landing.vercel.app"),
  title: "Aegis AI",
  description: "Discover the power smart contract security without expert reliance. AI-Enabled Audit Solutions in seconds.",
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/opengraph-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image:type" content="Website" />
        <meta property="og:image" content="./opengraph-image.jpg" />
        <meta property="og:image:width" content="980" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body className={`${satoshi.className} bg-black`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

