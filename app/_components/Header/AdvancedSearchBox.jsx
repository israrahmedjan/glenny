'use client'
import { useEffect, useRef, useState } from "react";
import { AwardIcon, Search } from "lucide-react";
import { searchProductsByName } from "../lib/helper";


export default function SearchWithCategory() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products,setproducts] = useState([]);
  const [loading, setloading] = useState(false);
  const inputRef = useRef(null);

  const categories = ["All Categories", "Electronics", "Fashion", "Books", "Furniture", "Toys"];
  // Debounce function to delay execution of fetchProducts
  
  const fetchProducts = async (searchText)=>
  {
   if(searchText != "")
   {
    setloading(true);  
    let result = await searchProductsByName(searchText);
      setproducts(result)
      setloading(false);
   }

  }

  const handleTextSearch = (productname) => {
    console.log("Event occured:",productname);
    setSearchText("");
    if (inputRef.current) {
      inputRef.current.focus(); // Programmatically focus the input
    }
    setSearchText(productname);
    setproducts([]);
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchProducts(searchText);
      console.log(searchText);
      //setSearchText(searchText);
      
    }, 300); // Adjust delay as needed (e.g., 300ms)

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);
  return (
    <>
    <div className="flex items-center text-primary mx-4">
     
      <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border-gray-200 w-[230px] sm:w-[400px] border h-12 outline-none pl-4"
      />
      </div>
      <div className="">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-[80px] sm:w-full h-12 text-[14px] sm:text-[16px] border border-gray-200 outline-none"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center mr-4 bg-secondary h-12 w-[50px] text-white">
        <Search size={25} />
        </div>
      
   {/* search products */}
   {loading && <div className="">loading</div>}
   
   {products.length>0 && 
    <div className="absolute border-gray-400 bg-gray-50 border-b top-[213px] sm:top-28 w-[360px] sm:w-[400px] pt-3">
      {products.map((prod,index)=>
      {
        return (
          <div key={index} className="cursor-pointer  border-secondary border-b-2 p-1 hover:text-secondary" value={searchText} onClick={(e)=>handleTextSearch(prod.name)}>
            <span>{index+1} - </span>
            <span>{prod.name} </span>
              <span className="text-black italic font-semibold float-right">Price: ${prod.price}</span>
              </div>
        )
      })}
    </div>
   }
  
{/* search products end */}
       </div> 

   
        
         </>
  );
}
