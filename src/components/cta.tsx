import Link from "next/link";

const CTA = () => {
  return (
    <div className="flex flex-col items-center my-32 mx-3">
      <h3 className="text-center mb-10 text-xl">
        Boost your home sale with 3D scans! 🏡 <br />
        Elevate your listing – 3D-sell your house now!
      </h3>
      <button className="btn btn-primary z-50">
        <Link href="/booking">Book Now</Link>
      </button>
    </div>
  );
};

export default CTA;
