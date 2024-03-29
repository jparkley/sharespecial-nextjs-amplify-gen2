import type { Metadata } from "next";
import { Alkatra } from "next/font/google"
import "./globals.css";
import NavBar from "../components/nav/NavBar";
import Auth from "@/components/auth/Auth";
import { isAuthenticated } from "@/lib/utils/amplify-utils";

const alkatra = Alkatra({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alkatra.className}>
        <NavBar isLoggedIn={await isAuthenticated()} />
        <div className="container">
          <Auth>{children}</Auth>
        </div>
      </body>
    </html>
  );
}
