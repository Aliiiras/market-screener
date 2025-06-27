import { useEffect, useState } from "react";
import { getMockMarketData, updateMarketData } from "../utils/MockData";
import MarketList from "./MarketList";
import MarketSlider from "../utils/MarketSlider";
import listIcons from "../utils/ListIcon"

function MarketSection() {
  const [data, setData] = useState(getMockMarketData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => updateMarketData(prev));
    }, 4000);

    return () => clearInterval(interval);
  }, []);
//   made new lists based on our show list
  const topGainers = [...data].sort((a, b) => b.percentageChange - a.percentageChange).slice(0, 5);
  const hotCoins = [...data].sort((a, b) => b.volume - a.volume).slice(0, 5);
  const newCoins = data.filter((coin) => coin.isNew).slice(0, 5);
  return (
    //props flow is MarketSection > MarketList > MarketItem
    <>
    {/* showing in desktop */}
        <div className="hidden md:flex gap-6">
        {/* send props */}
      <MarketList title="Top Gainers" coins={topGainers} icon={listIcons["Top Gainers"]}/>
      <MarketList title="Hot Coins" coins={hotCoins} icon={listIcons["Hot Coins"]}/>
      <MarketList title="New Listings" coins={newCoins} icon={listIcons["New Listings"]}/>
    </div>
    {/* showing in mobile */}
    <MarketSlider topGainers={topGainers} hotCoins={hotCoins} newCoins={newCoins} />

    </>
  );
}

export default MarketSection;
