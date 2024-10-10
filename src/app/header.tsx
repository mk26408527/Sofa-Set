/* eslint-disable react/jsx-no-duplicate-props */
"use client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../public/logo.png";
import cart from "../../public/cart.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md:flex-row bg-customGreen p-4 items-center fixed top-0 w-full z-50">
      <header className="w-full md:w-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white py-2 pl-5 md:pl-28">
          Furni<span className="text-neutral-50 font-semibold">Expert</span>
        </h1>
        <button className="md:hidden text-white mr-5" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      <nav className={`mt-5 md:mt-0 md:ml-20 w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 lg:space-x-16 ml-20 text-white">
          <li className="lg:text-xl text-xs md:text-lg cursor-pointer font-bold underline underline-offset-8 decoration-4 hover:text-white transition ease-out duration-300 transform hover:scale-110">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="lg:text-xl text-xs md:text-lg cursor-pointer font-light hover:text-white transition ease-out duration-300 transform hover:scale-110">
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="lg:text-xl text-xs md:text-lg cursor-pointer font-light hover:text-white transition ease-out duration-300 transform hover:scale-110">
            <Link href="/menu" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li className="lg:text-xl text-xs md:text-lg cursor-pointer font-light hover:text-white transition ease-out duration-300 transform hover:scale-110">
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          </li>
          <li className="lg:text-xl text-xs md:text-lg cursor-pointer font-light hover:text-white transition ease-out duration-300 transform hover:scale-110">
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center -ml-20 md:ml-20 mt-2 md:mt-0">
        <Image 
          src={logo} 
          alt="User Image" 
          className="rounded-full -mt-10" 
          width={25} 
          height={25} 
        />
        <Image 
          src={cart} 
          alt="Cart Image" 
          className="rounded-full ml-3 -mt-10" 
          width={25} 
          height={25} 
        />
      </div>
    </div>
  );
}
