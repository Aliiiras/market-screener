import React from 'react';
import { motion } from "framer-motion";
import { formatSubZeroCompact } from "./SubZero";
import TradeIcon from "../assets/exchange.svg";

function MarketItem({ item, isSkeleton = false }) {
  return (
    <div className="w-full">
      <motion.div
        layout
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(4px)" }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative group w-full flex justify-between py-2 hover:bg-white/5 transition rounded-md px-2">
          {/* Trade Icon */}
          <div className="absolute top-1 right-1 flex items-center justify-center">
            <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-purple-500 text-white rounded-md shadow-sm text-xs px-0 w-0 h-0 group-hover:px-2 group-hover:py-1 group-hover:w-auto group-hover:h-auto`}>
              <img src={TradeIcon} alt="Trade" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>

          {/* items */}
          <div className="flex w-full justify-between text-right">
            <div className="flex flex-wrap gap-1 items-center leading-[10px]">
              {isSkeleton ? (
                <>
                  <div className="w-[20px] h-[20px] bg-neutral-700 rounded-full mr-2 animate-pulse" />
                  <div className="w-[60px] h-[12px] bg-neutral-700 rounded animate-pulse" />
                  <div className="w-[30px] h-[12px] bg-neutral-800 rounded animate-pulse" />
                </>
              ) : (
                <>
                  <img loading="lazy" src={item.image} alt={item.name} className='w-[20px] h-[20px] inline-block mr-2' />
                  <span className="items-center text-[14px]">{item.name}</span>
                  <span className='text-neutral-600 text-[14px]'>({item.pair})</span>
                </>
              )}
            </div>

            <div className="flex flex-col text-right gap-[2px]">
              {isSkeleton ? (
                <>
                  <div className="w-[100px] h-[12px] bg-neutral-700 rounded animate-pulse" />
                  <div className="w-[100px] h-[10px] bg-neutral-800 rounded animate-pulse" />
                </>
              ) : (
                <>
                  <span className="text-[14px]">{formatSubZeroCompact(item.price)}</span>
                  <span className={item.percentageChange > 0 ? "text-green-500 text-[12px]" : "text-red-500 text-[12px]"}>
                    {item.percentageChange}%
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default React.memo(MarketItem, (prev, next) => {
  return JSON.stringify(prev.item) === JSON.stringify(next.item);
});
