import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sekolah Stack — Kuasai Stack-mu, Raih Karirmu",
  description:
    "Belajar Full Stack Development dari dasar hingga siap kerja melalui video pembelajaran, project nyata, dan materi yang selalu up to date.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
