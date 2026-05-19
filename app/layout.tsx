import type { Metadata } from "next";
import { Righteous, DM_Sans } from "next/font/google";
import "./globals.css";
 
const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});
 
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});
 
export const metadata: Metadata = {
  title: "PawRun Kuwait — Mobile Dog Exercise Van",
  description: "Kuwait's first mobile dog exercise service.",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${righteous.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
 
