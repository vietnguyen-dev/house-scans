import { Inter } from "next/font/google";
import { InlineWidget } from "react-calendly";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY!;

export default function Booking() {
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <h1 className="text-center font-bold text-3xl">Book an Appointment</h1>
      <div className="p-10">
        <InlineWidget url={calendlyUrl} />
      </div>
      <Footer />
    </main>
  );
}
