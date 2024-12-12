"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import dashboardImg from '@/assets/dashboardImg.svg'

export  default function HeroScreenScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        // titleComponent={
        //   <>
        //     <h1 className="text-4xl font-semibold text-black dark:text-white">
        //       Unleash the power of <br />
        //       <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
        //         Scroll Animations
        //       </span>
        //     </h1>
        //   </>
        // }
      >
        <Image
          src={dashboardImg}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top max-md:w-[500px] max-md:h-[300px]"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
