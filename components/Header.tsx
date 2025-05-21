"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide header when scrolling down, show when scrolling up
    const diff = latest - lastScrollY;
    if (diff > 0) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(latest);
    // Update background color state
    setIsScrolled(latest > 200);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed mt-3 px-4 md:px-8 lg:px-16 top-0 left-1/2 -translate-x-1/2 right-0 z-50 transition-all duration-300 w-[98%] rounded-lg ${
        isScrolled ? "bg-zinc-100 shadow-xl" : "bg-transparent"
      }
      ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-full">
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden z-[9999999999]"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>

          {/* Logo - Moved to left on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 md:space-x-3"
          >
            <Image
              src="/logo.webp"
              alt="FitLife Logo"
              width={120}
              height={40}
              className="object-contain w-8 md:w-10"
            />
            <div
              className={`text-xl md:text-2xl ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Steppps
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            {["About", "Blogs", "Features"].map((item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                href={`#${item.toLowerCase()}`}
                className={`${
                  isScrolled ? "text-black" : "text-white"
                } hover:text-theme-green duration-300`}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="fixed -top-1 left-1/2 -translate-x-1/2 bg-black/80 h-screen w-[98%]  rounded-lg"
              >
                <nav className="flex lg:hidden  gap-10 underline text-4xl items-center justify-center flex-col h-full">
                  {["About", "Blogs", "Features"].map((item, index) => (
                    <motion.a
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      href={`#${item.toLowerCase()}`}
                      className={` text-white hover:text-theme-green duration-300`}
                    >
                      {item}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Get Started Button - Hidden on mobile */}
          <div className="hidden md:flex justify-end items-center">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-theme-green text-white px-4 md:px-6 py-2 rounded-full hover:scale-105 duration-200 cursor-pointer text-sm md:text-base"
            >
              Get started →
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
