import Image from "next/image";
import React from "react";

function Review({ name, position, img, title }) {
  return (
    <div className="bg-white w-full reviewDiv shadow-review">
      <div className="flex-row flex mb-6">
        {Array(5)
          .fill(0)
          .map(() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M15.9849 22.9296C16.1425 22.836 16.3386 22.8362 16.496 22.93L22.1124 26.2767L22.1125 26.2767C22.7775 26.6733 23.5513 26.0801 23.3863 25.3811L21.8976 19.088C21.8545 18.9055 21.917 18.7143 22.0596 18.5926L27.0263 14.3526L27.0265 14.3524C27.5863 13.8749 27.2973 12.9573 26.5405 12.898L26.5379 12.8978L20.0013 12.3511C19.8172 12.3357 19.6566 12.2201 19.5836 12.0504L17.0258 6.10375L17.0252 6.10217C16.7377 5.42753 15.7424 5.42753 15.455 6.10217L15.4542 6.10413L12.8964 12.0375C12.8233 12.2069 12.6628 12.3224 12.4789 12.3378L5.94229 12.8845L5.93968 12.8847L5.93968 12.8847C5.18288 12.944 4.89383 13.8616 5.45368 14.3391L5.45385 14.3392L10.4206 18.5792C10.5632 18.701 10.6257 18.8922 10.5825 19.0746L9.09391 25.3677L15.9849 22.9296ZM15.9849 22.9296L10.3686 26.2629L10.3677 26.2634M15.9849 22.9296L10.3677 26.2634M10.3677 26.2634C9.70275 26.6599 8.92907 26.0669 9.09386 25.368L10.3677 26.2634Z"
                fill="#FFBA79"
                stroke="#FFBA79"
                stroke-linejoin="round"
              />
            </svg>
          ))}
      </div>
      <p className="mb-10 font-normal sm:text-base xl:text-lg xl:leading-[27px] xl:flex-1">
        {title}
      </p>
      <div className="flex gap-4 justify-center items-center">
        <Image width={56} height={56} src={img} alt="" />
        <div>
          <h1>{name}</h1>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
