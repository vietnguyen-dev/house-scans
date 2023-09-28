import { Inter } from "next/font/google";

import { Navbar } from "@/components/navbar";
import ContactForm from "@/components/contact";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      {/* <h1 className="text-center mt-3">Contact Us</h1> */}
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  );
}
