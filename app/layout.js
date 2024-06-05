import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Topheader from "./components/Topheader";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Saloon",
  description: "The No.1 Mobile Saloon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="">
        <Topheader/>
        <Nav/>
        </div>
        {children}
      </body>
    </html>
  );
}
