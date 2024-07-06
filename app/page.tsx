import About from "@/components/about";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Web from "@/components/Web";
import App from "@/components/App";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <Web />
        <App/>
        <Gallery />
      </div>
    </main>
  );
}
