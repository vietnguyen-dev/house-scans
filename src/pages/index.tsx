import { Inter } from "next/font/google";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import HowItWorksSlider from "@/components/how-it-works";
import Help from "@/components/help";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <div id="hero" className="px-6 py-3 sm:px-12 sm:py-6">
        <h1 className="text-5xl font-bold text-center mt-3  md:text-left md:w-1/2">
          3D Scans to help you sell your home
        </h1>
        <h3 className="text-lg text-center mt-9 md:text-left md:w-1/2">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </h3>
        <div className="flex flex-col justify-center items-center mt-9 md:items-start">
          <button className="btn btn-primary">
            <Link href="/booking">Book Now</Link>
          </button>
          <button className="btn mt-3">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
      <HowItWorksSlider />
      <Help />
      <Footer />
    </main>
  );
}
