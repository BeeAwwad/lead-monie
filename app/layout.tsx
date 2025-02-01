import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/lib/font";

export const metadata: Metadata = {
  title: "Lead Monie",
  description: "Pay bills, save, invest, and more seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-400"
    >
      <head>
        <link
          rel="icon"
          href="/icon?<generate>"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={`${lato} antialiased`}>{children}</body>
    </html>
  );
}
