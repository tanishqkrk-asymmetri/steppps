"use client";

import { ThreeDMarquee } from "./3d-marquee";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const AppPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Optimize images array by removing duplicates
  const images = [
    "/preview/1.png",
    "/preview/2.png",
    "/preview/3.png",
    "/preview/4.png",
    "/preview/5.png",
    "/preview/6.png",
  ];

  // Repeat the array 5 times for continuous flow
  const repeatedImages = [...Array(5)].flatMap(() => images);

  return (
    <div
      ref={ref}
      className="relative my-10 min-h-screen w-full overflow-hidden rounded-3xl bg-gradient-to-b from-theme-blue/10 to-transparent"
    >
      {/* Content Overlay */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Start Your Journey Today
        </h2>
        <p className="mb-8 max-w-2xl text-lg text-white/90">
          Steppps is your friendly fitness buddy, helping you move more, feel
          better, and make activity part of your daily rhythm.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform"
          >
            <Image
              src="/app.png"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="h-14 w-auto"
            />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition-transform bg-white rounded-md"
          >
            <Image
              src="/play.png"
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="h-14 w-auto"
            />
          </motion.a>

          {/* QR Code */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="ml-4 rounded-lg bg-white p-2"
          >
            <Image
              src="/qr-code.png"
              alt="Scan to download"
              width={100}
              height={100}
              className="h-14 w-14"
            />
          </motion.div> */}
        </div>
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/60" />

      {/* 3D Marquee Background */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={repeatedImages}
      />
    </div>
  );
};

export default AppPreview;
