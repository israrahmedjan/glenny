'use client';
import { useEffect, useState } from 'react';
import fetchProducts from '../lib/helper';
import ProductCard from './ProductCard';
import Loader from '../Loader';
import Counter from '../Counter';

function ProductsByCategory({ categoryId, limit, categoryname }) {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 2;
  const [total, setTotal] = useState(6);


  const fetchProducts1 = async () => {
    const data = await fetchProducts(currentPage, pageSize);
    setProducts(data)
    setloading(false);
  }

  useEffect(() => {
    fetchProducts1();
  }, [currentPage]);

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


  return (
    <>
      <div className='border-gray-100 border-r-2 border py-3 px-2 mx-16 my-2'>

        {(products.length == 0) && (<div><Loader /></div>)}
        <div className="grid grid-cols-4 gap-4">
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
        <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
        )}
      </div>

    </>
  );
}

export default ProductsByCategory;
