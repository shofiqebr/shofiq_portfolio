"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  if (!isMounted) return null; // ⛔ Avoid SSR mismatch by skipping render until mounted

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold tracking-wide">
            <Link href="/">MyPortfolio</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className="hover:text-purple-400 transition">About</Link>
            <Link href="#skills" className="hover:text-purple-400 transition">Skills</Link>
            <Link href="#projects" className="hover:text-purple-400 transition">Projects</Link>
            <Link href="#blog" className="hover:text-purple-400 transition">Blog</Link>
            <Link href="#contact" className="hover:text-purple-400 transition">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white px-4 pt-4 pb-6 space-y-4 transition-all">
          <Link href="#about" onClick={toggleMenu}>About</Link>
          <Link href="#skills" onClick={toggleMenu}>Skills</Link>
          <Link href="#projects" onClick={toggleMenu}>Projects</Link>
          <Link href="#blog" onClick={toggleMenu}>Blog</Link>
          <Link href="#contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
