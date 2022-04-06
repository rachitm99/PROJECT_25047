import Head from "next/head";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { searchState } from "../atoms/searchAtom";
import { useRef, useState, Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";

export default function Home() {
  const searchInputRef = useRef(null);
  const [option, setOption] = useState("Indian Tender");
  const changeSearch = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    setSearchTerm(term);
  };
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const router = useRouter();
  const form_submit = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push("/display");
  };
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const modal4 = (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50   overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into 
                  centering the modal contents. */}
            <span className=" h-screen " aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="md:mt-[540px] mt-[510px] md:ml-[260px]">
                <div
                  onClick={() => {
                    setOption("Indian Tenders");
                    setIsOpen(false);
                  }}
                  className="  w-[140px] mb-1 p-2 overflow-hidden text-center  transition-all transform bg-white shadow-xl rounded-lg"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Indian Tender
                  </Dialog.Title>
                </div>
                <div
                  onClick={() => {
                    setOption("Tender Results");
                    setIsOpen(false);
                  }}
                  className="  w-[140px] mb-1 p-2 overflow-hidden text-center  transition-all transform bg-white shadow-xl rounded-lg"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Tender Results
                  </Dialog.Title>
                </div>
                <div
                  onClick={() => {
                    setOption("Global Tenders");
                    setIsOpen(false);
                  }}
                  className="  w-[140px] mb-1 p-2 overflow-hidden text-center  transition-all transform bg-white shadow-xl rounded-lg"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Global Tenders
                  </Dialog.Title>
                </div>
                <div
                  onClick={() => {
                    setOption("Contracts");
                    setIsOpen(false);
                  }}
                  className="  w-[140px] mb-1 p-2 overflow-hidden text-center  transition-all transform bg-white shadow-xl rounded-lg"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Contracts
                  </Dialog.Title>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
  return (
    <div className="flex flex-col items-center  bg-blue-500 h-screen  min-h-[300px]">
      <div className="space-y-10  my-auto">
        <div className="flex    ">
          <h1 className=" mx-auto flex text-white text-5xl  font-semibold ">
            Welcome to MeG
            <h1 className=" mt-2 text-white text-4xl mx-auto font-semibold ">
              i
            </h1>
          </h1>
        </div>

        <form className="flex w-[350px] md:mx-6 md:min-w-[600px] shadow-2xl p-1 bg-white rounded-lg">
          <div
            onClick={() => setIsOpen(true)}
            className="pl-1 hover:cursor-pointer   bg-white flex max-w-min md:my-auto"
          >
            {option} <ChevronDownIcon className="w-10 md:mt-1 md:w-4 md:h-4" />
          </div>

          <input
            ref={searchInputRef}
            placeholder="Type keyword eg-civil,cable etc."
            onChange={changeSearch}
            required
            className=" my-auto  focus:outline-none h-[30px]  md:p-2 flex-grow md:text-lg rounded-lg"
          />

          <SearchIcon
            onClick={form_submit}
            className=" hover:cursor-pointer md:bg-blue-300 md:p-2 md:rounded-lg w-7 mx-1 md:w-14 md:h-14"
          />
          <button hidden type="submit" onClick={form_submit}>
            search
          </button>
        </form>
        {modal4}
      </div>
    </div>
  );
}
