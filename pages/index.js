import Head from "next/head";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import gg from "../public/gg.webp";

export default function Home() {
  return (
    <div className="flex flex-col overflow-clip">
      <Image src={gg} layout={'responsive'} className='relative -translate-y-10 -z-10 ' />
    <div className="flex flex-col absolute w-full ">
      <header className="sticky z-10 flex bg-transparent justify-end space-x-5 p-5">
        <div className="rounded-full ring-4 ring-purple-700 text-sm px-6 py-2 bg-white">About</div>
        <div className="rounded-full ring-4 ring-purple-700 text-sm px-6 py-2 bg-white">Pricing</div>
        <div className="rounded-full ring-4 ring-purple-700 text-sm px-6 py-2 bg-white">Login</div>
        <div className="rounded-full ring-1 text-sm px-6 py-2 bg-purple-600 text-white">Register</div>
      </header>
      <div className="flex flex-col ">

      <div className="flex  mt-36  ">
          <h1 className=" mx-auto flex text-white text-5xl backdrop-blur-sm font-semibold ">
            Welcome to GeM
            <span className=" mt-2 backdrop-blur-sm text-4xl mx-auto font-semibold ">
              i
            </span>
          </h1>
        </div>
        <div className="mx-auto mt-8">

          <h1 className="text-3xl text-white outline-8 outline-black backdrop-blur-xl">
            Bharat ka apna <span className="font-semibold"> INTELLIGENT</span>  e-Marketplace search engine
          </h1>
        </div>
      </div>
        <bottom className='bg-gray-200 flex flex-col h-screen'>

        <div className="mx-auto max-w-6xl relative mt-8 bg-white flex w-full rounded-2xl ">

        <input placeholder="Type here to search" className="text-4xl flex-grow focus:outline-none p-3 m-1"/>
        <div className="my-auto bg-purple-600 mr-5 rounded-full p-1 "><SearchIcon className="w-14 h-14  p-2"/></div>
        </div>
        <div className="">
          this a text ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </div>
        </bottom>
    </div>
    </div>
  );
}