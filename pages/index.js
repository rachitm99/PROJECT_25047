import Head from "next/head";
import Image from "next/image";
import { ChevronDownIcon, LocationMarkerIcon, SearchIcon } from "@heroicons/react/solid";
import gg from "../public/gemi.png";
import { Fragment, useState, useEffect ,useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/solid";
import HomeMenuFilter from "../components/HomeMenuFilter";
import { useRouter } from "next/router";
import { searchState } from "../atoms/searchAtom";
import { useRecoilState } from "recoil";
import { dataState } from "../atoms/dataAtom";
import axios from "../components/axios";
export default function Home() {
  const [searchTerm,setSearchTerm] = useRecoilState(searchState)
  const [navbarColor, setNavbarColor] = useState(false);
  const [getdata,setData] = useRecoilState(dataState)
  const [maha_data,setmaha_data] = useState([])
  const [wb_data,setwb_data] = useState([])
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };


  const loadMaharashtraData = async () => {
    // console.log(searchTerm)
    const req = await axios.get('/getstatedata',{params:{state:'maharashtra'}});
    const maha_data = req.data
    setmaha_data(maha_data)
    // console.log(maha_data)
    
  }

  const loadWbData = async () => {
    // console.log(searchTerm)
    const req = await axios.get('/getstatedata',{params:{state:'west bengal'}});
    const wb_data = req.data
    setwb_data(wb_data)
    // setData(data)
  }
  const searchInputRef = useRef(null);
  const router = useRouter();
  const form_submit = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    setSearchTerm(term)
    // console.log(searchTerm)
    loadData(term)
    router.push("/display");
  };
const loadData = async () => {
  const term = searchInputRef.current.value;
    console.log(term)
    const req = await axios.get('/getdata',{params:{"search":`${term}`}})
    req.headers['application/json']
    const data = req.data
    console.log(data)
    setData(data)
  }
  useEffect(() => {
    changeBackground();
    loadMaharashtraData();
    loadWbData();
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
          <form className="mx-auto -mt-28  w-[370px] md:max-w-lg  relative  bg-white flex md:w-full rounded-2xl ">
            <div className="my-auto z-20 w-[200px] p-2">
              <HomeMenuFilter className="" />
            </div>
            <input
            ref={searchInputRef}
              placeholder="Type Keyword eg- Item , Department etc."
              className="text-lg flex-grow  truncate focus:outline-none p-3 m-1"
            />
            <div onClick={form_submit} className="my-auto bg-blue-400 mr-5 rounded-full p-1 ">
              <SearchIcon className="w-12 h-12  p-2" />
            </div>
            <button hidden type="submit" onClick={form_submit}>
            search
          </button>
          </form>
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
            <div className="text-3xl text-cyan-500 mb-6 mt-6">
              Maharashtra Tenders
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto gap-8">
              {maha_data.map((i,index) => (

              <div key={index} className="mx-auto w-full h-44 bg-white">
                <p className="text-blue-600 p-2 font-bold">{i.Organisation_Name}</p>
                <p className="text-sm flex space-x-2  font-medium px-2">
                <LocationMarkerIcon className="w-4 h-4"/>{i.ADDRESS5?i.ADDRESS5:i.ADDRESS6?i.ADDRESS6:i.ADDRESS7?i.ADDRESS7:i.ADDRESS8?i.ADDRESS8:i.ADDRESS9?i.ADDRESS9:i.ADDRESS10?i.ADDRESS10:i.ADDRESS11?i.ADDRESS11:i.ADDRESS12?i.ADDRESS12:i.ADDRESS13?i.ADDRESS13:i.ADDRESS14?i.ADDRESS14:i.ADDRESS15?i.ADDRESS15:null} , {i.BID_STATE}

          </p>
          <p className="text-gray-600 text-xs p-2">{i.Item_Category}</p>
          < div className="text-xs max-w-max pt-2 pl-2 grid grid-cols-3 gap-y-2 gap-x-2 ">
            <div >Start Time</div>
            <div >End Time</div>
            <div> Tender Amount</div>
            <div className="font-bold  text-green-600">
              {i.Bid_End_Date_Time}
            </div>
            <div className="font-bold  text-red-600">
              {i.Bid_Opening_Date_Time}
            </div>
            <div className="font-bold text-sky-600">
              {i.Estimated_Bid_Value?<p>Rs {i.Estimated_Bid_Value}</p>:<p>N/A</p>}
            </div>
          </div>
              </div>
              
              ))}
              
            </div>
            <div className="text-3xl text-cyan-500 mb-6 mt-6">
              West Bengal Tenders
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto  mb-6 gap-8">
            {wb_data.map((i,index) => (


<div key={index} className="mx-auto w-full h-44 bg-white">
  <p className="text-blue-600 p-2 font-bold">{i.Organisation_Name}</p>
  <p className="text-sm flex space-x-2  font-medium px-2">
<LocationMarkerIcon className="w-4 h-4"/>{i.ADDRESS5?i.ADDRESS5:i.ADDRESS6?i.ADDRESS6:i.ADDRESS7?i.ADDRESS7:i.ADDRESS8?i.ADDRESS8:i.ADDRESS9?i.ADDRESS9:i.ADDRESS10?i.ADDRESS10:i.ADDRESS11?i.ADDRESS11:i.ADDRESS12?i.ADDRESS12:i.ADDRESS13?i.ADDRESS13:i.ADDRESS14?i.ADDRESS14:i.ADDRESS15?i.ADDRESS15:null} , {i.BID_STATE}

</p>
<p className="text-gray-600 text-xs p-2">{i.Item_Category}</p>
<div className="text-xs max-w-max pt-2 pl-2 grid grid-cols-3 gap-y-2 gap-x-2">
            <div >Start Time</div>
            <div >End Time</div>
            <div> Tender Amount</div>
            <div className="font-bold  text-green-600">
              {i.Bid_End_Date_Time}
            </div>
            <div className="font-bold  text-red-600">
              {i.Bid_Opening_Date_Time}
            </div>
            <div className="font-bold text-sky-600">
              {i.Estimated_Bid_Value?<p>Rs {i.Estimated_Bid_Value}</p>:<p>N/A</p>}
            </div>
          </div>
</div>
))}
</div>

             
              <div className="mx-auto w-full h-44 bg-white"></div>
            <div className="bg-cyan-100  mt-10">
              <div className="text-center font-bold text-indigo-800 text-3xl p-4">
                Tenders Closing Soon
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-6">
              {maha_data.map((i,index) => (

<div key={index} className="mx-auto w-full h-44 bg-white">
  <p className="text-blue-600 p-2 font-bold">{i.Organisation_Name}</p>
  <p className="text-sm flex space-x-2  font-medium px-2">
  <LocationMarkerIcon className="w-4 h-4"/>{i.ADDRESS5?i.ADDRESS5:i.ADDRESS6?i.ADDRESS6:i.ADDRESS7?i.ADDRESS7:i.ADDRESS8?i.ADDRESS8:i.ADDRESS9?i.ADDRESS9:i.ADDRESS10?i.ADDRESS10:i.ADDRESS11?i.ADDRESS11:i.ADDRESS12?i.ADDRESS12:i.ADDRESS13?i.ADDRESS13:i.ADDRESS14?i.ADDRESS14:i.ADDRESS15?i.ADDRESS15:null} , {i.BID_STATE}

</p>
<p className="text-gray-600 text-xs p-2">{i.Item_Category}</p>
< div className="text-xs max-w-max pt-2 pl-2 grid grid-cols-3 gap-y-2 gap-x-2 ">
<div >Start Time</div>
<div >End Time</div>
<div> Tender Amount</div>
<div className="font-bold  text-green-600">
{i.Bid_End_Date_Time}
</div>
<div className="font-bold  text-red-600">
{i.Bid_Opening_Date_Time}
</div>
<div className="font-bold text-sky-600">
{i.Estimated_Bid_Value?<p>Rs {i.Estimated_Bid_Value}</p>:<p>N/A</p>}
</div>
</div>
</div>

))}
 {wb_data.map((i,index) => (


<div key={index} className="mx-auto w-full h-44 bg-white">
  <p className="text-blue-600 p-2 font-bold">{i.Organisation_Name}</p>
  <p className="text-sm flex space-x-2  font-medium px-2">
<LocationMarkerIcon className="w-4 h-4"/>{i.ADDRESS5?i.ADDRESS5:i.ADDRESS6?i.ADDRESS6:i.ADDRESS7?i.ADDRESS7:i.ADDRESS8?i.ADDRESS8:i.ADDRESS9?i.ADDRESS9:i.ADDRESS10?i.ADDRESS10:i.ADDRESS11?i.ADDRESS11:i.ADDRESS12?i.ADDRESS12:i.ADDRESS13?i.ADDRESS13:i.ADDRESS14?i.ADDRESS14:i.ADDRESS15?i.ADDRESS15:null} , {i.BID_STATE}

</p>
<p className="text-gray-600 text-xs p-2">{i.Item_Category}</p>
<div className="text-xs max-w-max pt-2 pl-2 grid grid-cols-3 gap-y-2 gap-x-2">
            <div >Start Time</div>
            <div >End Time</div>
            <div> Tender Amount</div>
            <div className="font-bold  text-green-600">
              {i.Bid_End_Date_Time}
            </div>
            <div className="font-bold  text-red-600">
              {i.Bid_Opening_Date_Time}
            </div>
            <div className="font-bold text-sky-600">
              {i.Estimated_Bid_Value?<p>Rs {i.Estimated_Bid_Value}</p>:<p>N/A</p>}
            </div>
          </div>
</div>
))}
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
          <div className="bg-blue-400 flex flex-grow-0  items-center ">

          
          <footer className="mb-20 w-screen">
            <div className="mt-10   w-full  space-y-3 justify-around pt-10 pb-10 flex  flex-row   ">

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
            </div>
          </footer>
          </div>
        </bottom>
      </div>
    </div>
  );
}
