import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/next.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <nav className="flex justify-between px-12 py-6">
        <Link href="/">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </Link>
        <div className="flex">
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
        <button className="btn btn-primary">
          <Link href="/booking">Book Now</Link>
        </button>
      </nav>
    </main>
  );
}
