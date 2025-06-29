// import { getMockMarketData, updateMarketData } from '../utils/MockData';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import MarketItem from './MarketItem';
import { motion } from 'framer-motion';
import LazyFadeIn from '../lib/useIsInViewport';
import { lazy } from 'react';
import { useMemo } from 'react';

function MarketList({title,coins,icon}) { //get props
const LazyMarketItem = useMemo(() => lazy(() => import('./MarketItem')), []);

  return (

    <div className='flex gap-4'>
        <div className='bg-gradient-to-b from-[#1e1e29] to-[#14161a] shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-white/20 backdrop-blur-sm px-8 py-8 rounded-lg'>
          <span className="flex w-[130px] font-bold mb-4 text-left bg-neutral-900 px-1 rounded-lg text-[14px]">
            <img src={icon} className='w-[16px] h-[16px] inline-block mr-2 align-middle rounded'>
            </img>{title}</span>
          <motion.div layout className="space-y-0">


{coins.map((item) => (
  <LazyFadeIn
    key={item.id}
    LazyComponent={LazyMarketItem}
    item={item}
    threshold={0.15}
  />
))}

{/* {coins.map((item) => (
          <MarketItem key={item.id} item={item} /> //send props as a item
        ))}  */}
            </motion.div>
        </div>
    </div>
  )
}

export default MarketList