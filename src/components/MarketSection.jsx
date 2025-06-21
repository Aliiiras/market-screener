import { useEffect, useState } from "react";
import { getMockMarketData, updateMarketData } from "../utils/MockData";
import MarketList from "./MarketList";
import MarketItem from "./MarketItem";

function MarketSection() {
  const [data, setData] = useState(getMockMarketData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => updateMarketData(prev));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const topGainers = [...data].sort((a, b) => b.percentageChange - a.percentageChange).slice(0, 5);
  const hotCoins = [...data].sort((a, b) => b.volume - a.volume).slice(0, 5);
  const newCoins = data.filter((coin) => coin.isNew).slice(0, 5);
  return (
    //props flow is MarketSection > MarketList > MarketItem
    <>
        <div className="flex gap-6">
        {/* send props */}
      <MarketList title="Top Gainers" coins={topGainers} />
      <MarketList title="Hot Coins" coins={hotCoins} />
      <MarketList title="New Listings" coins={newCoins} />
    </div>
    </>
  );
}

export default MarketSection;
