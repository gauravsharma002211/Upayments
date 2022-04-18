import React from 'react'
import { IProductList } from '../Pages/Main/Main'
import SingleProduct from './SingleProduct'
type TProduct={
    productList:Array<IProductList>
}

const Product = ({productList}:TProduct) => {
   
    const onClickHandler=(id:string)=>{
    window.location.href=`detail/${id}`
    } 
   
  return (
    <div className='relative py-8 w-full max-w-[85%] m-auto'>
        <div className='grid gap-4 grid-cols-12 !m-0'>
           {productList.length!==0 && productList.map((e: IProductList,index: any)=><div className='col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-3' onClick={()=>onClickHandler(e?.id)} key={index}><SingleProduct productName={e?.name} image={e?.avatar} price={e?.price}  id={e?.id}/></div>)
           }
            
           
        </div>
       {productList.length==0 && "Product not found!"}
    </div>
  )
}

export default Product