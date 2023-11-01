import Image from "next/image";
import React, { useEffect } from "react";
import mockup_sm from "../public/mockup-sm.png";
import mockup_tablet from "../public/mockup-tablet.png";
import mockupMobile from "../public/mockup-mobile.png";
import mockup_desktop from "../public/mockup-desktop.png";
import Link from "next/link";

function Mockup() {
  return (
    <section className="py-16 2xl:pl-36 flex 2xl:flex-row-reverse 2xl:items-center 2xl:gap-14 flex-col mb-10">
      <Image
        src={mockupMobile}
        className="float-right self-end sm:hidden"
        objectFit="contain"
        alt="mockup"
      />
      <Image
        src={mockup_sm}
        className="float-right self-end max-sm:hidden md:hidden"
        objectFit="contain"
        alt="mockup"
      />
      <Image
        src={mockup_tablet}
        className="float-right self-end max-md:hidden lg:hidden"
        objectFit="contain"
        alt="mockup"
      />
      <Image
        src={mockup_desktop}
        className="float-right self-end max-lg:hidden"
        objectFit="contain"
        alt="mockup"
      />
      <article className="flex flex-col  px-8 md:px-[64px] 2xl:px-0">
        <h1 className="text-darkBlue font-bold md:w-3/4 text-4xl md:text-5xl md:mb-6 md:leading-[64px]">
          Chats for your distributed teams
        </h1>
        <p className="text-base font-normal text-darkBlue mb-12 md:w-11/12">
          Team combines the immediacy of real-time chat with an email threading
          model. With Team, you can catch up on important conversations while
          ignoring irrelevant ones.
        </p>
        <Link
          className="text-softBlue text-base font-medium flex ga-2 items-center"
          href={"/"}
        >
          Learn More
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g filter="url(#filter0_d_323_1022)">
                <path
                  d="M20.1485 13.7549H6.38599C5.69849 13.7549 5.13599 14.3174 5.13599 15.0049C5.13599 15.6924 5.69849 16.2549 6.38599 16.2549H20.1485V18.4924C20.1485 19.0549 20.8235 19.3299 21.211 18.9299L24.686 15.4424C24.9235 15.1924 24.9235 14.8049 24.686 14.5549L21.211 11.0674C20.8235 10.6674 20.1485 10.9549 20.1485 11.5049V13.7549Z"
                  fill="#5468E7"
                />
              </g>
              <defs></defs>
            </svg>
          </span>
        </Link>
      </article>
    </section>
  );
}

export default Mockup;
