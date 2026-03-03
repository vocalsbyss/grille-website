// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
}