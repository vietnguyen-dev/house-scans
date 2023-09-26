import vercel from "../../public/vercel.svg";
import Image from "next/image";

const Help = () => {
  return (
    <div className="mt-20 px-6 py-3 sm:px-12 sm:py-6" id="how-it-works">
      <h3 className="text-center text-3xl font-bold">How We Can Help You</h3>
      <p className="mt-6 text-center text-lg w-59 mx-auto md:w-96">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </p>
      <div className="p-16 border-2 border-black flex justify-center">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3">
          <div className="w-52 border-2 border-black flex justify-center flex-col items-center">
            <h4 className="text-lg font-semibold text-center">
              We Help Your home get Viewed More
            </h4>
            <p className="mt-3 text-center">
              On average homes with 3D scans get viewed 40% more on platforms
              like redfin and zillow than properties that dont
            </p>
            <Image
              src={vercel}
              width={100}
              height={100}
              alt="viewed more image"
              className="mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
