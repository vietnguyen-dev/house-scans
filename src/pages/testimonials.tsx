import { Inter } from "next/font/google";
import axios from "axios";

import { Navbar } from "@/components/navbar";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export interface iTestimonial {
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

export function Rating(props: { number: number }) {
  const inputElements = Array.from({ length: props.number }, (_, index) => (
    <input
      key={index}
      type="radio"
      name="rating-2"
      className="mask mask-star-2 bg-orange-400 border-2"
      checked
      disabled
    />
  ));

  return <div>{inputElements}</div>;
}

export interface iTestimonialProps {
  testimonials: iTestimonial[];
}

const Testimonials: React.FC<iTestimonialProps> = ({ testimonials }) => {
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <h1 className="text-center my-3 font-bold text-3xl">Testimonials</h1>
      <div className="flex justify-center">
        <div className="px-6 grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="card w-72 bg-base-100 shadow-xl mb-3 mr-3">
                <div className="card-body">
                  <h2 className="card-title">{testimonial.attributes.name}</h2>
                  <div className="rating">
                    <Rating number={testimonial.attributes.rating} />
                  </div>
                  <p className="line-clamp-3">
                    {testimonial.attributes.review}
                  </p>
                  <div className="card-actions justify-end mt-2">
                    <button
                      className="btn btn-sm"
                      onClick={() => {
                        if (document) {
                          (
                            document.getElementById(
                              `testimonial_${testimonial.id}`
                            ) as HTMLFormElement
                          ).showModal();
                        }
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <dialog
                id={`testimonial_${testimonial.id}`}
                className="modal sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    {testimonial.attributes.name}
                  </h3>
                  <p className="py-4">{testimonial.attributes.review}</p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          ))}
        </div>
      </div>
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Testimonials;

export async function getServerSideProps() {
  try {
    const data = await axios.get(`${process.env.API_URL}/testimonials?`);
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
