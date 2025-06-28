import "./globals.css";
import { Inter } from "next/font/google";
import { SubmissionsProvider } from "./context/SubmissionsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artistly",
  description: "Artist booking platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SubmissionsProvider>{children}</SubmissionsProvider>
      </body>
    </html>
  );
}
