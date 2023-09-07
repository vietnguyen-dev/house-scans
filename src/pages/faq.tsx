import { Inter } from "next/font/google";

import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Faq() {
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <h1 className="text-center mt-3">FAQs</h1>
    </main>
  );
}
