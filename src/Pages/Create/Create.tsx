import React,{useEffect, useState} from 'react'
import TopBar from '../../Components/TopBar';
import { IProductList,ICategories } from '../Main/Main';
import logo from './logo.svg';
import axios from 'axios';
import { json } from 'stream/consumers';

export interface IErrorMsg {    
    name: string
    avatar: string  
    price: string  
    category: string
    description: string
  }
const Create=()=>{
    const [productData, setProductData] = useState({name:'',description:'',avatar:'',category:'',price:''})
    const [errors, setErrors] = useState<IErrorMsg>({name:'',description:'',avatar:'',category:'',price:''})
    const [categories, setCategories] = useState<Array<ICategories>>([])

    const handleValidation=()=>{
        let isFormValid=true;
        let errors:IErrorMsg={name:'',description:'',avatar:'',category:'',price:''}
        if(productData.name===''){
            errors['name']='Enter valid product name'
            isFormValid=false
        }
        if(productData.description===''){
            errors['description']='Enter valid product name'
            isFormValid=false
        }
        if(productData.avatar===''){
            errors['avatar']='Enter valid image path'
            isFormValid=false
        }
        if(productData.category===''){
            errors['category']='Please select category'
            isFormValid=false
        }
        if(productData.price===''){
            errors['price']='Enter valid price'
            isFormValid=false
        }
        setErrors({...errors})
        return isFormValid
    }
    useEffect(()=>{
        axios
        .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/")
        .then(function (response) {
         
         setCategories(response.data)
        })
        .catch(function (error) {
          console.log(error)
          setCategories([])
        })
    },[])
    const submitHandler=async()=>{
        
      if(handleValidation()){
        try {  
                const data=JSON.stringify(productData)
                const response = await axios.post("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products",data)
                if(response.status==201)

                 alert("product added successfully!")
                 window.location.href="/"
               
              } catch (error) {
                console.log('products not added', error)
               
              }
      }
    }
   
  return (
    <div className='container mx-auto px-4'>
      <TopBar/>
      <div className='relative py-8 w-full m-auto sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]'>
        <div className='relative py-8'>
            <h1 className='text-3xl font-semibold text-black'>Create Product</h1>
        </div>
        <div className='relative'>
            <div className='item mb-4'>
                <input type={'text'} placeholder='Product name' onChange={(e)=>setProductData({...productData,name:e.target.value})} className='relative bg-white shadow-xl p-3 rounded-xl text-[#7a7474] normal font-semibold text-xs w-full focus:outline-none focus-visible:outline-none'/>
                <span className='text-red-600'>{errors['name']}</span>
            </div>
            <div className='item mb-4'>
                <textarea placeholder='Description' onChange={(e)=>setProductData({...productData,description:e.target.value})} className='relative bg-white shadow-xl p-3 rounded-xl text-[#7a7474] normal font-semibold text-xs w-full focus:outline-none focus-visible:outline-none'></textarea>
                <span className='text-red-600'>{errors['description']}</span>
            </div>
            <div className='item mb-4'>
                <input type={'url'} placeholder='Image URL' onChange={(e)=>setProductData({...productData,avatar:e.target.value})} className='relative bg-white shadow-xl p-3 rounded-xl text-[#7a7474] normal font-semibold text-xs w-full focus:outline-none focus-visible:outline-none'/>
                <span className='text-red-600'>{errors['avatar']}</span>
            </div>
            <div className='item mb-4'>
                <select onChange={(e)=>setProductData({...productData,category:e.target.value})} className='relative bg-white shadow-xl p-3 rounded-xl text-[#7a7474] normal font-semibold text-xs w-full focus:outline-none focus-visible:outline-none'>
                 <option>Select Category</option>
                { categories.map((e)=><option value={e.id}>{e.name}</option>)}
                   
                </select>
                <span className='text-red-600'>{errors['category']}</span>
            </div>
            <div className='item mb-6'>
                <input type={'text'} placeholder='Price'  onChange={(e)=>setProductData({...productData,price:e.target.value})} className='relative bg-white shadow-xl p-3 rounded-xl text-[#7a7474] normal font-semibold text-xs w-full focus:outline-none focus-visible:outline-none'/>
                <span className='text-red-600'>{errors['price']}</span>
            </div>
            <div className='item mb-4' onClick={submitHandler}>
                <button className='relative uppercase bg-white shadow-xl p-3 rounded-xl text-black normal font-semibold text-xs w-full focus:outline-none focus-visible:outline-none'>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}


export default Create;

