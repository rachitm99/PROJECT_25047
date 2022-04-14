import Head from "next/head";
import Image from "next/image";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import gg from "../public/gg.webp";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import HomeMenuFilter from "../components/HomeMenuFilter";

export default function Home() {
  return (
    <div className="flex flex-col overflow-clip">
      <Image
        src={gg}
        layout={"responsive"}
        className="relative -translate-y-10 -z-10 "
      />
      <div className="flex flex-col absolute w-full ">
        <header className="sticky z-50 flex  justify-end space-x-5 p-5 ">
          <div className="rounded-full ring-4 ring-purple-700 text-sm px-6 py-2 bg-white">
            About
          </div>
          <div className="rounded-full ring-4 ring-purple-700 text-sm px-6 py-2 bg-white">
            Pricing
          </div>
          <div className="rounded-full ring-4 ring-purple-700 text-sm px-6 py-2 bg-white">
            Login
          </div>
          <div className="rounded-full ring-1 text-sm px-6 py-2 bg-purple-600 text-white">
            Register
          </div>
        </header>
        <div className="flex flex-col  ">
          <div className="flex  pt-36  ">
            <h1 className=" mx-auto  flex text-rose-600 text-5xl backdrop-blur-sm  px-4 bg-yellow-400 p-2 rounded-full font-semibold ">
              Welcome to GeM
              <span className=" mt-2 backdrop-blur-sm text-4xl mx-auto font-semibold ">
                i
              </span>
            </h1>
          </div>
          <div className="mx-auto mt-8">
            <h1 className="text-3xl  mb-4 text-black p-2 px-4 rounded-full outline-8 outline-black bg-yellow-400 backdrop-blur-sm">
              Bharat ka apna <span className="font-semibold"> INTELLIGENT</span>{" "}
              e-Marketplace search engine
            </h1>
          </div>
        </div>
        <bottom className="bg-gray-200 flex flex-col h-screen">
          <div className="mx-auto max-w-6xl relative mt-8 bg-white flex w-full rounded-2xl ">
            <div className="my-auto  w-[200px] p-2">
              <HomeMenuFilter />
            </div>
            <input
              placeholder="Type here to search"
              className="text-3xl flex-grow focus:outline-none p-3 m-1"
            />
            <div className="my-auto bg-purple-600 mr-5 rounded-full p-1 ">
              <SearchIcon className="w-14 h-14  p-2" />
            </div>
          </div>
          <div className="text-center font-bold text-3xl mt-10">
            Trending Tenders by Location
          </div>
          <div className="mx-auto">
            <div className="text-3xl text-cyan-500 mb-6 mt-6">
              Delhi Tenders
            </div>

            <div className="grid grid-cols-4  gap-8">
              <div className="w-64 h-44 bg-white"></div>
              <div className="w-64 h-44 bg-white"></div>
              <div className="w-64 h-44 bg-white"></div>
              <div className="w-64 h-44 bg-white"></div>
            </div>
            <div className="text-3xl text-cyan-500 mb-6 mt-6">
              Maharashtra Tenders
            </div>

            <div className="grid grid-cols-4  gap-8">
              <div className="w-64 h-44 bg-white"></div>
              <div className="w-64 h-44 bg-white"></div>
              <div className="w-64 h-44 bg-white"></div>
              <div className="w-64 h-44 bg-white"></div>
            </div>
          </div>
        </bottom>
      </div>
    </div>
  );
}
