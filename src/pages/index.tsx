import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";

import { Navbar } from "@/components/navbar";
import HowItWorksSlider from "@/components/how-it-works";
import Help from "@/components/help";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

import { iTestimonial } from "./testimonials";
import { iFAQ } from "./faq";
import { iWorks } from "@/components/how-it-works";
import { iHelp } from "@/components/help";

const inter = Inter({ subsets: ["latin"] });

interface iHomeProps {
  testimonials: iTestimonial[];
  faqs: iFAQ[];
  works: iWorks[];
  helps: iHelp[];
}

const Home: React.FC<iHomeProps> = ({ testimonials, faqs, works, helps }) => {
  return (
    <>
      <Head>
        <title>360 Property Scans | Home</title>
        <meta
          name="description"
          content="Home Page for 360 Property Scans in the Portland Metro Area. Helping you sell your property"
        />
        <meta charSet="UTF-8" />
        <meta name="author" content="David Bagnyuk" />
        <meta name="robots" content="index, follow" />

        {/* Other meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Propert Scans, Sell my house fast, 3D house tours"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Open Graph meta tags (for social sharing) */}
        <meta
          property="og:title"
          content="360 Property Scans PNW | Helping you sell properties in the Portland Metro Area"
        />
        <meta
          property="og:description"
          content="Frequently asked questions page for 360 Property Scans in the Portland Metro Area."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/my-page" />
      </Head>
      <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
        <Navbar />
        <div
          id="hero"
          className="px-6 py-3 md:px-12 md:py-6 lg:py-20 lg:w-1/2 lg:mx-auto"
        >
          <h1 className="text-5xl font-bold text-center mt-3">
            3D Scans to help you sell your property
          </h1>
          <h2 className="text-lg text-center mt-9">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </h2>
          <div className="mt-9 flex flex-col justify-center items-center">
            <button className="btn btn-primary max-w-xs">
              <Link href="/booking">Book Now</Link>
            </button>
            <button className="btn mt-3 max-w-xs">
              <Link href="#contact">Contact Us</Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <iframe
            width="853"
            height="480"
            src="https://my.matterport.com/show/?m=gVhejTqh6qg"
            // frameBorder="0"
            allow="xr-spatial-tracking"
          />
        </div>
        <HowItWorksSlider works={works} title={true} />
        <Help helps={helps} />
        <FAQ faqs={faqs} />
        <Testimonials testimonials={testimonials} />
        <Contact />
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
    const faqData = await axios.get(
      `${process.env.API_URL}/faqs?pagination[pageSize]=3`
    );
    const worksData = await axios.get(`${process.env.API_URL}/works`);
    const helpsData = await axios.get(`${process.env.API_URL}/helps`);
    const testimonials = testimonialData.data.data;
    const faqs = faqData.data.data;
    const works = worksData.data.data;
    const helps = helpsData.data.data;
    return {
      props: {
        testimonials,
        faqs,
        works,
        helps,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
