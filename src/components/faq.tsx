import { useState } from "react";
import { iFAQsProps } from "@/pages/faq";

const FAQ: React.FC<iFAQsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleAccordionClick = (index: number) => {
    if (openIndex === index) {
      // Clicking on the open accordion should close it
      setOpenIndex(null);
    } else {
      // Clicking on a closed accordion should open it
      setOpenIndex(index);
    }
  };

  return (
    <div className="mt-12 px-6 py-3 sm:px-12 sm:py-6" id="faqs">
      <h3 className="text-center text-3xl font-bold">FAQs</h3>
      <div className="mt-6 mx-3 md:w-2/3 md:mx-auto flex justify-center">
        <div className="join join-vertical">
          {faqs.map((faq, index) => (
            <div
              className="collapse collapse-plus join-item border border-base-300 max-w-lg"
              key={index}
            >
              <input
                type="radio"
                name="my-accordion-4"
                checked={openIndex === index}
                onChange={() => handleAccordionClick(index)}
              />
              <div
                className="collapse-title text-xl font-medium "
                onClick={() => handleAccordionClick(index)}
              >
                <h3 className="text-xl ">{faq.attributes.question}</h3>
              </div>
              <div className="collapse-content">
                <p>{faq.attributes.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
