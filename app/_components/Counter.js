// app/components/Counter.js
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement, incrementByAmount } from './redux/store';
import { useEffect } from 'react';
import { getProductCount, getProductCountByCategory } from './lib/helper';


const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const fetchCount= async () => {
    const result = await getProductCount(2); // Replace `3` with the desired category ID
    console.log("Total",result);
}
  useEffect(() => {
   
    fetchCount();
}, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
