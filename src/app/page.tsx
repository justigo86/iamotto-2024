// import Hero from "@/app/hero/page";
// import Navbar from "@/components/nav/navbar";
// import { ModeToggle } from "@/components/theme/mode-toggle";

// export default function Home({
//   children,
//   searchParams,
// }: Readonly<{
//   children: React.ReactNode;
//   searchParams: { [key: string]: string | string[] | undefined };
// }>) {
//   return (
//     <main className="flex flex-row min-h-screen items-center justify-between bg-light-fountainBlue dark:bg-dark-oracle">
//       <Navbar searchParams={searchParams} />
//       <ModeToggle />
//       {children}
//     </main>
//   );
// }

import Hero from "@/app/hero/page";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen items-center justify-between">
      <Hero />
    </main>
  );
}
