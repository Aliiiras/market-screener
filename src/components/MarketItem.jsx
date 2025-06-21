// import { useEffect,useState } from "react";
// import { getMockMarketData, updateMarketData } from '../utils/MockData';
import { formatSubZeroCompact } from "./SubZero";

function MarketItem({item}) {
  return (
    <div className="w-[19vw]">
        <div key={item.id} className="w-full flex justify-between py-2">
            <div className="flex gap-1 items-center">
              <img src={item.image} alt={item.name} className='w-[20px] h-[20px] inline-block mr-2' />
              <span className="items-center text-[14px]">{item.name}</span>
              <span className='text-neutral-600 text-[14px]'>({item.pair})</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[14px]">{formatSubZeroCompact(item.price)}</span>
              <span className={item.percentageChange > 0 ? "text-green-500 text-[12px]" : "text-red-500 text-[12px]"}>
                {item.percentageChange}%
              </span>
            </div>
        </div>
    </div>
  )
}

export default MarketItem