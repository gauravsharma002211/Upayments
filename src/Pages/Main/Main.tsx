import React,{useState,useEffect} from 'react'
import TopBar from '../../Components/TopBar'
import Searchbar from '../../Components/SearchBar'
import CategoryBar from '../../Components/CategoryBar'
import Product from '../../Components/Product'
import AddIcon from "../../Images/plus.png"
import axios from 'axios'

export interface IProductList {
  createdAt: number
  name: string
  avatar: string
  developerEmail: string
  price: any
  id: string
  category: string
  description?: string
}

export interface ICategories {
  createdAt: string
  name: string 
  id: string 
}
const Main = () => {
  const [productList, setProductList] = useState<Array<IProductList>>([])
  const [allProducts, setAllProducts] = useState<Array<IProductList>>([])

  const [categories, setCategories] = useState<Array<ICategories>>([])
  const [selectedCategory, setSelectedCategory] = useState('')
 

  useEffect(() => {
    axios
      .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/")
      .then(function (response) {
        console.log(response)
        setAllProducts(response.data)
       setProductList(response.data)
      })
      .catch(function (error) {
        console.log(error)
        setProductList([])
      })
  }, [])
 
  useEffect(() => {
    axios
      .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/")
      .then(function (response) {
        console.log("category==>",response)
       setCategories(response.data)
      })
      .catch(function (error) {
        console.log(error)
        setCategories([])
      })
  }, [])
  useEffect(()=>{
   
   
  },[selectedCategory])
 
  const getCategoryValue=(value:string)=>{
    setSelectedCategory(value)
    if(!value){
    
      setProductList(allProducts)
    }else{
     
      const newProductList= allProducts.filter((item)=>item.category===value)
      setProductList(newProductList)
     
    }
   
  }
  
  
  const onClickHandler=()=>{
    window.location.href=`/create`
  }
  const SearchDataHandler=(data: string)=>{
    const filterData=allProducts.filter((e) => e.name.toLowerCase().includes(data.toLowerCase()));
   
    setProductList(filterData)
  }
  return (
    <div className='container mx-auto px-4'>
      <TopBar/>
      <div className='block items-center justify-between sm:flex md:flex lg:flex'>
        <Searchbar SearchDataHandler={SearchDataHandler}/>
        <CategoryBar categoryList={categories} getCategoryValue={getCategoryValue}/>
      </div>
     <Product productList={productList}/>
      {/* <Product productName={productList?.name} image={productList?.avatar} price={productList?.price}/>  */}
      <div onClick={onClickHandler} className='add-btn fixed bottom-[30px] right-[30px] rounded-full bg-black p-3 w-[50px] h-[50px]'><a href='#'><img src={AddIcon} alt="" className='' /></a></div>    
    </div>
  )
}

export default Main