import Head from 'next/head'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { searchState } from '../atoms/searchAtom'
import {useRef} from 'react'

export default function Home() {
      const searchInputRef = useRef(null);

      const changeSearch = (e) =>{
            e.preventDefault();
            const term = searchInputRef.current.value
            if (!term) return;
            setSearchTerm(term);
      }
const [searchTerm, setSearchTerm] = useRecoilState(searchState)
  const router = useRouter()
  const form_submit= e =>{
    e.preventDefault();
    const term = searchInputRef.current.value
            if (!term) return;
   router.push('/display');

  }
  return (
   
      <div className='flex flex-col items-center  min-h-[300px]'>
       
<div className='flex my-auto'>

      <h1 className='   text-blue-700 text-5xl  font-semibold '>Welcome to MeG</h1> <h1 className=' mt-2 text-blue-700 text-4xl  font-semibold '>i</h1>
</div>
        
    
      
 
<form >
    <div  className=' flex space-x-4 flex-row'>
            
      <input ref={searchInputRef}  onChange={changeSearch} required className='ring-2  ring-black min-h-[40px] p-2 flex-grow text-lg rounded-lg' />
      
         <SearchIcon  onClick={form_submit} className=' hover:cursor-pointer bg-blue-600 p-2 rounded-lg min-w-max min-h-max max-w-14 max-h-14'/>
          <button hidden type='submit' onClick={form_submit} >search</button>
    </div>
</form>
    
     
      
      </div>
      )
}
