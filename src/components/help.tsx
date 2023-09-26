import vercel from "../../public/vercel.svg";
import Image from "next/image";

export interface iHelp {
  id: number;
  attributes: {
    how: string;
    description_of_how: string;
    createdAt: Date;
    publishedAt: Date;
    updatedAt: Date;
  };
}

export interface iHelpProps {
  helps: iHelp[];
}

const Help: React.FC<iHelpProps> = ({ helps }) => {
  return (
    <div className="mt-20 px-6 py-3 sm:px-12 sm:py-6" id="how-it-works">
      <h3 className="text-center text-3xl font-bold">How We Can Help You</h3>
      <p className="mt-6 text-center text-lg w-59 mx-auto md:w-96">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </p>
      <div className="p-16  flex justify-center">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3">
          {helps.map((help) => (
            <div
              className="w-52 mb-10  flex justify-center flex-col items-center"
              key={help.id}
            >
              <h4 className="text-lg font-semibold text-center">
                {help.attributes.how}
              </h4>
              <p className="mt-3 text-center">
                {help.attributes.description_of_how}
              </p>
              <Image
                src={vercel}
                width={100}
                height={100}
                alt="viewed more image"
                className="mt-6"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
