import { Inter } from "next/font/google";
import axios from "axios";

import { Navbar } from "@/components/navbar";
import HowItWorksSlider from "@/components/how-it-works";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

import { iWorks } from "@/components/how-it-works";

interface iHowItWorks {
  works: iWorks[];
}

const inter = Inter({ subsets: ["latin"] });

const HowItWorks: React.FC<iHowItWorks> = ({ works }) => {
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <h1 className="text-center mt-3 text-3xl font-bold">How It Works</h1>
      <HowItWorksSlider works={works} title={false} />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default HowItWorks;

export async function getStaticProps() {
  try {
    const worksData = await axios.get(`${process.env.API_URL}/works`);
    const works = worksData.data.data;

    return {
      props: {
        works,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
