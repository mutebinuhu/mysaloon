import Image from "next/image";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import AppointmentSection from "./components/AppointementSection";
import GallerySection from "./components/GallerySection";

export default function Home() {
  return (
    <main className="">
     <Banner/>
     <AboutUs/>
     <OurServices/>
     <OurTeam/>
     <AppointmentSection/>
     <GallerySection/>
    </main>
  );
}
