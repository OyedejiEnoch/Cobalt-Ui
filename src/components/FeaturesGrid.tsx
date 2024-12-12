"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import featureImg1 from '@/assets/featureImg1.svg'
import featureImg2 from '@/assets/featureImg2.svg'
import featureImg3 from '@/assets/featureImg3.svg'
import featureImg4 from '@/assets/featureImg4.svg'
import featureImg5 from '@/assets/featureImg5.svg'
import Image from "next/image";

export default function FeaturesGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  // const variants = {
  //   initial: {
  //     x: 0,
  //   },
  //   animate: {
  //     x: 10,
  //     rotate: 5,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };


  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Image src={featureImg1} alt="feature-Image-1" />
    </motion.div>
  );
};
const SkeletonTwo = () => {
  // const variants = {
  //   initial: {
  //     width: 0,
  //   },
  //   animate: {
  //     width: "100%",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   hover: {
  //     width: ["0%", "100%"],
  //     transition: {
  //       duration: 2,
  //     },
  //   },
  // };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Image src={featureImg2} alt="feature-Image-2" />
    </motion.div>
  );
};
const SkeletonThree = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
    >
       <Image src={featureImg3} alt="feature-Image-3" />
    </motion.div>
  );
};
const SkeletonFour = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
       <Image src={featureImg4} alt="feature-Image-4" />
    </motion.div>
  );
};
const SkeletonFive = () => {

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
       <Image src={featureImg5} alt="feature-Image-5" />
   
    </motion.div>
  );
};
const items = [
  {
    title: "Insights at your fingertips",
    description: (
      <span className="text-xs text-white/50">
        All your data and finances in one place to provide quick answers and make decisions instantly.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
  
  },
  {
    title: "Manage in real time",
    description: (
      <span className="text-xs text-white/50">
      Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, its 2024.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "Important business alerts",
    description: (
      <span className="text-xs text-white/50">
        Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "Connect all your apps",
    description: (
      <span className="text-xs text-white/50">
        Bring your data with our built-in integrations for accounting, revenue tools and banking.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },

  {
    title: "You're in control",
    description: (
      <span className="text-xs text-white/50">
       Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode. 
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];
