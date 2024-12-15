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
    <div className="flex justify-center items-center h-20 bg-gray-100 p-4">
      <div className="flex items-center w-full max-w-2xl space-x-4">
       
        {/* Search Box */}
        <div className="relative w-2/3">
          {/* Search Icon */}
          <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />

          {/* Input Field */}
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
            placeholder="Search for products, categories, or anything..."
          />

          {/* Clear Button */}
          {searchValue && (
            <button
              onClick={handleClear}
              type="button"
              className="absolute right-3 top-2.5 text-gray-500 hover:text-red-500 focus:outline-none"
            >
              Clear
            </button>
          )}
          
        </div>
         {/* Category Dropdown */}
        <div className="relative w-1/3">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

      </div>
    </div>
    </>
  );
}
