import { useState } from "react";

const HowItWorksSlider = () => {
  const [step, setStep] = useState<number>(1);

  const newStep = (stepNum: number) => {
    setStep(stepNum);
  };

  return (
    <div className="mt-9 px-6 py-3 sm:px-12 sm:py-6" id="how-it-works">
      <h3 className="text-center text-2xl font-bold">How it Works</h3>
      <div className="relative">
        <div className="flex justify-between mt-3">
          <button
            className={`btn btn-circle btn-info z-10`}
            onClick={() => newStep(0)}
          >
            1
          </button>
          <button
            className={`btn btn-circle ${step >= 1 && "btn-info"} z-10`}
            onClick={() => newStep(1)}
          >
            2
          </button>
          <button
            className={`btn btn-circle ${step === 2 && "btn-info"} z-10`}
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
      <div className="mt-3">
        {step === 0 && (
          <div className="card bg-base-100 shadow-xl">
            <figure className="border-black border-2">
              {/* <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              /> */}
              <div>
                <p>placeholder Image 0 </p>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="card bg-base-100 shadow-xl">
            <figure className="border-black border-2">
              {/* <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              /> */}
              <div>
                <p>placeholder Image 1 </p>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="card bg-base-100 shadow-xl">
            <figure className="border-black border-2">
              {/* <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              /> */}
              <div>
                <p>placeholder Image 2 </p>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowItWorksSlider;
