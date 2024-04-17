import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeaderNav />
      <HeroSection />
      <FeaturedSection />
      <Footer />
    </main>
  );
}
