import { useState } from "react";

const HowItWorksSlider = () => {
  const [progress, setProgress] = useState<number>(0);

  const newStep = (percent: number) => {
    setProgress(percent);
  };

  return (
    <div className="mt-9 px-6 py-3 sm:px-12 sm:py-6" id="how-it-works">
      <h3 className="text-center text-2xl font-bold">How it Works</h3>
      <div className="flex justify-between mt-3">
        <button
          className={`btn btn-circle btn-accent`}
          onClick={() => newStep(0)}
        >
          1
        </button>
        <button
          className={`btn btn-circle ${progress > 49 && "btn-accent"}`}
          onClick={() => newStep(50)}
        >
          2
        </button>
        <button
          className={`btn btn-circle ${progress > 99 && "btn-accent"}`}
          onClick={() => newStep(100)}
        >
          3
        </button>
      </div>
      <progress
        className="progress w-full mx-auto"
        value={progress}
        max="100"
      ></progress>
    </div>
  );
};

export default HowItWorksSlider;
