import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo/Title */}
        <div className="text-white font-bold text-2xl">
          <Link href="/">🎉 Happy Birthday Putta</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-500 md:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="block text-white text-lg px-4 py-2 hover:text-purple-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className="block text-white text-lg px-4 py-2 hover:text-purple-200 transition duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/videos"
            className="block text-white text-lg px-4 py-2 hover:text-purple-200 transition duration-300"
          >
            Videos
          </Link>
          <Link
            href="/wishes"
            className="block text-white text-lg px-4 py-2 hover:text-purple-200 transition duration-300"
          >
            Wishes
          </Link>
        </div>
      </div>
    </nav>
  );
}
