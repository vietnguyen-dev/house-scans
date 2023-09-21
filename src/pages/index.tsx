import { Inter } from "next/font/google";

import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <div id="hero">
        <h1>3D Scans to help you sell your home</h1>
      </div>
    </main>
  );
}
