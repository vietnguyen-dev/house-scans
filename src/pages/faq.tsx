import { useState } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import axios from "axios";

import { Navbar } from "@/components/navbar";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export interface iFAQ {
  id: number;
  attributes: {
    createdAt: Date;
    answer: string;
    publishedAt: Date;
    question: string;
    updatedAt: Date;
  };
}

export interface iFAQsProps {
  faqs: iFAQ[];
}

const FAQs: React.FC<iFAQsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    if (openIndex === index) {
      // Clicking on the open accordion should close it
      setOpenIndex(null);
    } else {
      // Clicking on a closed accordion should open it
      setOpenIndex(index);
    }
  };
  return (
    <>
      <Head>
        <title>
          360P Scans | FAQs | Frequently Asked Questions | Portland, OR |
          Vancouver, WA
        </title>
        <meta
          name="description"
          content="Frequently asked questions page for 360 Property Scans in the Portland Metro Area."
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
        <h1 className="text-center my-3 font-bold text-3xl">FAQs</h1>
        <div className="mx-3 md:w-2/3 md:mx-auto">
          <div className="join join-vertical">
            {faqs.map((faq, index) => (
              <div
                className="collapse collapse-plus join-item border border-base-300"
                key={index}
              >
                <input
                  type="radio"
                  name="my-accordion-4"
                  checked={openIndex === index}
                  onChange={() => handleAccordionClick(index)}
                />
                <div
                  className="collapse-title text-xl font-medium "
                  onClick={() => handleAccordionClick(index)}
                >
                  <h3 className="text-xl ">{faq.attributes.question}</h3>
                </div>
                <div className="collapse-content">
                  <p>{faq.attributes.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CTA />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default FAQs;

export async function getServerSideProps() {
  try {
    const data = await axios.get(`${process.env.API_URL}/faqs`);
    const faqs = data.data.data;
    return {
      props: {
        faqs,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
