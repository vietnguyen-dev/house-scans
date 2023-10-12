import { Inter } from "next/font/google";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY!;

export default function Booking() {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <h1 className="text-center my-3 font-bold text-3xl">
        Book an Appointment
      </h1>
      <div className="p-6">
        <InlineWidget url={calendlyUrl} />
      </div>
      <Footer />
    </main>
  );
}
