import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/next.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <nav className="navbar px-6 py-3 md:px-12 md:py-6 md:justify-between">
        <Link href="/" className="flex-1 md:flex-none">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </Link>
        <div className="hidden md:block">
          <Link href="/how-it-works" className="mr-3 align-middle">
            How it Works
          </Link>
          <Link href="/faq" className="mr-3">
            FAQs
          </Link>
          <Link href="/testimonials" className="mr-3">
            Testimonials
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-primary flex-none ">
            <Link href="/booking">Book Now</Link>
          </button>
          <button className="btn btn-square btn-ghost ml-3 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </main>
  );
}
