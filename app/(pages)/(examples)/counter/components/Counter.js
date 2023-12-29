"use client";

import { useAppSelector } from "@/store";
import { addOne, subtractOne } from "@/store/counter/counterSlice";
import { useDispatch } from "react-redux";
// import { useState } from "react";

export default function Counter({ value }) {
  // const [count, setCount] = useState(value);
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex text-white items-center justify-center p-2 m-1 rounded-xl bg-gray-900 hover:bg-gray-600 transition-all"
        >
          + 1
        </button>

        <button
          onClick={() => dispatch(subtractOne())}
          className="flex text-white items-center justify-center p-2 m-1 rounded-xl bg-gray-900 hover:bg-gray-600 transition-all"
        >
          - 1
        </button>
      </div>
    </>
  );
}
