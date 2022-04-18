import React,{useState} from 'react'


type TSearchData={
  
  SearchDataHandler: any
}
const Searchbar = ({SearchDataHandler}:TSearchData) => { 
  const [searchData, setSearchData] = useState('')
  
  const onChangeHandler=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchData(e.target.value)
    SearchDataHandler(e.target.value)
  }
  return (
    <div className='relative w-[100%] pb-4 sm:w-[320px] md:w-[320px] lg:w-[320px]'>
        <input type={'text'} value={searchData} onChange={(e)=>onChangeHandler(e)} placeholder='Apply Watc, Samsung S21, Macbook, Pro...' className='bg-white shadow-xl p-3 rounded-xl text-black normal font-semibold text-xs w-full focus:outline-none focus-visible:outline-none'/>
    </div>
  )
}

export default Searchbar