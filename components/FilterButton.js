import React from 'react'
import { ChevronDownIcon } from "@heroicons/react/solid"


function FilterButton({text , afunc}) {
  return (
    


          <div onClick={afunc}  className="ml-2 hover:bg-blue-800 hover:cursor-pointer hover:text-white flex ring-1 text-blue-600 font-bold ring-blue-600 rounded-lg  pl-2 pr-2">{text} <ChevronDownIcon className="  w-6 h-6 text-inherit font-bold" /></div>
  )
}

export default FilterButton;