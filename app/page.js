import Image from "next/image";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import AppointmentSection from "./components/AppointementSection";
import GallerySection from "./components/GallerySection";
import AnimatedSection from "./components/AnimatedSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Topheader from "./components/Topheader";

export default function Home() {
  return (
    <main className="">
       <div className="">
        <Topheader/>
        <Nav/>
      </div>
     <Banner/>
     <AboutUs/>
     <OurServices/>
     <OurTeam/>
     <AppointmentSection/>
     {/** <GallerySection/> */}
     <Testimonials/>
     <Footer/>
    </main>
  );
}
