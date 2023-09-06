import { Inter } from "next/font/google";

import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Booking() {
  return (
    <main className={`${inter.className} `}>
      <Navbar />
      <h1 className="text-center mt-3">Book an Appointment</h1>
    </main>
  );
}
