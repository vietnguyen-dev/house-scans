import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  return (
    <nav className="navbar px-6 py-3 md:px-12 md:py-6 md:justify-between">
      <Link href="/" className="flex-1 md:flex-none">
        <Image
          src={"/next.svg"}
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
        <button
          className="btn btn-square btn-ghost ml-3 md:hidden"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          {showMobileNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
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
          )}
        </button>
      </div>
      {showMobileNav && (
        <ul className="flex absolute right-5 top-16 menu bg-base-200 w-56 h-28 rounded-box md:hidden">
          <Link href="/how-it-works">How it Works</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/testimonials">Testimonials</Link>
        </ul>
      )}
    </nav>
  );
};
