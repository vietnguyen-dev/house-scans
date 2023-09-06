import { Inter } from "next/font/google";

import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

function Rating() {
  const inputElements = Array.from({ length: 5 }, (_, index) => (
    <input
      key={index}
      type="radio"
      name="rating-2"
      className="mask mask-star-2 bg-orange-400"
      checked
      disabled
    />
  ));

  return <div>{inputElements}</div>;
}

export default function Testimonials() {
  return (
    <main className={`${inter.className}`}>
      <Navbar />
      <h1 className="text-center mt-3 font-bold text-3xl">Testimonials</h1>
      {/* <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">George Wallen</h2>
            <div className="rating">
              <Rating />
            </div>
            <p>
              If a dog chews shoes whose shoes does he choose? If a dog chews
              shoes whose shoes does he choose? If a dog chews shoes whose shoes
              does he choose?
            </p>
          </div>
        </div>
      </div> */}
    </main>
  );
}
