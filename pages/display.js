import Searchbar from "../components/Searchbar"
import axios from '../components/axios'
import FilterButton from "../components/FilterButton"
import { useState } from "react"
import { Dialog } from '@headlessui/react'
import { useRef } from 'react'


function display({ data }) {
  let overlayRef = useRef();
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => { setIsOpen(false) }
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
        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2 pt-2 pb-4 hover:border-b-4 border-blue-700'>
          Global tenders
        </span>
        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2  pt-2 hover:border-b-4 border-blue-700'>
          Contracts
        </span>
        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2  pt-2 hover:border-b-4 border-blue-700'>
          Contracts
        </span>

      </div>
        </div>
      
      </Dialog>
    </>)

  return (
    <div className=' bg-blue-200 flex flex-col'>
      <Searchbar className='' />


      <div className=' bg-white flex border-b-current border-black flex-shrink-0 space-x-4 pl-1 '>

        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2 pt-2 hover:border-b-4 border-blue-700'>

          Indian tenders
        </span>

        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2 pt-2 hover:border-b-4 border-blue-700'>
          Tender Results
        </span>
        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2 pt-2  pb-2 hover:border-b-4 border-blue-700'>
          Global tenders
        </span>
        <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2  pt-2 hover:border-b-4 border-blue-700'>
          Contracts
        </span>

      </div>


      <div className=" bg-white pb-10 pt-1 flex space-x-3 min-w-max">
        {/* <div onClick={() => setShowModal(true)} className="ml-2 hover:bg-blue-800 hover:cursor-pointer hover:text-white flex ring-1 text-blue-600 font-bold ring-blue-600 rounded-lg  pl-2 pr-2">{text} <ChevronDownIcon className="  w-6 h-6 text-inherit font-bold" /></div> */}
        <FilterButton afunc={() => { setIsOpen(true) }} text='keyword' />
        <FilterButton text='Authority' />
        <FilterButton text='Category' />
        <FilterButton text='State' />
        <FilterButton text='City' />
        <FilterButton text='Tender Amount' />
        <FilterButton text='Closing Date' />
        <FilterButton text='Created Date' />
        <FilterButton text='Sort By' />
        <FilterButton text='More Filters' />
        

      </div>
      {modal}
      {data.map((i, index) => (
        <div key={index} className="m-2 bg-white hover:bg-gray-200 min-h-[200px] cursor-pointer">
          <p className="p-2 font-bold text-blue-600">

            {i.BID_D_ADD}
          </p>
          <div className="pl-2 flex space-x-2">
            <p className="text-bold">BID NO.</p>
            <p className="text-blue-600">
              {i.BID_NO}
            </p>
          </div>
          <div className="pl-2 flex space-x-2">
            <p className="text-bold">BID STATUS</p>
            <p className="text-blue-600">
              {i.BID_STATUS}
            </p>
          </div>
          {/* {i.Corrigendum} */}
          <div className="max-w-max pt-2 pl-2 grid grid-cols-2 gap-y-4 gap-x-6">
            <div >Start Time</div>
            <div >End Time</div>
            <div className="font-bold  text-green-600">
              {i.Start_Time}
            </div>
            <div className="font-bold  text-red-600">
              {i.END_Time}
            </div>
          </div>
          <div>

            <div className="pl-2  pt-1 flex space-x-2">
              <p className="text-bold"> Description</p>
              <p className="text-blue-600">

                {i.Items}
              </p>
            </div>
            <div className="pl-2  pt-1 flex space-x-2">
              <p className="text-bold"> Items Required</p>
              <p className="text-blue-600">

                {i.Quantity_Required}

              </p>
            </div>

          </div>
        </div>

      ))}
    </div>
  )
}

export default display

export async function getStaticProps(context) {
  const req = await axios.get('/getdata');
  const data = req.data

  return {
    props: { data: data }, // will be passed to the page component as props
  }
}