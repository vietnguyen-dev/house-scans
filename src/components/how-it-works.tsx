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
          onClick={() => newStep(33)}
        >
          1
        </button>
        <button
          className={`btn btn-circle ${progress > 65 && "btn-accent"}`}
          onClick={() => newStep(66)}
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
        className="progress w-full mx-auto relative top-1"
        value={progress}
        max="100"
      ></progress>
    </div>
  );
};

export default HowItWorksSlider;
