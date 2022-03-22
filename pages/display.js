import Searchbar from "../components/Searchbar"


function display() {

    

    
  return (
    <div className='flex flex-col'>
          <Searchbar/>

    
    <div className='flex border-b-current border-black flex-shrink-0 space-x-4 ml-1 '>

      <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2 pt-2 hover:border-b-4 border-blue-700'>
            
            Indian tenders
          </span>
          
      <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2 pt-2 hover:border-b-4 border-blue-700'>
            Tender Results
          </span>
      <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2 pt-2 pb-1 hover:border-b-4 border-blue-700'>
            Global tenders
          </span>
      <span className='flex-shrink-0 hover:text-blue-700 hover:font-bold hover:bg-gray-200 pl-2  pt-2 hover:border-b-4 border-blue-700'>
            Contracts
          </span>
         
    </div>
    <hr className='m-0 pt-1' />
    <div className="grid grid-cols-10 gap-2">

    <select>
      <option>Select a option</option>
      <option>hello</option>
      <option>hello</option>
    </select>
    <select>
      <option>Select a option</option>
      <option>hello</option>
      <option>hello</option>
    </select>
    <select>
      <option>Select a option</option>
      <option>hello</option>
      <option>hello</option>
    </select><select>
      <option>Select a option</option>
      <option>hello</option>
      <option>hello</option>
    </select><select>
      <option>Select a option</option>
      <option>hello</option>
      <option>hello</option>
    </select><select>
      <option>Select a option</option>
      <option>hello</option>
      <option>hello</option>
    </select><select>
      <option>Select a option</option>
      <option>hello</option>
      <option>hello</option>
    </select><select>
      <option>Select a option</option>
      <option>hello</option>
      <option>hello</option>
    </select><select>
      <option>Select a option</option>
      <option>hello</option>
      <option>hello</option>
    </select><select>
      <option>Select a option</option>
      <option>hello</option>
      <option>hello</option>
    </select>
    </div>
    </div>
  )
}

export default display