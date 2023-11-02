import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Review from "./Review";

function Carousel() {
  const swiper = useSwiper();

  const reviewData = [
    {
      title:
        "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
      name: "Morgana",
      position: "Position 1",
      img: "/avatar1.png",
    },
    {
      title:
        "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
      name: "Nick Cave",
      position: "CMO at Nokia",
      img: "/avatar2.png",
    },
    {
      title:
        "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
      name: "Lana Rosenfeld",
      position: "Senior VP at Pinterest",
      img: "/avatar3.png",
    },
    {
      title:
        "Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.",
      name: "Giorgio Moroder",
      position: "CTO at Glovo",
      img: "/avatar4.png",
    },
  ];

  return (
    <section className="mt-32">
      <h1 className="text-darkBlue font-bold text-4xl text-center">
        What people say about Team
      </h1>
      <Swiper
        breakpoints={{
          320: {
            spaceBetween: 30,
            slidesPerView: 1.4,
            centeredSlides: true,
          },
          568: {
            spaceBetween: 16,
            slidesPerView: 2,
            centeredSlides: false,
          },
          744: {
            spaceBetween: 16,
            slidesPerView: 2.5,
            centeredSlides: false,
          },

          1440: {
            width: 1440,
            spaceBetween: 30,
            slidesPerView: 3,
            centeredSlides: false,
          },
          1980: {
            width: 1440,
            spaceBetween: 30,
            slidesPerView: 1,
            centeredSlides: false,
          },
        }}
        className="sm:h-[525px] h-[465px] xl:h-[480px] mt-20"
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".custom-prev-button",
          nextEl: ".custom-next-button",
        }}
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <Review
              title={review.title}
              name={review.name}
              position={review.position}
              img={review.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={`custom-prev-button sm:ml-20 2xl:ml-36 swiper-button `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M14.6666 6.6665L5.33325 15.9998L14.6666 25.3332M5.33325 15.9998H26.6666"
            stroke="#5468E7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className={`custom-next-button swiper-button`}>
        <svg
          className="rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M14.6666 6.6665L5.33325 15.9998L14.6666 25.3332M5.33325 15.9998H26.6666"
            stroke="#5468E7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}

export default Carousel;
