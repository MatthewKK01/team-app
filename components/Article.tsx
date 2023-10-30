import Link from "next/link";
import React from "react";

function Article({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) {
  return (
    <article className="flex flex-col gap-6 px-8 sm:gap-0 sm:flex-1">
      <h1 className="text-darkBlue font-bold text-4xl">{heading}</h1>
      <p className="text-base font-normal text-darkBlue mb-12">{paragraph}</p>
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
  );
}

export default Article;
