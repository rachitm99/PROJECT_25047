

function MenuButtons() {
  return (
    <div className=' bg-white flex border-b-current border-black flex-shrink-0 space-x-4 pl-1 min-w-max'>

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
  )
}

export default MenuButtons