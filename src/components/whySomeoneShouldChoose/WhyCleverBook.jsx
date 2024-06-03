import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    name: "Variety",
    title: "Extensive Genre Collection",
    content: 10,
  },
  {
    name: "Plan",
    title: "Subscription and Membership Plans",
    content: 79,
  },
  {
    name: "Ratings",
    title: "Rating and Review System",
    content: 4,
  },
];

export default function WhyCleverBook() {
  const ref = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);
  const isInView = useInView(ref, { amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("ScrollYProgress change detected:", latest);
    setScrollValue(latest);
    const cardsBreakpoints = content.map((_, index) => index / contentLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    if (isInView) {
      const timerId = setInterval(() => {
        setCountdown((prevSeconds) => {
          if (prevSeconds < content[activeCard].content) {
            return prevSeconds + 1;
          } else if (prevSeconds > content[activeCard].content) {
            return prevSeconds - 1;
          } else {
            clearInterval(timerId);
            return prevSeconds;
          }
        });
      }, 0.00001);
    }
  }, [activeCard, isInView]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="min-h-[300vh] max-h-[300vh]  relative"
      ref={ref}
    >
      <div className="h-screen sticky top-0 flex flex-col justify-center lg:gap-0 lg:flex-row lg:items-center ">
        {/* Scroll and title */}
        <div className=" h-fit flex pl-10 pt-5 lg:h-fit lg:p-0 lg:absolute lg:left-14 lg:top-[23%]">
          {/* left body */}
          <div className="flex items-center gap-10 tracking-tighter text-xl">
            {/* scroll bar */}
            <div className="transform -translate-x-1/2 bg-gray-200 w-1 h-full rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full"
                style={{ height: `${scrollValue * 100}%` }}
              ></div>
            </div>
            {/* ---------- */}

            {/* texts */}
            <div className="space-y-5">
              {content.map((item, index) => (
                <div key={item.title + index} className="">
                  <motion.h2
                    className={`${
                      activeCard === index ? "border" : null
                    } px-6 py-2 rounded-full`}
                  >
                    {item.name}
                  </motion.h2>
                </div>
              ))}
            </div>
            {/* ---------- */}
          </div>
        </div>

        {/* Right body */}
        <div className="text-center h-1/2 flex justify-center items-center pt-12 lg:p-0 ">
          <div className=" space-y-8">
            {content[activeCard].name === "Variety" && (
              <>
                <div className="text-8xl">
                  {countdown}
                  <span className="text-6xl">K+</span>
                </div>
                <div className="text-2xl font-semibold">
                  {content[activeCard].title}
                </div>
              </>
            )}
            {content[activeCard].name === "Plan" && (
              <>
                <div className="text-8xl">
                  {countdown}
                  <span className="text-2xl">Rs Monthly</span>
                </div>
                <div className="text-2xl font-semibold">
                  {content[activeCard].title}
                </div>
              </>
            )}

            {content[activeCard].name === "Ratings" && (
              <>
                <div className="text-8xl">
                  {countdown}
                  <span className="text-6xl">/5</span>
                </div>
                <div className="text-2xl font-semibold">
                  {content[activeCard].title}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// export default function WhyCleverBook() {
//   return (
//     <>
//       <StickyScroll content={content} />
//     </>
//   );
// }
