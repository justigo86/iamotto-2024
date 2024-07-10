import Hero from "@/components/hero/hero";
import Navbar from "@/components/nav/navbar";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen items-center justify-between">
      <Hero />
    </main>
  );
}
