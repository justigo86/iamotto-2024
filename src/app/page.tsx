import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen items-center justify-between">
      <Navbar />
      <Hero />
    </main>
  );
}
