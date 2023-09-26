import React, { useState } from "react";
import Link from "next/link";

export interface iWorks {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: Date;
    publishedAt: Date;
    updatedAt: Date;
  };
}

interface iHowItWorksSliderProps {
  works: iWorks[];
}

const HowItWorksSlider: React.FC<iHowItWorksSliderProps> = ({ works }) => {
  const [step, setStep] = useState<number>(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [endX, setEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (startX !== null && endX !== null) {
      const deltaX = endX - startX;

      if (deltaX > 0 && step !== 0) {
        setStep(step - 1);
      } else if (deltaX < 0 && step !== 2) {
        setStep(step + 1);
      }
    }
  };

  const newStep = (stepNum: number) => {
    setStep(stepNum);
  };

  return (
    <div className="mt-16 px-6 py-3 sm:px-12 sm:py-6" id="how-it-works">
      <h3 className="text-center text-3xl font-bold">How it Works</h3>
      <div className="relative md:w-1/2 md:left-1/4 lg:hidden">
        <div className="flex justify-between mt-3">
          <button
            className={`btn btn-circle btn-info z-10 text-white`}
            onClick={() => newStep(0)}
          >
            1
          </button>
          <button
            className={`btn btn-circle ${
              step >= 1 && "btn-info text-white"
            } z-10 t`}
            onClick={() => newStep(1)}
          >
            2
          </button>
          <button
            className={`btn btn-circle ${
              step === 2 && "btn-info text-white"
            } z-10`}
            onClick={() => newStep(2)}
          >
            3
          </button>
        </div>
        <progress
          className="progress progress-info w-full mx-auto absolute top-5 z-0"
          value={step * 50}
          max="100"
        ></progress>
      </div>
      <div className="mt-6 lg:hidden">
        {step === 0 && (
          <div
            className="card bg-base-100 shadow-xl md:w-1/2 md:left-1/4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <figure>
              <img
                src="/book-an-appointment.jpg"
                alt="Shoes"
                className="rounded-xl"
                height={200}
                width={350}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{works[0].attributes.title}</h2>
              <p>{works[0].attributes.description}</p>
              <div className="card-actions mt-3">
                <button className="btn btn-primary flex-none ">
                  <Link href="/booking">Book Now</Link>
                </button>
              </div>
            </div>
          </div>
        )}
        {step === 1 && (
          <div
            className="card bg-base-100 shadow-xl md:w-1/2 md:left-1/4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <figure>
              <img
                src="/scan-property.jpg"
                alt="Shoes"
                className="rounded-xl"
                height={200}
                width={350}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{works[1].attributes.title}</h2>
              <p>{works[1].attributes.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div
            className="card bg-base-100 shadow-xl md:w-1/2 md:left-1/4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <figure>
              <img
                src="/email-notify.jpeg"
                alt="Shoes"
                className="rounded-xl"
                height={200}
                width={350}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{works[2].attributes.title}</h2>
              <p>{works[2].attributes.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden mt-3 lg:block">
        <div className="flex gap-4 mx-24">
          {works.map((work) => (
            <div className="card bg-base-100 w-96 shadow-xl" key={work.id}>
              <figure>
                <img
                  src="/email-notify.jpeg"
                  alt="Shoes"
                  className="rounded-xl"
                  height={300}
                  width={350}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{work.attributes.title}</h2>
                <p>{work.attributes.description}</p>
                <div className="card-actions">
                  <button className="btn btn-primary flex-none mt-3">
                    <Link href="/booking">Book Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSlider;
