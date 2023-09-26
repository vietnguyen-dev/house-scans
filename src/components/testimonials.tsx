import { iTestimonialProps, Rating } from "@/pages/testimonials";

const Testimonials: React.FC<iTestimonialProps> = ({ testimonials }) => {
  return (
    <div className="px-6 py-3 sm:px-12 sm:py-6">
      <h3 className="text-center text-3xl font-bold">Testimonials</h3>
      <div className="flex justify-center ">
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
    </div>
  );
};

export default Testimonials;
