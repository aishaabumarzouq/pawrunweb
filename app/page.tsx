import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Coverage from "@/components/Coverage";
import About from "@/components/About";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
 
export const metadata: Metadata = {
  title: "PawRun Kuwait — Mobile Dog Exercise Van",
  description:
    "Kuwait's first mobile dog exercise service. Professional slat-belt treadmill sessions delivered to your door. Book via WhatsApp.",
  openGraph: {
    title: "PawRun Kuwait",
    description: "Your dog's run comes to you.",
    url: "https://pawrunkuwait.com",
    siteName: "PawRun Kuwait",
    locale: "en_KW",
    type: "website",
  },
};
 
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Pricing />
      <Coverage />
      <About />
      <BookingCTA />
      <Footer />
    </main>
  );
}
