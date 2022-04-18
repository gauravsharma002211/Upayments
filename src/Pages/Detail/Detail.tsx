import React,{useEffect,useState} from 'react'
import TopBar from '../../Components/TopBar'
import axios from 'axios' 
import {useParams} from "react-router-dom";


export interface IProductDetail {  
  avatar: string 
  category: string
  createdAt: number
  description: string
  developerEmail: string
  id:string
  name: string
  price: string
}

const Detail = () => {
   
  let { id } = useParams();
  const [productDetail, setProductDetail] = useState<IProductDetail>({avatar:'',category:'',createdAt:100,description:'',developerEmail:'',id:'',name:'',price:''})

  
  useEffect(() => {
    
    axios
      .get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`)
      .then(function (response) {
       
        setProductDetail(response.data)
      })
      .catch(function (error) {
        console.log(error)
       
      })
  }, [])
  return (
    <div className='container mx-auto px-4'>
      <TopBar/>
      <div className='relative py-8 w-full max-w-[85%] m-auto'>
        <div className='pb-6 border-b border-[#505050] block sm:flex md:flex lg:flex'>
            <div className='relative bg-white p-5 rounded-md  sm:w-[200px] h-[200px] md:w-[250px] h-[250px] lg:w-[300px] h-[300px]'>
                <img src={productDetail?.avatar} alt="" className='w-full h-full object-contain' />
            </div>
            <div className='relative flex flex-col justify-between items-start p-3 sm:p-6 md:p-6 lg:p-6'>
                <h3 className='text-left text-black font-bold text-lg sm:text-2xl md:text-2xl lg:text-3xl'>{productDetail.name}</h3>
                <p className='text-left text-black font-semibold text-base sm:text-lg md:text-lg lg:text-lg'>{productDetail.price}</p>
            </div>
        </div>
        <div className='desc text-left py-4'>
            <h2 className='text-lg font-semibold'>Description</h2>
            <p className='text-[#505050] text-sm'>{productDetail?.description}</p>
        </div>

      </div>
    </div>
  )
}

export default Detail