import ContactForm from "@/components/contactForm/contactForm";

const Connect = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      // className="bg-purple-300 dark:bg-purple-800 w-screen min-h-screen h-content overflow-y-visible md:overflow-hidden pt-32"
      className="w-screen min-h-screen h-content overflow-y-visible md:overflow-hidden pt-32"
    >
      <main className="container flex flex-col justify-center items-center mx-auto p-4 max-w-4xl">
        <h1 className="text-5xl font-urbanist font-bold mb-8 md:mb-[3rem]">
          Connect
        </h1>
        <ContactForm />
      </main>
    </div>
  );
};

export default Connect;
