import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="navbar px-6 py-3 sm:justify-between sm:px-12 sm:py-6">
      <Link href="/" className="flex-1 md:flex-none">
        <Image
          src={"/next.svg"}
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </Link>
      <div className="hidden md:block">
        <Link href="/how-it-works" className="mr-3 xl:mr-6">
          How it Works
        </Link>
        <Link href="/faq" className="mr-3 xl:mr-6">
          FAQs
        </Link>
        <Link href="/testimonials" className="mr-3 xl:mr-6">
          Testimonials
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary flex-none ">
          <Link href="/booking">Book Now</Link>
        </button>
        <button
          className="btn btn-square btn-ghost ml-3 md:hidden"
          onClick={() => {
            if (document) {
              (
                document.getElementById("nav-modal") as HTMLFormElement
              ).showModal();
            }
          }}
        >
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
      <dialog id="nav-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 font-2xl">
              ✕
            </button>
          </form>
          {/* <h3 className="font-bold text-lg">Hello!</h3> */}
          <ul className="py-4 flex flex-col">
            <Link href="/how-it-works" className="mr-3 mb-3 text-right text-xl">
              How it Works
            </Link>
            <Link href="/faq" className="mr-3 mb-3 text-right text-xl">
              FAQs
            </Link>
            <Link href="/testimonials" className="mr-3 xl text-right text-xl">
              Testimonials
            </Link>
          </ul>
        </div>
      </dialog>
    </nav>
  );
};
