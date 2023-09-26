import { Inter } from "next/font/google";
import axios from "axios";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const Service = () => {
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <h1 className="text-center mt-3">Areas we Serve</h1>
      <Footer />
    </main>
  );
};

export default Service;
