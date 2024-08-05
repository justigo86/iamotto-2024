import Hero from "@/components/hero/hero";
import { ModeToggle } from "@/components/theme/mode-toggle";
import Navbar from "@/components/nav/navbar";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen items-center justify-between bg-light-fountainBlue dark:bg-dark-oracle">
      <Navbar />
      <ModeToggle />
      <Hero />
    </main>
  );
}
