import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import StyleGuide from "@/components/StyleGuide";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      {/* <StyleGuide /> */}
      <Header />
      <Hero />
      <About />
      <Menu />
      <Contact />
      {/* <StyleGuide /> */}
      <Footer />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
