import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import ProductPreview from "@/components/ProductPreview";
import Pricing from "@/components/Pricing";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <Problem />
      <Solution />
      <ProductPreview />
      <Pricing />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
