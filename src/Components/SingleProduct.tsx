import axios from 'axios'
import React from 'react'
import product1 from "../../src/Images/product1.png"
type TSingleProduct={
     productName:string,
     image:string,
     price:number ,
     id:string
    
}
const SingleProduct = ({ productName,image,price,id }:TSingleProduct) => {

    function checkURL(url: any) {
        if(url.match(/\.(jpeg|jpg|gif|png)$/) != null)
        return url;
        else return product1
    }
    const onDeleteHandler=(e: { stopPropagation: () => void })=>{
      e.stopPropagation();
       axios.delete(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`)
       axios
      .delete(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`)
      .then(function (response) {
        console.log("deleted succefully")
        if(response.status==200){
          alert("product deleted successfully!")
          window.location.reload()
        }
      })
      .catch(function (error) {
        console.log(error)
       
      })
    }
  return (
   
    <div className='relative mb-8'>
    <div className='relative bg-white p-5 rounded-md w-full pt-[100%]'>
            <a href='#'><img src={checkURL(image)} alt="" className='p-5 absolute top-0 left-0 right-0 bottom-0 w-full h-full object-contain' /></a>
        </div>
        <div className='relative font-semibold text-black pt-2'>
            <div onClick={onDeleteHandler} className="cursor-pointer"><i className="fa fa-trash cursor: pointer"></i> </div>
            <span className='text-left break-words text-base sm:text-lg md:text-lg lg:text-lg'>{productName}</span> 
            <p className='text-center break-words text-sm sm:text-base md:text-base lg:text-base'>RS {price}</p>
           
           


           
        </div>
    </div>

  )
}

export default SingleProduct