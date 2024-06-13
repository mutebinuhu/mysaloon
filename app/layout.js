import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Topheader from "./components/Topheader";


const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "My Saloon",
  description: "The No.1 Mobile Saloon",
};
const Main = () =>{
  return(
    <div className="">
    <Topheader/>
    <Nav/>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mont.className}`}>
        {children}
      </body>
    </html>
  );
}
