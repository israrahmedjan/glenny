'use client'
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchWithCategory() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["All Categories", "Electronics", "Fashion", "Books", "Furniture", "Toys"];

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <>
    <div className="flex items-center text-primary">
     
      <div>
      <input
        type="text"
        placeholder="Search..."
        className="border-gray-200 sm:w-[400px] border h-12 outline-none pl-4"
      />
      </div>
      <div className="">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-[120px] sm:w-full h-12 border border-gray-200 outline-none"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className=" flex items-center justify-center mr-4 bg-secondary h-12 w-[50px] text-white">
        <Search size={25} />
        </div>
      
       </div> 
        
         </>
  );
}
