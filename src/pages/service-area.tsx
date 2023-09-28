import { Coming_Soon, Inter } from "next/font/google";
import Map from "react-map-gl";

import { Navbar } from "@/components/navbar";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const Service = () => {
  const mapboxURL = process.env.NEXT_PUBLIC_MAPBOX_KEY;
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <h1 className="text-center mt-3 text-3xl font-bold">Areas we Serve</h1>
      <div className="flex flex-col justify-center items-center mt-4 mb-12">
        <Map
          mapLib={import("mapbox-gl")}
          initialViewState={{
            longitude: -122.676483,
            latitude: 45.6537,
            zoom: 9.5,
          }}
          style={{ width: "95%", height: "400px" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={mapboxURL}
          interactive={false}
        />
        <p className="text-center my-20">
          We are currently servicing the Portland Metro Area
        </p>
      </div>
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
};

export default Service;
