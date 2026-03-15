import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import TheModel from "@/components/TheModel";
import TheGuarantee from "@/components/TheGuarantee";
import TheOffers from "@/components/TheOffers";
import Clients from "@/components/Clients";
import Traction from "@/components/Traction";
import WhoItsFor from "@/components/WhoItsFor";
import TheCTA from "@/components/TheCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TheProblem />
      <TheModel />
      <TheGuarantee />
      <TheOffers />
      <Clients />
      <Traction />
      <WhoItsFor />
      <TheCTA />
      <Footer />
    </main>
  );
}
