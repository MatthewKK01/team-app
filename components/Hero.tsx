import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="hero mb-10 px-8 md:px-16">
      <div className="flex justify-between items-center pt-8 mb-36">
        <Image src="/Logo.svg" width={138} height={52} alt="logo" />
        <svg
          className="md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 8C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6H20C20.55 6 21 6.45 21 7C21 7.55 20.55 8 20 8H4ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18Z"
            fill="#F5F5F5"
          />
        </svg>
        <nav className=" max-md:hidden">
          <ul className="flex flex-row justify-center items-center gap-4 xl:gap-14">
            <li>Product</li>
            <li>Blog</li>
            <li>Support</li>
            <li>Log In</li>
            <li>
              <button className="capitalize px-11 py-2 bg-softBlue bg-opacity-50 rounded text-offWhite text-lg">
                get access
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="max-xl:container xl:w-[48%]">
        <h1 className="text-4xl font-bold  xl:leading-[64px] xl:text-[50px] text-offWhite mb-4">
          Instant collaboration for remote teams
        </h1>
        <p className="text-base xl:text-lg xl:leading-[27px] font-normal xl:w-[70%] text-offWhite mb-14">
          All-in-one place for your remote team to chat, collaborate and track
          project progress.
        </p>
        <div className="w-full flex  flex-col sm:flex-row gap-4 pb-28">
          <div className="flex sm:flex-1  relative">
            <input
              type="text"
              placeholder="Email"
              className="outline-none w-full px-4 py-3 bg-offWhite rounded border-2 border-[#D1ECFD]"
            />
            <svg
              className="absolute right-4 top-3"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M5.20874 13.5H16.3787L11.4987 18.38C11.1087 18.77 11.1087 19.41 11.4987 19.8C11.8887 20.19 12.5187 20.19 12.9087 19.8L19.4987 13.21C19.8887 12.82 19.8887 12.19 19.4987 11.8L12.9187 5.19996C12.7319 5.0127 12.4783 4.90747 12.2137 4.90747C11.9492 4.90747 11.6956 5.0127 11.5087 5.19996C11.1187 5.58996 11.1187 6.21996 11.5087 6.60996L16.3787 11.5H5.20874C4.65874 11.5 4.20874 11.95 4.20874 12.5C4.20874 13.05 4.65874 13.5 5.20874 13.5Z"
                fill="#7676B2"
              />
            </svg>
          </div>
          <button className="text-offWhite sm:w-auto w-full bg-softBlue rounded px-11 py-3 text-lg font-normal ">
            Get early access
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
