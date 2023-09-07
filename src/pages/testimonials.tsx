import { Inter } from "next/font/google";
import axios from "axios";

import { Navbar } from "@/components/navbar";

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
      <h1 className="text-center mt-3 font-bold text-3xl">Testimonials</h1>
      <div className="px-6 flex justify-center gap-4">
        {testimonials.map((testimonial) => (
          <div className="card w-72 bg-base-100 shadow-xl" key={testimonial.id}>
            <div className="card-body">
              <h2 className="card-title">{testimonial.attributes.name}</h2>
              <div className="rating">
                <Rating number={testimonial.attributes.rating} />
              </div>
              <p>{testimonial.attributes.review}</p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
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
