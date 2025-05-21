import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Pointer } from "@/components/magicui/pointer";

export default function ExpandingCards() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cards = [
    {
      id: "left",
      title:
        "I’ve been sitting more than I should. My energy’s dropped, the belly’s grown, and honestly — I’m not okay with where this is heading.",
      color: "bg-theme-green",
      img: "/fat.jpg",
      content:
        "This is the expanded content for the left card. It contains more information that is revealed when the card is clicked.",
      data: {
        heading: "📈 Level Up with Steppps!",
        subheading:
          "Make your steps count with fun challenges inside the Steppps app:",
        challenges: [
          {
            title: "🚶 Walk Everyday in 2025",
            description:
              "Start the year right—walk every day and build healthy habits with Steppps.",
          },
          {
            title: "🏏 Support Your IPL Team",
            description:
              "Turn steps into team spirit. Walk, cheer, and show your colors—no pressure, just fun!",
          },
          {
            title: "💎 Personal Challenges (Premium)",
            description:
              "Set private step goals with Steppps Premium. Track your progress, your way.",
          },
        ],
      },
    },
    {
      id: "right",
      title:
        "I’m doing alright. No major issues — and I’d like to keep it that way. I don’t need a coach yelling at me. Just a smart way to stay on track.",
      color: "bg-theme-green",
      img: "/fit.jpg",
      content:
        "This is the expanded content for the right card. It contains more information that is revealed when the card is clicked.",
      data: {
        heading: "🪜Change Starts with One Step",
        subheading:
          "Getting active isn't easy—but you've already started. Keep going with these challenges:",
        challenges: [
          {
            title: "🏆 Walk • Lose • Win",
            description:
              "Join the June 2025 leaderboard and win cash prizes by walking your way to the top!",
          },
          {
            title: "🏏 IPL Team Challenges",
            description:
              "Turn your steps into team pride. Support your IPL team—no competition, just fun.",
          },
          {
            title: "💎 Personal Challenges (Premium)",
            description:
              "Go private with Steppps Premium. Set your own step goals and track progress your way.",
          },
        ],
      },
    },
  ];

  // Improved animation configuration
  const cardTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1,
    duration: 0.5,
  };

  const contentFadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full min-h-screen p-4 flex items-center justify-center overflow-hidden">
      <div className="w-full  h-[90vh] flex flex-col md:flex-row gap-4 relative">
        {selectedCard === null ? (
          // Show both cards if none is selected
          <>
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className={`${card.color} rounded-xl shadow-lg flex-1 cursor-pointer flex flex-col items-center justify-center relative text-white p-6`}
                onClick={() => setSelectedCard(card.id)}
                layoutId={`card-${card.id}`}
                initial={{ opacity: 0.9, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.01,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.2 },
                }}
                transition={cardTransition}
              >
                <AnimatePresence>
                  <motion.img
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="absolute left-0 top-0 h-full w-full object-cover rounded-lg z-0 brightness-[.3]"
                    src={card.img}
                    alt=""
                  />
                </AnimatePresence>
                <div className="z-[99999]">
                  <AnimatePresence>
                    <motion.h2
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      layoutId={`title-${card.id}`}
                      className="text-2xl sm:text-3xl  mb-4 text-center"
                    >
                      {card.title}
                    </motion.h2>
                  </AnimatePresence>
                  <motion.p className="text-lg text-center">
                    Click to expand
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </>
        ) : (
          // Show only the selected card
          <motion.div
            onClick={() => setSelectedCard(null)}
            key={selectedCard}
            layoutId={`card-${selectedCard}`}
            className={`
                ${cards.find((c) => c.id === selectedCard)?.color} 
            rounded-xl shadow-xl w-full flex flex-col cursor-pointer`}
            transition={cardTransition}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center p-6 border-b border-white/20">
              <motion.h2
                layoutId={`title-${selectedCard}`}
                className="text-2xl sm:text-3xl  text-white text-center sm:text-left mb-4 sm:mb-0 max-w-full break-words"
              >
                {cards.find((c) => c.id === selectedCard)?.title}
              </motion.h2>
              {/* <motion.button
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 text-white flex-shrink-0"
                onClick={() => setSelectedCard(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button> */}
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              <motion.div
                variants={contentFadeVariants}
                initial="hidden"
                animate="visible"
                className="text-white text-lg flex flex-col md:flex-row gap-6"
              >
                <section className="w-full md:w-1/2 my-4 md:my-8">
                  <h2 className="text-xl font-bold mb-2">
                    {cards.find((c) => c.id === selectedCard)?.data.heading}
                  </h2>
                  <p className="mb-4 text-base md:text-lg">
                    {cards.find((c) => c.id === selectedCard)?.data?.subheading}
                  </p>

                  <ul className="space-y-4">
                    {cards
                      .find((c) => c.id === selectedCard)
                      ?.data?.challenges.map((challenge, index) => (
                        <li key={index}>
                          <h3 className="font-semibold text-base md:text-lg">
                            {challenge.title}
                          </h3>
                          <p className="text-sm md:text-base">
                            {challenge.description}
                          </p>
                        </li>
                      ))}
                  </ul>
                </section>
                <div className="w-full md:w-1/2">
                  <motion.img
                    className="w-full h-[200px] md:h-4/5 object-cover rounded-lg"
                    src={cards.find((c) => c.id === selectedCard)?.img}
                    alt=""
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
