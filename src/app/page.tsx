import Download from "@/sections/Download";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Newsletter from "@/sections/Newsletter";
import PeopleSay from "@/sections/PeopleSay";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Download />
      <PeopleSay />
      <Newsletter />
      <Footer />
    </>
  );
}
