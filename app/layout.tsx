import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aiden & Clara Wedding",
  description: "The Wedding Invitation of Aiden & Clara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      </head>
      <body className="antialiased bg-[#FDFBF7]">
        {children}
      </body>
    </html>
  );
}
