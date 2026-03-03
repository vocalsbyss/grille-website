import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../.next/components/Navbar";

export const metadata = {
  title: "VIKISHA Invisible Grills | Best Invisible Grills in Visakhapatnam",
  description:
    "VIKISHA provides premium invisible grills in Visakhapatnam. Balcony safety, window protection, rust-free stainless steel installation. Call 7386194588.",
  keywords:
    "Invisible Grills Visakhapatnam, Balcony Safety Grills Vizag, Window Safety Grills Visakhapatnam, Stainless Steel Invisible Grills",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Navbar />
        <div className="pt-20">{children}</div> {/* padding to offset navbar */}
      </body>
    </html>
  );
}