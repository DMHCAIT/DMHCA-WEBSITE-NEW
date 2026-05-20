import type { Metadata, Viewport } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import PublicChrome from "@/components/PublicChrome";

export const metadata: Metadata = {
  title: "DMHCA – Delhi Medical Health Care Academy",
  description:
    "Advance your medical career with globally recognized Fellowship Programs, PG Diplomas, and Certificate Courses from Delhi Medical Health Care Academy.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <LenisProvider>
          <PublicChrome>{children}</PublicChrome>
        </LenisProvider>
      </body>
    </html>
  );
}
