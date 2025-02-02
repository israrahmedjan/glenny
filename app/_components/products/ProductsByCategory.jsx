'use client';
import { useEffect, useState } from 'react';
import fetchProducts, { getProductCount } from '../lib/helper';
import ProductCard from './ProductCard';
import Loader from '../Loader';
import { ArrowDownNarrowWide, ArrowUpNarrowWide, ChevronRight, ChevronLeft, BaggageClaim , TabletSmartphone } from 'lucide-react';
import { } from 'lucide-react';


function ProductsByCategory({ categoryId, limit, categoryname }) {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = limit;
  const [total, setTotal] = useState(null);
  const [orderItem, setorderItem] = useState({ ordername: "name", asc: true, v: 1 });


  const fetchProducts1 = async () => {
    const data = await fetchProducts(currentPage, pageSize, orderItem, categoryId);
    setProducts(data)
    setloading(false);
  }

  useEffect(() => {
    fetchProducts1();

  }, [currentPage, orderItem]);

  useEffect(() => {
    const totalfunc = async () => {
      const result = await getProductCount(categoryId)
      setTotal(result);
    }
    totalfunc();
  }, [total]);

  const totalPages = Math.ceil(total / pageSize);

  const handleNextPage = () => {
    console.log(currentPage);
    // let currentPage1 = currentPage + 1
    //  setCurrentPage(currentPage1);
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    // console.log("Hello world!");
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const handleOrder = (ordervalue) => {


    if (ordervalue == 1) {
      setorderItem({ ordername: "name", asc: true, v: 1 })
    }
    else if (ordervalue == 2) {
      setorderItem({ ordername: "name", asc: false, v: 2 })
    }
    else if (ordervalue == 3) {
      setorderItem({ ordername: "price", asc: true, v: 3 })
    }
    else if (ordervalue == 4) {
      setorderItem({ ordername: "price", asc: false, v: 4 })
    }
    else {
      setorderItem({ ordername: "name", asc: true, v: 1 })
    }


  }


  return (
    <>
      <div className='border-gray-100 border-r-2 border py-3 px-2 w-full sm:max-w-[769px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto'>
      <div className='flex flex-col md:flex-row justify-between my-2 '>

          <div className="flex items-center text-primary">
            {/* <BaggageClaim className='size-12 text-primary' /> */}
            {/* <h1 className="text-[25px] text-secondary font-semibold ml-2">{categoryname}</h1> */}
            <h1 className="text-[25px] font-bold bg-gradient-to-r from-black to-secondary bg-clip-text text-transparent">
            {categoryname}</h1>
          </div>
          <div className='flex items-center justify-end gap-2 text-primary'>


            <h1>Sort</h1>

            <select className='border-gray-200 border  border-r-2 p-1 outline-none' onChange={(e) => handleOrder(e.target.value)}>
              <option value={1}>Ascending By Title</option>
              <option value={2}>Descending By Title</option>
              <option value={3}>Ascending By Price</option>
              <option value={4}>Descending By Price</option>

            </select>
            {(orderItem.v == 1 || orderItem.v == 3) ? <ArrowUpNarrowWide /> : <ArrowDownNarrowWide />}


          </div>
        </div>
        {(products.length == 0) && (<div><Loader /></div>)}
        <div className="grid grid-cols-2 text-base sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* <p>{JSON.stringify(plusstr)}</p> */}
          {/* Sort Items  */}
          {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
          {(products.length != 0) && (
            products.map((prod, index) => {
              return (
                <div key={index}>
                  <ProductCard item={prod} />
                </div>

              )

            })
          )}
        </div>
        {(products.length != 0) && (
          <div className="pagination flex items-center justify-end py-3">
            <ChevronLeft onClick={handlePrevPage} disabled={currentPage === 1} className='cursor-pointer' />
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <ChevronRight onClick={handleNextPage} disabled={currentPage === totalPages} className='cursor-pointer' />
          </div>
        )}
      </div>

    </>
  );
}

export default ProductsByCategory;
