import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import StudioSection from "./components/StudioSection";
import Pricing from "./components/pricing";
import ContactSection from "./components/contact";
import CTA from "./components/cta";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5efe6] text-[#2f3e34] overflow-hidden">
<Navbar />
<Hero />
<About />
<Services />
<StudioSection />
<Pricing />
<ContactSection />
<CTA />
<Footer />

    </main>
  );
}