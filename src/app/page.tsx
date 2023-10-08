'use client';
import { useCallback, useEffect, useState } from 'react';

type CommissionPain = {
  saleAmount: number;
  commission: number;
};

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

const generateCommissionList = () => {
  const commissionList = [];
  for (let saleAmount = 1000; saleAmount <= 10000; saleAmount += 1000) {
    const commission = calculateCommission(saleAmount);
    commissionList.push({ saleAmount, commission });
  }
  return commissionList;
};

export default function Home() {
  const [value, setValue] = useState('');
  const [commissionList, setCommissionList] = useState<CommissionPain[]>([]);

  useEffect(() => {
    setCommissionList(generateCommissionList());
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
    },
    [],
  );

  return (
    <div className="flex flex-row items-start justify-center min-h-screen bg-gray-800 p-10">
      <div className="bg-white rounded-lg shadow-lg text-black w-1/3 p-10 m-10">
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
          min="0"
          className="text-input w-full p-2 border rounded mb-6"
          type="number"
          value={value}
          onChange={handleChange}
        />
        <div className="text-2xl font-semibold">
          Commission: {value ? calculateCommission(parseFloat(value)) : 0}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-lg text-black w-1/3 p-10 m-10">
        <div className="flex mb-2 font-semibold text-lg border-b border-gray-300 pb-2">
          <div className="w-1/2 p-2">Sale Amount</div>
          <div className="w-1/2 p-2">Commission</div>
        </div>
        {commissionList.map((item, index) => (
          <div key={index} className="flex border-b border-gray-300 py-2">
            <div className="w-1/2 p-2">{item.saleAmount}</div>
            <div className="w-1/2 p-2">{item.commission.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
