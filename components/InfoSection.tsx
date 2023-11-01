import Image from "next/image";
import React, { useEffect, useRef } from "react";
import img from "../public/img-group-mobile.png";
import img_tablet from "../public/img-tablet.png";
import girl from "../public/girl.png";
import girl_tablet from "../public/girl-tablet.png";
import laptop from "../public/laptop.png";
import laptop_tablet from "../public/laptop-tablet.png";
import calendar from "../public/Calender.png";
import image from "../public/image.png";
import image2 from "../public/image2.png";
import image3 from "../public/image3.png";
import image4 from "../public/image4.png";
import Article from "./Article";

import AnimatedImage from "./AnimatedImage";

function InfoSection() {
  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-[72px]">
      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="w-[300px] h-[288px] sm:w-[280px] sm:h-[360px] md:w-[352px] md:h-[493px]  relative">
          <Image src={img} alt="img" className="md:hidden" fill></Image>
          <Image
            src={img_tablet}
            alt="img"
            className="max-md:hidden"
            fill
          ></Image>
          <AnimatedImage
            classn="float-right mt-4 mr-2"
            src={calendar}
            alt={"calendar"}
          />
        </div>
        <Article
          heading="Chats for your distributed teams"
          paragraph="Team combines the immediacy of real-time chat with an email threading
              model. With Team, you can catch up on important conversations while
              ignoring irrelevant ones."
        />
      </div>

      <div className="flex flex-col gap-6  sm:flex-row-reverse">
        <div className="w-[300px] h-[288px] sm:w-[280px] sm:h-[360px] md:w-[352px] md:h-[493px] relative">
          <Image src={girl} alt={"girl"} fill className="md:hidden" />
          <Image
            src={girl_tablet}
            alt={"girl"}
            fill
            className="max-md:hidden"
          />
          <div className="flex flex-col gap-2 float-right mt-4 mr-2">
            <AnimatedImage classn="" src={image} alt={"image"} />
            <AnimatedImage classn="" src={image2} alt={"image2"} />
          </div>
        </div>
        <Article
          heading="Choose how you want to work"
          paragraph="In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
        />
      </div>

      <div className="flex flex-col gap-6 sm:flex-row">
        <div className="w-[300px] h-[288px] sm:w-[280px] sm:h-[360px] md:w-[352px] md:h-[493px] relative flex">
          <Image src={laptop} alt={"laptop"} fill className="md:hidden" />
          <Image
            src={laptop_tablet}
            alt={"laptop"}
            className="max-md:hidden"
            fill
          />
          <div className="flex flex-col gap-2 self-end ml-4 mb-4">
            <AnimatedImage classn="" src={image3} alt={"image3"} />
            <AnimatedImage classn="" src={image4} alt={"image4"} />
          </div>
        </div>
        <Article
          heading="Move faster with your Team tools"
          paragraph="With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
        />
      </div>
    </section>
  );
}

export default InfoSection;
