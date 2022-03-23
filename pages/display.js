import Searchbar from "../components/Searchbar"
import axios from '../components/axios'


function display({ data }) {

  


  return (
    <div className='bg-blue-200 flex flex-col'>
      <Searchbar />


      <div className='bg-white flex border-b-current border-black flex-shrink-0 space-x-4 pl-1 '>

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

      </div>
     
      <div className="bg-white pb-10 grid grid-cols-10 gap-x-2">

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
          <div className="pt-2 pl-2 grid grid-cols-2 gap-4">
            <p>Start Time</p>
            <p>End Time</p>
            <p className="text-red-600">
              {i.Start_Time}
            </p>
            <p className="text-red-600">
              {i.END_Time}
            </p>
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