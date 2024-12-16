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
    <div className="flex justify-center  border-red items-center h-auto sm:h-20 bg-gray-100 p-4">
        <div>
            Search Items
        </div>
         {/* Category Dropdown */}
         <div className="">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-[100px] sm:w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
         </>
  );
}
