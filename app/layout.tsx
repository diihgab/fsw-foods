import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./_context/cart";
import AuthProvider from "./_providers/auth";
import { Toaster } from "@/app/_components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FSW Foods | Diego Gabriel",
  description: "API REST complete with solid principles made in Next.js from a Restaurant",
  metadataBase: new URL ("https://em-content.zobj.net/source/apple/391/question-mark_2753.png"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>

        <Toaster />
      </body>
    </html>
  );
}
