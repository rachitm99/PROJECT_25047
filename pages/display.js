import Searchbar from "../components/Searchbar"
import axios from '../components/axios'
import FilterButton from "../components/FilterButton"
import { useState ,Fragment , useEffect} from "react"
import { Dialog ,Transition } from '@headlessui/react'
import { useRef } from 'react'
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
// import ModalFooter from "@material-tailwind/reactLocationMarke/ModalFooter";
import Button from "@material-tailwind/react/Button";
import MenuButtons from "../components/MenuButtons"
import {ChevronRightIcon ,ChevronLeftIcon , LocationMarkerIcon,DownloadIcon ,HeartIcon,ShareIcon,MailIcon,PencilIcon} from "@heroicons/react/solid"
import {useRecoilState} from "recoil";
import { searchState } from "../atoms/searchAtom"
import { dataState } from "../atoms/dataAtom"

function display({  }) {
  const [data,setData] = useRecoilState(dataState)
  // useEffect( ()  => {
  //     loadData()
    
    
  // }, [])
  const loadData = async () => {
    // console.log(searchTerm)
    const req = await axios.get('/getdata',{params:{search:`${searchTerm}`}});
    const data = req.data
    setData(data)
  }
  const [searchTerm,setSearchTerm] = useRecoilState(searchState)
  let overlayRef = useRef();
  const [pageNumber , setPageNumber] = useState(0)
  const lastPage = Math.ceil(data.length/5)
  let [isOpen, setIsOpen] = useState(false)
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  
  const onClose = () => { setIsOpen(false) }
  
  const modal4 = (<>
    

    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40  bg-gray-800/60 overflow-y-auto"
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
          <span
            className=" h-screen "
            aria-hidden="true"
          >
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
            <div className=" w-full max-w-md p-6 mt-56 overflow-hidden text-left  transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Filer option
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  filter ths thing
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  Apply 
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  </>)
  
  const modal3 = (<>
    <Button
        color="deepOrange"
        type="button"
        onClick={(e) => setShowModal(true)}
        ripple="light"
    >
        button
    </Button>

    <Modal  className='!absolute !ml-60' size="sm" active={showModal} toggler={() => setShowModal(false)}>
        {/* <ModalHeader toggler={() => setShowModal(false)}>
            Test Title
        </ModalHeader> */}
        <ModalBody className='' >
            <p className=" text-gray-600 font-normal">
                Testingggggggggggggggggggggg
            </p>
        </ModalBody>
        {/* <ModalFooter>
            
        </ModalFooter> */}
    </Modal>
</>)
  const modal = (
    <>
      
      <Dialog

        open={isOpen}
        onClose={onClose}

        className="fixed inset-0  z-10 "
      >
        <Dialog.Overlay

className="fixed inset-0 bg-gray-800/60"
/>
        
          
          <div className='w-full absolute bg-blue-200 flex flex-col'>
      <Searchbar className=' ' />


      <div className=' bg-white flex border-b-current border-black flex-shrink-0 space-x-4 pl-1 '>

        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2 pt-2 hover:border-b-4 border-blue-700'>

          Indian tenders
        </span>

        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2 pt-2 hover:border-b-4 border-blue-700'>
          Tender Results
        </span>
        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2 pt-2 pb-2 hover:border-b-4 border-blue-700'>
          Global tenders
        </span>
        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2  pt-2 hover:border-b-4 border-blue-700'>
          Contracts
        </span>
        

      </div>
      <div className=" bg-white pb-2 pt-1 flex space-x-3 min-w-max">
        {/* <div onClick={() => setShowModal(true)} className="ml-2 hover:bg-blue-800 hover:cursor-pointer hover:text-white flex ring-1 text-blue-600 font-bold ring-blue-600 rounded-lg  pl-2 pr-2">{text} <ChevronDownIcon className="  w-6 h-6 text-inherit font-bold" /></div> */}
        <FilterButton afunc={openModal} text='keyword' />
        <FilterButton afunc={openModal} text='Authority' />
        <FilterButton afunc={openModal} text='Category' />
        <FilterButton afunc={openModal} text='State' />
        <FilterButton afunc={openModal} text='City' />
        <FilterButton afunc={openModal} text='Tender Amount' />
        <FilterButton afunc={openModal} text='Closing Date' />
        <FilterButton afunc={openModal} text='Created Date' />
        <FilterButton afunc={openModal} text='Sort By' />
        <FilterButton afunc={openModal} text='More Filters' />
        

      </div>
        </div>
      
      </Dialog>
    </>)

    const modal2 = (<>
     <Dialog

open={isOpen}
onClose={onClose}

className="fixed inset-0 bg-gray-800/60 z-10 "
>
<Dialog.Title>
  hello thsi a titile 
</Dialog.Title>
<Dialog.Description>
  thisi si jsidgjonningi ngh hdnfj
</Dialog.Description>
<Dialog.Overlay

className="fixed inset-0 "
/>
<div className="bg-white mt-60 h-[600px] w-[600px] " > yoooo whats upp
<button>helooooooo</button>
</div>
</Dialog>
    </>)
    console.log(data)
    
    

  return (
    <div className=' bg-blue-200 flex flex-col'>
      <div className="z-50 sticky top-0 " >
      <Searchbar className='' />


      <MenuButtons/>


      <div className=" bg-white pb-10 pt-1 flex space-x-3 min-w-max">
        {/* <div onClick={() => setShowModal(true)} className="ml-2 hover:bg-blue-800 hover:cursor-pointer hover:text-white flex ring-1 text-blue-600 font-bold ring-blue-600 rounded-lg  pl-2 pr-2">{text} <ChevronDownIcon className="  w-6 h-6 text-inherit font-bold" /></div> */}
        <FilterButton afunc={() => { setIsOpen(true) }} text='keyword' />
        <FilterButton afunc={() => { setIsOpen(true) }} text='Authority' />
        <FilterButton afunc={() => { setIsOpen(true) }} text='Category' />
        <FilterButton afunc={() => { setIsOpen(true) }} text='State' />
        <FilterButton afunc={() => { setIsOpen(true) }} text='City' />
        <FilterButton afunc={() => { setIsOpen(true) }} text='Tender Amount' />
        <FilterButton afunc={() => { setIsOpen(true) }} text='Closing Date' />
        <FilterButton afunc={() => { setIsOpen(true) }} text='Created Date' />
        <FilterButton afunc={() => { setIsOpen(true) }} text='Sort By' />
        <FilterButton afunc={() => { setIsOpen(true) }} text='More Filters' />
        

      </div>
      </div>
      {/* {modal} */}
      {/* {modal2} */}
      {/* {modal3} */}
      {modal4}
      {data.map((i, index) => (
        index < (pageNumber+1)*5 && index >= ((pageNumber+1)*5)-5 ?  
        <div key={index} className="m-2 bg-white flex justify-between hover:bg-gray-200 min-h-[200px] cursor-pointer">
          <div>
          <p className="p-2 font-bold text-blue-600">
            {i.Organisation_Name}
          </p>
          <p className="text-sm flex space-x-2 py-1 font-medium px-2">
            <LocationMarkerIcon className="w-4 h-4"/>{i.ADDRESS7?i.ADDRESS7:i.ADDRESS8?i.ADDRESS8:i.ADDRESS9?i.ADDRESS9:i.ADDRESS10?i.ADDRESS10:i.ADDRESS11?i.ADDRESS11:i.ADDRESS12?i.ADDRESS12:i.ADDRESS13?i.ADDRESS13:null}

          </p>
          <div className="pl-2 flex space-x-2">
            <p className="text-bold">BID NO.</p>
            <p className="text-blue-600">
          
              {i.BID_NO_O}
            </p>
          </div>
          <div className="pl-2 flex space-x-2">
            <p className="text-bold">BID STATUS</p>
            <p className="text-blue-600">
              {i.BID_STATUS_O}
            </p>
          </div>
          {/* {i.Corrigendum} */}
            <div className="pl-2  py-1 flex space-x-2">
              <p className="text-bold"> Description</p>
              <p className="text-blue-600">

                {i.Items_O}
              </p>
            </div>
          <div className="max-w-max pt-2 pl-2 grid grid-cols-3 gap-y-4 gap-x-6">
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
              {i.Estimated_Bid_value?i.Estimated_Bid_value:<p>N/A</p>}
            </div>
          </div>
          <div>

            {/* <div className="pl-2  pt-1 flex space-x-2">
              <p className="text-bold"> Items Required</p>
              <p className="text-blue-600">

                {i.Quantity_Required}

              </p>
            </div> */}
            </div>
          </div>
          <div className="flex flex-col mt-auto">
            <div className="flex space-x-1 mr-2">

            <PencilIcon className="w-7 h-7 p-1 m-2 hover:cursor-pointer bg-white text-sky-600 border-2 border-sky-600"/>
            <MailIcon className="  w-7 h-7 p-1 m-2 hover:cursor-pointer bg-white text-sky-600 border-2 border-sky-600"/>
            <ShareIcon className=" w-7 h-7 p-1 m-2 hover:cursor-pointer bg-white text-sky-600 border-2 border-sky-600"/>
            <HeartIcon className=" w-7 h-7 p-1 m-2 hover:cursor-pointer bg-white text-sky-600 border-2 border-sky-600"/>
            <DownloadIcon className=" text-white hover:cursor-pointer bg-sky-600 p-1 m-2 w-7 h-7"/>
            </div>
          </div>
        </div> : null

      ))}
      <div className="flex items-center space-x-4 justify-between mx-auto min-w-max text-blue-900  mb-10">
        {pageNumber === 0?
         null :
      <div onClick={() => (setPageNumber(pageNumber-1))} className="flex flex-grow rounded-lg px-4 bg-white flex-col items-center cursor-pointer hover:underline"><ChevronLeftIcon className="h-5" /> Prev Page</div>
         } {pageNumber === lastPage-1?
        null:
      <div onClick={() =>(setPageNumber(pageNumber+1))} className="flex flex-grow rounded-lg px-4 bg-white flex-col items-center cursor-pointer hover:underline"><ChevronRightIcon className="h-5" /> Next Page</div>
        }
      </div>
    </div>
  )
}

export default display

// export async function getStaticProps(context) {
//   const req = await axios.get('/getdata');
//   const data = req.data

//   return {
//     props: { data: data }, // will be passed to the page component as props
//   }
// }