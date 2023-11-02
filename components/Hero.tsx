import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "flowbite";

function Hero() {
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>();
  const handleDropdown = () => {
    setIsActive(!isActive);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = async () => {
    // Fetch to your API endpoint to send the email
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    // Handle the response as needed
    if (response.ok) {
      // Show a success message or perform any other actions
      console.log("Email sent successfully!");
    } else {
      console.error("Failed to send email");
    }
  };
  const handleOutsideClick = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="hero mb-10 px-8 2xl:px-36 md:px-16">
      <div className="flex justify-between items-center pt-8 mb-36">
        <Image src="/Logo.svg" width={138} height={52} alt="logo" />
        <div
          ref={menuRef}
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className={`md:hidden p-[14px] cursor-pointer rounded-t-md ${
            isActive && `bg-[#232340]`
          }`}
        >
          <svg
            onClick={handleDropdown}
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
        </div>

        <div id="dropdown" className="  z-10 hidden">
          <ul className="flex flex-col bg-[#232340] absolute -top-3 -right-[26px] rounded-b-lg rounded-tr-none rounded-t-lg p-5  gap-4 xl:gap-14">
            <li>Product</li>
            <li>Blog</li>
            <li>Support</li>
            <li>Log In</li>
            <li>
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className="capitalize whitespace-nowrap px-11 py-2 bg-softBlue bg-opacity-50 rounded text-offWhite text-lg"
              >
                get access
              </button>
            </li>
          </ul>
        </div>

        <nav className=" max-md:hidden">
          <ul className="flex flex-row items-center justify-center  gap-4 xl:gap-14">
            <li>Product</li>
            <li>Blog</li>
            <li>Support</li>
            <li>Log In</li>
            <li>
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className="capitalize px-11 py-2 bg-softBlue bg-opacity-50 rounded text-offWhite text-lg"
              >
                get access
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative   max-w-2xl max-h-full">
          <div className="relative block 2xl:mx-auto 2xl:w-[57%] pt-8 pb-6 px-10 bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="text-gray-400 absolute top-6 right-8 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <h3 className="text-3xl tracking-wide mb-2 mt-5 block font-bold text-gray-900 dark:text-white">
              Get Early Access
            </h3>

            <p className="mb-8 text-lg">
              Submit the form, and we will notify you once the app is launched.
            </p>
            <div className="flex flex-col gap-[10px] ">
              <input
                type="text"
                placeholder="Name"
                className="outline-none w-full px-4 py-3 bg-offWhite rounded border border-offWhite "
              />
              <input
                type="email"
                placeholder="Email"
                className="outline-none w-full px-4 py-3 bg-offWhite rounded border border-offWhite "
              />
              <button
                onClick={handleButtonClick}
                className="text-offWhite sm:w-auto w-full bg-softBlue rounded px-11 py-3 text-lg font-normal "
              >
                Get early access
              </button>
            </div>
          </div>
        </div>
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
              onChange={handleEmailChange}
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
          <button
            onClick={handleButtonClick}
            className="text-offWhite sm:w-auto w-full bg-softBlue rounded px-11 py-3 text-lg font-normal "
          >
            Get early access
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
