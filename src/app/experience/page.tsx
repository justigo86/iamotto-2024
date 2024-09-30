import React from "react";
import bgSmart from "/public/SmartBrainCapture.jpg";
import Image from "next/image";
// import { Card } from "@/components/ui/card";

const sparqTags: string[] = [
  "React",
  "Angular",
  "TypeScript",
  "SQL",
  "Splunk",
  "AWS",
];
const augTechTags: string[] = ["SQL"];
const rootTags: string[] = ["HTML", "CSS", "JavaScript"];

const Experience = () => {
  return (
    <div className="bg-orange-200 dark:bg-orange-600 w-screen min-h-screen h-content overflow-y-visible md:overflow-hidden pt-32">
      <main className="container flex flex-col items-center mx-auto p-4 max-w-4xl">
        <h1 className="text-5xl font-urbanist font-bold">Experience</h1>
        <div className="max-w-7xl">
          <div className="py-12 md:py-8 flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-10 ">
            <div className="col-span-3 flex flex-col gap-4 md:grid md:grid-cols-5">
              <header className="col-span-1">2021 - Present</header>
              <div className="col-span-4 flex flex-col gap-4">
                <h3 className="font-extrabold">Developer - Sparq Holdings</h3>
                <p>
                  Worked on several projects in web-design (frontend, backend,
                  and fullstack), web-based software development, and database
                  management/analysis.
                </p>
                <ul className="flex gap-2 pt-2 flex-wrap">
                  {sparqTags.map((tag) => {
                    return (
                      <li
                        key={tag}
                        className="border border-slate-300 rounded-lg px-2"
                      >
                        {tag}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={bgSmart} alt="Sparq"></Image>
            </div>
          </div>

          <div className="py-8 flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-10">
            <div className="col-span-3 flex flex-col gap-4 md:grid md:grid-cols-5">
              <header className="col-span-1">2021 - 2021</header>
              <div className="col-span-4 flex flex-col gap-4">
                <h3 className="font-extrabold">
                  Freelance Web Developer - Root (FnA Developments LLC)
                </h3>
                <p>
                  Frontend contract work to update company&apos;s BigCommerce
                  website.
                </p>
                <ul className="flex gap-2 pt-2 flex-wrap">
                  {rootTags.map((tag) => {
                    return (
                      <li
                        key={tag}
                        className="border border-slate-300 rounded-lg px-2"
                      >
                        {tag}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={bgSmart} alt="Sparq"></Image>
            </div>
          </div>

          <div className="py-8 flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-10">
            <div className="col-span-3 flex flex-col gap-4 md:grid md:grid-cols-5">
              <header className="col-span-1">2019 - 2021</header>
              <div className="col-span-4 flex flex-col gap-4">
                <h3 className="font-extrabold">
                  Registrar - Augusta Technical College
                </h3>
                <p>
                  As department director, my role focused on data management.
                  This included maintaining and distributing confidential data
                  in accordance with institutional, state, and FERPA
                  regulations. Data managed via MySQL database. Duties also
                  included managing department budget, contracts, and all staff.
                </p>
                <ul className="flex gap-2 pt-2 flex-wrap">
                  {augTechTags.map((tag) => {
                    return (
                      <li
                        key={tag}
                        className="border border-slate-300 rounded-lg px-2"
                      >
                        {tag}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={bgSmart} alt="Sparq"></Image>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// const Experience = () => {
//   return (
//     <div className="bg-orange-200 dark:bg-orange-600 w-screen min-h-screen h-content overflow-y-visible md:overflow-hidden flex flex-col items-center pt-32">
//       <h1 className="text-5xl font-urbanist font-bold">Experience</h1>
//       <div className="max-w-7xl">
//         <div className="py-8 px-8 grid grid-cols-4 gap-10">
//           <div className="col-span-3 grid grid-cols-5">
//             <header className="col-span-1">2021 - Present</header>
//             <div className="col-span-4">
//               <h3>Developer - Sparq Holdings</h3>
//               <p>
//                 Worked on several projects in web-design (frontend, backend, and
//                 fullstack), web-based software development, and database
//                 management/analysis.
//               </p>
//               <ul className="flex gap-2 pt-2 flex-wrap">
//                 {sparqTags.map((tag) => {
//                   return (
//                     <li
//                       key={tag}
//                       className="border border-slate-300 rounded-lg px-2"
//                     >
//                       {tag}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//           <div className="col-span-1 hidden md:block">
//             <Image src={bgSmart} alt="Sparq"></Image>
//           </div>
//         </div>

//         <div className="py-8 px-8 grid grid-cols-4 gap-10">
//           <div className="col-span-1">
//             <Image src={bgSmart} alt="Sparq"></Image>
//           </div>
//           <div className="col-span-3 grid grid-cols-5">
//             <header className="col-span-1">2021 - 2021</header>
//             <div className="col-span-4">
//               <h3>Freelance Web Developer - Root (FnA Developments LLC)</h3>
//               <p>
//                 Frontend contract work to update company&apos;s BigCommerce
//                 website.
//               </p>
//               <ul className="flex gap-2 pt-2 flex-wrap">
//                 {rootTags.map((tag) => {
//                   return (
//                     <li
//                       key={tag}
//                       className="border border-slate-300 rounded-lg px-2"
//                     >
//                       {tag}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="py-8 px-8 grid grid-cols-4 gap-10">
//           <div className="col-span-3 grid grid-cols-5">
//             <header className="col-span-1">2019 - 2021</header>
//             <div className="col-span-4">
//               <h3>Registrar - Augusta Technical College</h3>
//               <p>
//                 As department director, my role focused on data management. This
//                 included maintaining and distributing confidential data in
//                 accordance with institutional, state, and FERPA regulations.
//                 Data managed via MySQL database. Duties also included managing
//                 department budget, contracts, and all staff.
//               </p>
//               <ul className="flex gap-2 pt-2 flex-wrap">
//                 {augTechTags.map((tag) => {
//                   return (
//                     <li
//                       key={tag}
//                       className="border border-slate-300 rounded-lg px-2"
//                     >
//                       {tag}
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//           <div className="col-span-1">
//             <Image src={bgSmart} alt="Sparq"></Image>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Experience;
