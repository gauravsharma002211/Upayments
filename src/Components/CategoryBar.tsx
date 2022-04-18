import React,{useState,useEffect} from 'react'
import { ICategories } from '../Pages/Main/Main'


type TCategory={
  categoryList:Array<ICategories>
 getCategoryValue: any
}
const CategoryBar = ({categoryList,getCategoryValue}:TCategory) => {  
  
   
   const onChangeHandler=(e:any)=>{
    getCategoryValue(e.target.value)
   }
  return (
    <div className='relative w-[100%] pb-4 sm:w-[250px] md:w-[250px] lg:w-[250px]'>
        <select onChange={onChangeHandler}  className='relative bg-white shadow-xl p-3 rounded-xl text-[#7a7474] normal font-semibold text-xs w-full focus:outline-none focus-visible:outline-none'>
        <option value=''>Select Category</option>
           {categoryList.length!==0 && categoryList.map((e)=><option key={e.id} value={e.name}>{e.name}</option>)}
           
        </select>
    </div>
  )
}

export default CategoryBar