"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (
          section &&
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand with active pulse signal */}
          <motion.div
            className="flex items-center space-x-2 text-2xl font-bold tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">Md. Shofiqul Islam</Link>
            {/* Active signal pulse */}
            <motion.span
              className="relative flex h-3 w-3"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </motion.span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative group pb-1"
                  onClick={() => setActive(link.href)}
                >
                  {link.label}
                  {/* Hover underline */}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-400 transition-all group-hover:w-full"></span>

                  {/* Active full-width underline with animation */}
                  {active === link.href && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-[pulse_2s_infinite]"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center bg-gray-800 text-white px-4 pt-4 pb-6 space-y-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
                setActive(link.href);
              }}
              className="relative group pb-1"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-400 transition-all group-hover:w-full"></span>

              {active === link.href && (
                <motion.span
                  layoutId="activeUnderlineMobile"
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-[pulse_2s_infinite]"
                />
              )}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
