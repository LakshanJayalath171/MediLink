import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";


const Font_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight:["200","300","400","500","600","700"],
  variable:"--font-sans"
});

export const metadata: Metadata = {
  title: "MediLink",
  description: "A Healthcare Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${Font_sans.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
