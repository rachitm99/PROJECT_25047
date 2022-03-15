import { useRouter } from 'next/router'
import { SearchIcon } from '@heroicons/react/solid'

function getsearch() {

    const router = useRouter()
  const form_submit= e =>{
    e.preventDefault;
    
   router.push('/getsearch');

  }

  
  return (<>
    <div class="pt-12 pl-10 flex space-x-20">
        
        <b class="text-blue-600 text-4xl">MeG</b>
        <div class="flex space-x-20">

        <form >
    <div  className=' flex space-x-4 flex-row'>

      <input required className='ring-2  ring-black min-h-[40px] p-2 flex-grow text-lg rounded-lg' />
     
         <SearchIcon type='submit' className=' hover:cursor-pointer bg-blue-600 p-2 rounded-lg min-w-max min-h-max max-w-14 max-h-14'/>
          <button hidden type='submit' onClick={form_submit} >search</button>
    </div>
</form>
              
        </div>
    </div>
    <div >
        <a href="{{url_for('download_file')}}" download="data.csv"><button class="p-2 bg-blue-400 mt-14 rounded-lg hover:bg-blue-600 ">Download CSV</button></a>
    </div>
  
<div class=" overflow-hidden overflow-x-auto mx-auto">


	<div class="flex flex-col">
    <div class=" shadow-md sm:rounded-lg">
        <div class="inline-block  align-middle">
            <div class=" ">
                <table class=" divide-y  divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead class="bg-gray-100  dark:bg-gray-700">
                        <tr >
                           
                            <th scope="col" class="py-3 px-6 text-xs  font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                              
                            </th>
                            
                            
                            
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                          
                          <td class="py-4 px-6 text-sm font-medium text-gray-900  dark:text-white"></td>
                            
                            
                          </tr>
                         
                        
                        
{/*                        
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch Series 7</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Accessories</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$599</td>
                            <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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