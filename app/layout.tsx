import React, { useState, useEffect } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components";

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

const Preloader = () => (
  <div className="absolute top-0 left-0 w-full h-full">
    <video className="w-full h-full object-cover" autoPlay muted loop>
      <source src="./0000-0396.mkv" type="video/mkv" />
    </video>
  </div>
);

export const metadata: Metadata = {
  title: "Aegis AI",
  description: "Audit your code for security vulnerabilities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes some time
    const fetchData = async () => {
      // Your data fetching logic here
      // For example, use fetch or axios to fetch data
      // Simulate a delay for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Once data is loaded, set isLoading to false
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <html lang="en">
      <body className={`${satoshi.className} bg-black`}>
        {isLoading ? (
          // Display the preloader while content is loading
          <Preloader />
        ) : (
          // Render the content when loading is complete
          <Provider>{children}</Provider>
        )}
      </body>
    </html>
  );
}
