// import { getMockMarketData, updateMarketData } from '../utils/MockData';
// import { useEffect } from 'react';
// import { useState } from 'react';
import MarketItem from './MarketItem';


function MarketList({title,coins}) { //get props
  return (

    <div className='flex gap-4'>
        <div className='bg-gradient-to-b from-[#1e1e29] to-[#14161a] shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-white/20 backdrop-blur-sm px-8 py-8 rounded-lg'>
        <span className="font-bold block mb-4">{title}</span>
      {coins.map((item, index) => (
        <MarketItem key={index} item={item} /> //send props as a item
      ))}
    </div>
    </div>
  )
}

export default MarketList