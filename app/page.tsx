"use client";

import DualCardSection from "@/components/DualContent";
import {
  AndroidMockup,
  AndroidTabMockup,
  IPhoneMockup,
  IPadMockup,
} from "react-device-mockup";

// @ts-expect-error ungabuga
import Card from "react-animated-3d-card";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import AppPreview from "@/components/Preview";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  CircuitBoard,
  Download,
  Dumbbell,
  GitGraph,
  Goal,
  Route,
  User,
  Users,
  Watch,
} from "lucide-react";
import { Pointer } from "@/components/magicui/pointer";
import QRCornerIcon from "@/components/QrCodeDisplay";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <QRCornerIcon />
      <section className="relative h-[80vh] sm:h-screen w-full overflow-hidden rounded-lg">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-h-full min-w-full object-cover z-0 brightness-75"
        >
          <source src="/hero2.mp4" type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center sm:items-start justify-center h-full px-4 sm:px-8 md:px-16 bg-black/30">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl text-white max-w-3xl mb-4 sm:mb-6 text-center sm:text-left"
          >
            BECAUSE YOU DESERVE TO FEEL AMAZING
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white max-w-xl mb-6 sm:mb-8 text-center sm:text-left"
          >
            Join thousands of others achieving their fitness goals with
            personalized plans and expert trainers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-4"
          >
            <button
              onClick={() => {
                const nextSection = document.querySelector(
                  "section:nth-of-type(2)"
                );
                nextSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-theme-green text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:scale-105 duration-300 cursor-pointer"
            >
              Explore Now
            </button>
          </motion.div>
        </div>
      </section>
      <section className="mt-16">
        <div className="text-3xl text-center">
          Where do you belong on your wellness journey?
        </div>
        <div>
          <DualCardSection></DualCardSection>
        </div>
      </section>
      <section
        id="about"
        className="px-4 sm:px-8 md:px-16 py-8 md:py-16 bg-gradient-to-b to-blue-900 from-theme-blue rounded-lg text-white"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* About Us Content */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="w-full">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-8xl text-white"
              >
                About Us
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 md:space-y-6 mt-4 md:mt-6"
              >
                <p className="text-base md:text-lg leading-relaxed">
                  We are passionate about transforming lives through holistic
                  wellness and personalized fitness journeys. Our mission is to
                  make health and fitness accessible to everyone, regardless of
                  where they are in their wellness journey.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  ​Steppps is an app that allows you to build on the habit of
                  'Walking' and create health outcomes for you!
                </p>
              </motion.div>

              {/* Mission and Vision Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                    Our Mission
                  </h3>
                  <p className="text-sm md:text-base text-gray-100">
                    At Steppps, our mission is to make fitness accessible and
                    enjoyable for everyone. We believe that small, consistent
                    steps can lead to significant health improvements. Our app
                    is designed to motivate and empower users to incorporate
                    more physical activity into their daily lives, promoting a
                    healthier and happier lifestyle.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                    Our Vision
                  </h3>
                  <p className="text-sm md:text-base text-gray-100">
                    Our vision at Steppps is to inspire and empower individuals
                    of all fitness levels to embrace a healthier lifestyle
                    through simple, enjoyable, and sustainable habits. We aim to
                    create a global community where every step counts towards
                    better health, fitness, and happiness. By leveraging
                    innovative technology and fostering a supportive
                    environment, we strive to make fitness accessible, engaging,
                    and rewarding for everyone, one step at a time.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Phone Preview - Existing Code */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <Card
              style={{
                background: "#00000000",
                boxShadow: "none",
              }}
            >
              <IPhoneMockup
                className="iphone"
                screenType="notch"
                screenWidth={300}
              >
                <Image src="/preview/1.png" fill alt=""></Image>
              </IPhoneMockup>
            </Card>
          </div>
        </div>
      </section>
      <section className="my-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:text-6xl md:text-3xl text-2xl text-theme-green text-center "
        >
          What you'll get
        </motion.h2>
        <Features />
      </section>
      <section>
        <GroupChallenges />
      </section>
      <section id="blogs">
        <BlogSection />
      </section>
      <section>
        <Testimonials />
      </section>

      <section>
        <AppPreview></AppPreview>
      </section>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: () => <Watch />,
      title: "Track Your Steps",
      description:
        "Monitor your daily steps and progress towards your fitness goals with ease.",
      image: "https://picsum.photos/800",
      color: "#FF6B6B",
    },
    {
      icon: () => <Dumbbell />,
      title: "Fitness Challenges",
      description:
        "Participate in exciting challenges like 'Walk Every Day in 2025' to stay motivated.",
      image: "https://picsum.photos/800",
      color: "#4ECDC4",
    },
    {
      icon: () => <Goal />,
      title: "Set Daily Goals",
      description:
        "Set and achieve daily step goals to keep your fitness journey on track.",
      image: "https://picsum.photos/800",
      color: "#FFD93D",
    },
    {
      icon: () => <Users />,
      title: "Social Sharing",
      description:
        "Share your progress and runs with friends to inspire and compete.",
      image: "https://picsum.photos/800",
      color: "#95E1D3",
    },
    {
      icon: () => <CircuitBoard />,
      title: "Event Leaderboards",
      description:
        "Check leaderboards for events like IPL 2025 to see where you stand.",
      image: "https://picsum.photos/800",
      color: "#FF8B94",
    },
    {
      icon: () => <GitGraph />,
      title: "Workout Stats",
      description:
        "View detailed stats like calories burned, distance covered, and weekly averages.",
      image: "https://picsum.photos/800",
      color: "#98FB98",
    },
    {
      icon: () => <User />,
      title: "Chat with Friends",
      description:
        "Stay connected with friends through in-app chat to discuss your fitness journey.",
      image: "https://picsum.photos/800",
      color: "#87CEFA",
    },
    {
      icon: () => <Route />,
      title: "Explore Trails",
      description:
        "Discover new trails and routes for your runs and walks in your area.",
      image: "https://picsum.photos/800",
      color: "#DDA0DD",
    },
  ];

  return (
    <div
      id="features"
      className="px-4 sm:px-8 md:px-16 py-4 sm:py-6 rounded-lg my-8 sm:my-16"
    >
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => {
            return <ACard key={i} f={f} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

function ACard({ f, i }: { f: any; i: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  return (
    <motion.div
      ref={ref}
      style={{
        y: useTransform(
          scrollYProgress,
          [0, 1],
          [
            i === 0
              ? 100
              : i === 1
              ? 200
              : i === 2
              ? 350
              : i === 3
              ? 170
              : i === 4
              ? 200
              : i === 5
              ? 150
              : i === 6
              ? 200
              : i === 7
              ? 150
              : 0,
            0,
          ]
        ),
      }}
      key={f.title}
      whileHover={{
        background: f.color,
      }}
      className="h-full border-2 border-zinc-200 hover:shadow-xl transition-shadow duration-300 rounded-2xl p-4 sm:p-6 flex flex-col group card hover:text-white"
    >
      <div className="mb-3 sm:mb-4">
        <div
          style={{
            color: f.color,
            background: f.color + 20,
          }}
          className="p-2 sm:p-3 rounded-lg w-fit icon"
        >
          {<f.icon />}
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
        {f.title}
      </h3>

      <p className="text-sm sm:text-base leading-relaxed flex-grow">
        {f.description}
      </p>
    </motion.div>
  );
}

const cards = [
  {
    icon: "🎯",
    title: "By Invite Only",
    description:
      "These challenges are exclusive. You'll need the group name or a special code to join.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: "🔓",
    title: "Flexible Access",
    description:
      "Some groups may charge a fee, others are free—flexible setup for every kind of community.",
    gradient: "from-theme-green/20 to-emerald-500/20",
  },
  {
    icon: "🤝",
    title: "Shared Goals",
    description:
      "Work toward milestones together. Enjoy friendly competition and mutual motivation.",
    gradient: "from-theme-blue/20 to-cyan-500/20",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function GroupChallenges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-16">
      {/* iPhone Preview */}
      <div className="w-full lg:w-1/3 flex justify-center items-center mb-8 lg:mb-0">
        <Card
          style={{
            background: "#00000000",
            boxShadow: "none",
          }}
        >
          <IPhoneMockup
            className="iphone"
            statusbarColor="black"
            screenType="notch"
            screenWidth={250}
          >
            <Image src="/preview/7.png" fill alt=""></Image>
          </IPhoneMockup>
        </Card>
      </div>

      {/* Content Section */}
      <section className="w-full lg:w-2/3 py-8 lg:py-16" ref={ref}>
        <div className="text-center lg:text-left mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-gray-800 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-green to-theme-blue">
              Walk Together, Bond Stronger
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl text-sm sm:text-base">
            Group Challenges are private fitness journeys for friends, family,
            or special communities. Strengthen bonds and build healthy habits
            together—one step at a time.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative h-full bg-white p-6 sm:p-8 rounded-2xl border border-gray-100
                   hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 bg-gradient-to-br ${card.gradient}`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className="mb-4 sm:mb-6 text-3xl sm:text-4xl bg-gray-50 group-hover:bg-white/80
                        w-fit p-3 sm:p-4 rounded-xl transition-all duration-300"
                >
                  {card.icon}
                </div>

                <h3
                  className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 
                       group-hover:text-gray-900"
                >
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 lg:mt-10 flex justify-center lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-teal-500 text-white text-sm sm:text-base 
                     rounded-xl font-medium shadow-md hover:bg-teal-600 transition"
          >
            Create Your Group Challenge
          </motion.button>
        </div>
      </section>
    </div>
  );
}

const blogs = [
  {
    title: "5 Ways to Stay Active Without Going to the Gym",
    description:
      "Learn creative ways to incorporate movement into your day—no gym required!",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "May 10, 2025",
    category: "Lifestyle",
  },
  {
    title: "Walking Challenges that Actually Work",
    description: "Discover step challenges that build habits, not just hype.",
    image:
      "https://images.unsplash.com/photo-1634492859027-11de47469325?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "April 26, 2025",
    category: "Challenges",
  },
  {
    title: "How Group Fitness Strengthens Friendships",
    description: "It’s not just about health—it’s about human connection too.",
    image:
      "https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "March 14, 2025",
    category: "Community",
  },
];

function BlogSection() {
  return (
    <section
      className="from-theme-blue to-blue-900 bg-gradient-to-b rounded-lg px-3  py-16 overflow-hidden"
      // ref={ref}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl text-white">Our Blogs</h2>
        <p className="text-gray-100 mt-2">
          Tips, stories, and insights to keep you moving
        </p>
      </div>

      <Marquee className="overflow-visible">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="w-[280px] sm:w-[320px] md:w-[380px] mx-2 sm:mx-3 bg-white rounded-2xl overflow-hidden shadow-md 
                 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-300"
              />
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                <span
                  className="px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full 
                          text-xs sm:text-sm font-medium text-theme-green"
                >
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="mb-3 sm:mb-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                  {blog.date}
                </p>
                <h3
                  className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 
                        line-clamp-2 transition-colors"
                >
                  {blog.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                  {blog.description}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-gray-100">
                <button
                  className="text-theme-green font-medium text-xs sm:text-sm 
                           inline-flex items-center group/btn"
                >
                  Read More
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform 
                        group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

const testimonials = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
    name: "Kate Davis",
    username: "friable_captain_8",
    rating: 4.9,
    quote:
      "The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of features.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
    name: "Martin Kazlauskas",
    username: "sartorial_statue_59",
    rating: 3.2,
    quote:
      "The app is motivating and easy to use. I love the visual breakdown of progress.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
    name: "Sanjay Sharma",
    username: "voracious_rainbows_68",
    rating: 4.9,
    quote:
      "Love the user experience. The features are well integrated and helpful for tracking workouts.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Starz_2022.svg",
    name: "Tawanna Afumba",
    username: "intransigent_toejam_15",
    rating: 3.2,
    quote:
      "Highly recommend! The app helps me stay accountable to my fitness goals.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Vix_logo.svg",
    name: "Larry King",
    username: "pendulous_unicorn_46",
    rating: 4.9,
    quote:
      "Easy to use and packed with insights. Love the challenges and stats.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    name: "Fatima Mohamed",
    username: "salubrious_artist_72",
    rating: 3.2,
    quote:
      "Fantastic experience! I've improved a lot since I started using the app.",
  },
];

function Testimonials() {
  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          <span className="text-theme-green bg-theme-green/20 px-2 py-1 rounded-md inline-block sm:inline">
            What our community has to say
          </span>
        </h2>
        <p className="text-gray-500 mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Our mission is to drive progress and enhance the lives of our
          customers by delivering superior products and services that exceed
          expectations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-md relative space-y-4 sm:space-y-6 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-sm sm:text-base text-gray-700 italic">
              "{t.quote}"
            </p>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs sm:text-sm font-medium text-gray-800">
                  {t.name}
                </div>
                <div className="text-xs text-gray-400">{t.username}</div>
              </div>
              <div className="text-green-600 font-bold text-xs sm:text-sm flex items-center gap-1">
                {t.rating} <span className="text-yellow-400">⭐</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
