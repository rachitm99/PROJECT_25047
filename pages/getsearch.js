import { useRouter } from 'next/router'
import { SearchIcon } from '@heroicons/react/solid'
import axios from '../components/axios'
import {useEffect ,useState} from 'react'
import {saveAs} from 'file-saver'


function getsearch({tbdata , tbhead}) {
    
    

    // const [ tbhead , setTbHead] = useState([])
    // const [ tbdata , setTbData] = useState([])

    const router = useRouter()
  const form_submit= e =>{
    e.preventDefault;
    
   router.push('/getsearch');

  }
  const go_home = e => {
    e.preventDefault();
    router.push('/')
  }

//   useEffect(() => {
//       async function fetchData () {
//     const req = await axios.post('/getsearch');
    
    
//     setTbHead(req.data.head);
//     //  const tbhead = req.data.head
//     // const tbdata = req.data.MAIN_DATA
//     console.log(tbhead);
//       }
//     fetchData()
    
      
//       }
  
    
//   , [])
//   useEffect(() => {
//     async function fetchData () {
//   const req = await axios.post('/getsearch');
  
  
//   setTbData(req.data.MAIN_DATA);
//   //  const tbhead = req.data.head
//   // const tbdata = req.data.MAIN_DATA
//   console.log(tbdata);
//     }
//   fetchData()
  
    
//     }

  
// , [])

  const get_file = async () => {
       saveAs('http://62.171.143.248:7998/download')
  }
  

  return (<>
    <div className="pt-12 pl-10 flex space-x-20">
        
        <b onClick={go_home} className="hover:cursor-pointer text-blue-700 text-4xl">MeG</b>
        <div className="flex space-x-20">

        <form  className='flex space-x-4 flex-row'>
    

      <input required className='ring-2  ring-black min-h-[40px] p-2 flex-grow text-lg rounded-lg' />
     
         <SearchIcon  className=' hover:cursor-pointer bg-blue-600 p-2 rounded-lg min-w-max min-h-max max-w-14 max-h-14'/>
          <button hidden type='submit' onClick={form_submit} >search</button>
  
</form>
              
        </div>
    </div>
    <div >
        <button onClick={get_file} className="p-2 bg-blue-400 mt-14 rounded-lg hover:bg-blue-600 ">Download CSV</button>
    </div>
  
<div className=" overflow-hidden overflow-x-auto mx-auto">


	<div className="flex flex-col">
    <div className=" shadow-md sm:rounded-lg">
        <div className="inline-block  align-middle">
            <div className=" ">
                <table className=" divide-y  divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead className="bg-gray-100  dark:bg-gray-700">
                        <tr >
                            
                        {tbhead.map((i) => (
                               <th scope="col" className="py-3 px-6 text-xs  font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                   {i}
                            </th>
                           ))}
                              
                            
                            
                            
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      {tbdata.map((i) => (

                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            {i.map((j) => (

                          <td className="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white">{j}</td>
                            ))}
                          </tr>
                      ))}
                          
                            
                            
                         
                        
                        
{/*                        
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                            
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch Series 7</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Accessories</td>
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$599</td>
                            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>  */}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

	
</div>
</>
  )
}

export default getsearch

export async function getServerSideProps(context) {
  const req = await axios.post('/getsearch');
  const tbdata = req.data.MAIN_DATA
  const tbhead = req.data.head
  return {
    props: {tbdata:tbdata,tbhead:tbhead}, // will be passed to the page component as props
  }
}