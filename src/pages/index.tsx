import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

import { Navbar } from "@/components/navbar";
import HowItWorksSlider from "@/components/how-it-works";
import Help from "@/components/help";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

import { iTestimonial } from "./testimonials";
import { iFAQ } from "./faq";

const inter = Inter({ subsets: ["latin"] });

interface iHomeProps {
  testimonials: iTestimonial[];
  faqs: iFAQ[];
}

const Home: React.FC<iHomeProps> = ({ testimonials, faqs, works }) => {
  console.log(works);
  return (
    <>
      <Head>
        <title>360 Property Scans | Home</title>
      </Head>
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
        <HowItWorksSlider works={works} />
        <Help />
        <Testimonials testimonials={testimonials} />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const testimonialData = await axios.get(
      `${process.env.API_URL}/testimonials?pagination[pageSize]=3`
    );
    const faqData = await axios.get(`${process.env.API_URL}/faqs`);
    const worksData = await axios.get(`${process.env.API_URL}/works`);
    const testimonials = testimonialData.data.data;
    const faqs = faqData.data.data;
    const works = worksData.data.data;
    return {
      props: {
        testimonials,
        faqs,
        works,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
