import Features from "@/HomeComponents/Features/Features";
import Story from "@/HomeComponents/Story/Story";
import Homes from "@/HomeComponents/Homes/Homes";
import Gallery from "@/HomeComponents/Gallery/Gallery";
import Footer from "@/HomeComponents/Footer/Footer";
import Hero from "@/HomeComponents/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </>
  );
}
