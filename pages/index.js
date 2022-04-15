import Head from "next/head";
import Image from "next/image";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import gg from "../public/gemi.png";
import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import HomeMenuFilter from "../components/HomeMenuFilter";

export default function Home() {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className="flex flex-col overflow-hidden ">
      <div className="h-[900px] lg:h-[1000px] -z-10 m-0 object-cover -translate-x-72 sm:-translate-x-0   object-center w-[1000px] lg:w-screen ">
        <Image src={gg} layout={"responsive"} className="   " />
      </div>
      <div className="flex bg-scroll flex-col absolute w-full ">
        <header
          className={`sticky top-0 ${
            navbarColor ? "bg-[rgb(0,39,53)]" : "bg-transparent"
          } transition-colors duration-700  z-50 flex  justify-between  p-5 `}
        >
          <div className="text-sky-400 text-4xl font-bold">GeMi</div>
          <div className="flex space-x-5">
            <div className="rounded-full ring-4 ring-blue-400 text-sm px-6 py-2 bg-white">
              Pricing
            </div>
            <div className="rounded-full ring-4 ring-blue-400 text-sm px-6 py-2 bg-white">
              Login
            </div>
            {/* <div className="rounded-full ring-1 text-sm px-6 py-2 bg-purple-600 text-white">
            Register
          </div> */}
          </div>
        </header>
        <div className="flex flex-col  ">
          <div className=" hidden sm:flex pb-[200px] lg:pb-[600px]  ">
            <h1 className=" mx-auto  flex text-white text-5xl backdrop-blur-sm  px-4 bg-transparent p-2 rounded-full font-semibold ">
              Welcome to GeM
              <span className=" mt-2 backdrop-blur-sm text-4xl mx-auto font-semibold ">
                i
              </span>
            </h1>
          
          </div>
          <div className=" flex flex-col sm:hidden pb-[200px] lg:pb-[600px]  ">
            <h1 className=" mx-auto  flex text-white text-5xl backdrop-blur-sm  px-4 bg-transparent p-2 rounded-full font-semibold ">
              Welcome to 
            </h1>
              <span className=" mt-2 text-white backdrop-blur-sm text-4xl mx-auto font-semibold ">
              GeMi
              </span>
          
          </div>
        </div>
        <bottom className="bg-gray-200 flex flex-col ">
          <div className="mx-auto -mt-28  w-[370px] md:max-w-lg  relative  bg-white flex md:w-full rounded-2xl ">
            <div className="my-auto z-20 w-[200px] p-2">
              <HomeMenuFilter className="" />
            </div>
            <input
              placeholder="Type Keyword eg- Item , Department etc."
              className="text-lg flex-grow  truncate focus:outline-none p-3 m-1"
            />
            <div className="my-auto bg-blue-400 mr-5 rounded-full p-1 ">
              <SearchIcon className="w-12 h-12  p-2" />
            </div>
          </div>
          <div className="mx-auto mt-8">
            <h1 className="text-3xl  mb-4 text-white p-2 px-4 rounded-full outline-8 outline-black bg-sky-400 backdrop-blur-sm">
              <span className="font-semibold"> GeM</span> A
              <span className="font-semibold">I </span>
              search engine
            </h1>
          </div>
          <div className="text-center font-bold text-indigo-800 text-3xl mt-10">
            Trending Tenders by Location
          </div>
          <div className="mx-auto">
            <div className="text-3xl text-center text-cyan-500 mb-6 mt-6">
              Delhi Tenders
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto gap-8">
              <div className="mx-auto w-full h-44 bg-white"></div>
              <div className="mx-auto w-full h-44 bg-white"></div>
              <div className="mx-auto w-full h-44 bg-white"></div>
              <div className="mx-auto w-full h-44 bg-white"></div>
            </div>
            <div className="text-3xl text-cyan-500 mb-6 mt-6">
              Maharashtra Tenders
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4  gap-8">
              <div className="mx-auto w-full h-44 bg-white"></div>
              <div className="mx-auto w-full h-44 bg-white"></div>
              <div className="mx-auto w-full h-44 bg-white"></div>
              <div className="mx-auto w-full h-44 bg-white"></div>
            </div>
            <div className="bg-cyan-100  mt-10">
              <div className="text-center font-bold text-indigo-800 text-3xl p-4">
                Tenders Closing Soon
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-6">
                <div className="mx-auto w-full h-44 bg-white"></div>
                <div className="mx-auto w-full h-44 bg-white"></div>
                <div className="mx-auto w-full h-44 bg-white"></div>
                <div className="mx-auto w-full h-44 bg-white"></div>
                <div className="mx-auto w-full h-44 bg-white"></div>
                <div className="mx-auto w-full h-44 bg-white"></div>
                <div className="mx-auto w-full h-44 bg-white"></div>
                <div className="mx-auto w-full h-44 bg-white"></div>
              </div>
            </div>
            <div className="text-center font-bold text-indigo-800 text-3xl mt-10 p-4">
              Pricing
            </div>
            <div className="mb-24 grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="mx-auto bg-gray-400 w-72 h-64 "></div>
              <div className="mx-auto bg-gray-400 w-72 h-64 "></div>
              <div className="mx-auto bg-gray-400 w-72 h-64 "></div>
              <div className="mx-auto bg-gray-400 w-72 h-64 "></div>
            </div>
          </div>
          <div className="bg-blue-400">

          
          <footer className="mt-10 ml-24 sm:ml-0 space-y-3 justify-evenly pt-10 pb-10 flex flex-col sm:flex-row ">
            <div className="font-semibold  text-black my-auto text-4xl">
              GeMi
            </div>
            <div className="flex  flex-col space-y-1">
              <p className="font-semibold">Company</p>
              <p>About Us</p>
              <p>News</p>
              <p>Blogs</p>
              <p>Contact Us</p>
            </div>
            <div className="flex flex-col  space-y-1">
              <p className="font-semibold">Policies</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Support</p>
              <p>FAQ</p>
              <p>Pricing</p>
              <p>GeM Registration</p>
              <p>Request Demo</p>
              <p>How it Works</p>
            </div>
          </footer>
          </div>
        </bottom>
      </div>
    </div>
  );
}
