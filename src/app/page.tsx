'use client';
import { useCallback, useState } from 'react';

const lagrangePoly = (x: number): number => {
  return (x * (22000 - x)) / 100000;
};

const calculateCommission = (saleAmount: number): number => {
  if (saleAmount <= 10000) {
    return lagrangePoly(saleAmount);
  } else {
    return lagrangePoly(10000) + (saleAmount - 10000) * 0.01;
  }
};

export default function Home() {
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
    },
    [],
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="p-10 bg-white rounded-lg shadow-lg text-black w-1/3">
        <h1 className="text-3xl font-semibold mb-6 text-black">
          Commission Calculator
        </h1>
        <label
          htmlFor="sale-value"
          className="block text-lg font-semibold mb-3"
        >
          Enter sale value
        </label>
        <input
          id="sale-value"
          className="text-input w-full p-2 border rounded mb-6"
          type="number"
          value={value}
          onChange={handleChange}
        />
        <div className="text-2xl font-semibold">
          Commission: {value ? calculateCommission(parseFloat(value)) : 0}
        </div>
      </div>
    </div>
  );
}
