import { Inter } from "next/font/google";
import axios from "axios";

import { Navbar } from "@/components/navbar";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

interface iTestimonial {
  id: number;
  attributes: {
    createdAt: Date;
    name: string;
    publishedAt: Date;
    rating: number;
    review: string;
    updatedAt: Date;
  };
}

function Rating(props: { number: number }) {
  const inputElements = Array.from({ length: props.number }, (_, index) => (
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

export default function Testimonials({
  testimonials,
}: {
  testimonials: iTestimonial[];
}) {
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <h1 className="text-center my-3 font-bold text-3xl">Testimonials</h1>
      <div className="flex justify-center">
        <div className="px-6 grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              className="card w-72 bg-base-100 shadow-xl mb-3 mr-3"
              key={testimonial.id}
            >
              <div className="card-body">
                <h2 className="card-title">{testimonial.attributes.name}</h2>
                <div className="rating">
                  <Rating number={testimonial.attributes.rating} />
                </div>
                <p>{testimonial.attributes.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTA />
      <Footer />
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const data = await axios.get(`${process.env.API_URL}/testimonials`);
    const testimonials = data.data.data;
    return {
      props: {
        testimonials,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
