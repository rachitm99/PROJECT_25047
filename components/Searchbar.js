import { useRecoilState ,useResetRecoilState} from 'recoil'
import { searchState } from '../atoms/searchAtom'
import {useRef} from 'react'
import { useRouter } from 'next/router'
import { SearchIcon } from '@heroicons/react/solid'

function Searchbar() {

    const changeSearch = (e) =>{
        e.preventDefault();
        const term = searchInputRef.current.value
        if (!term) return;
        setSearchTerm(term);
  }
  const [searchTerm, setSearchTerm] = useRecoilState(searchState)
    const searchInputRef = useRef(null);
    const router = useRouter()
    const searchReset = useResetRecoilState(searchState);
    const go_home = () => {
   
        searchReset;
        router.push('/');
      }
      const form_submit = e => {
        e.preventDefault();
    
        router.push('/display');
    
      }

  return (
    <div className='flex p-4 space-x-10 bg-emerald-500'>
      <div>

        <b onClick={go_home} className="hover:cursor-pointer text-blue-700 text-4xl">MeG</b><b className='text-blue-700 text-3xl'>i</b>
      </div>
      <div className="flex space-x-20">

        <form className='flex space-x-4 flex-row'>


          <input ref={searchInputRef} value={searchTerm} onChange={changeSearch} required className='ring-2  ring-black min-h-[40px] p-2 flex-grow text-lg rounded-lg' />

          <SearchIcon className=' hover:cursor-pointer bg-blue-600 p-2 rounded-lg min-w-max min-h-max max-w-14 max-h-14' />
          <button hidden type='submit' onClick={form_submit} >search</button>
          </form>

         
      </div>
    </div>
  )
}

export default Searchbar