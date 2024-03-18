import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

// context provider
import { CartProvider } from "@/context/cart-context";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Shopping Cart",
  description: "Stopping Cart with useState and useContext",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          openSans.variable
        )}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
