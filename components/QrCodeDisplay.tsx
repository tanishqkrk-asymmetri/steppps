"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function QRCornerIcon() {
  const [isTop, setIsTop] = useState(true);
  const [showQR, setShowQR] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTop(scrollPosition < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show QR code if at top of page or hovering
  useEffect(() => {
    setShowQR(isTop || isHovering);
  }, [isTop, isHovering]);

  return (
    <div className="fixed bottom-8 right-8 z-[999999] max-md:hidden">
      {/* QR Icon Button */}
      <motion.div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        animate={{
          scale: isTop ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Icon Button */}
        <motion.div
          className="w-16 h-16 bg-theme-green rounded-full flex items-center justify-center cursor-pointer shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
            />
          </svg>
        </motion.div>

        {/* QR Code Popup */}
        <AnimatePresence>
          {showQR && (
            <motion.div
              className="absolute bottom-20 right-0 bg-white p-4 rounded-lg shadow-xl w-48"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-center mb-2 text-sm font-medium text-gray-700">
                Scan QR Code
              </div>
              <div className="bg-gray-100 p-1 rounded">
                {/* Placeholder for actual QR code image */}
                <img
                  src="/qr.webp"
                  alt="QR Code"
                  className="w-full h-auto rounded"
                />
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                Scan to download our app
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
