import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "@/client/styles/output.css"
import { ReactQueryClientProvider } from "@/client/components/ReactQueryClientProvider";
import UserProvider from "@/client/context/user";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <UserProvider>

      <ReactQueryClientProvider>
        <html lang="en">
          <body className={roboto.className} >{children}</body>
        </html>
      </ReactQueryClientProvider>
    </UserProvider>
  );
}
