"use client";
import { useAppSelector } from "@/store";

export const DisplayValue = () => {
  const value = useAppSelector((state) => state.counter.count);

  return <div className="text-9xl">{value}</div>;
};
