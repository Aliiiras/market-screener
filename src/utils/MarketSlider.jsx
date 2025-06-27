import { useEffect,useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import MarketItem from "../components/MarketItem";
import { Suspense, lazy } from "react";


const titles = ["Top Gainers", "Hot Coins", "New Listings"];
const MarketItem = lazy(() => import("../components/MarketItem"));

function MarketSlider({ topGainers, hotCoins, newCoins }) {
  const coinLists = [topGainers, hotCoins, newCoins];
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: right, -1: left

    // changing slide in mobile size automatically
    useEffect(() => {
      const interval = setInterval(() => {
        handleSlide(1); 
      }, 5000);     
      return () => clearInterval(interval); // cleaning unmount
    }, []);


  const handleSlide = (dir) => {
    setDirection(dir);
    setActiveIndex((prev) => {
      if (dir === 1) return prev === coinLists.length - 1 ? 0 : prev + 1;
      else return prev === 0 ? coinLists.length - 1 : prev - 1;
    });
  };

  return (
    <div className="md:hidden relative px-4">
      {/* header and arrows to change */}
      <div className="flex justify-between items-center mb-2">
        <button onClick={() => handleSlide(-1)}>⬅</button>
        <span className="font-bold text-lg">{titles[activeIndex]}</span>
        <button onClick={() => handleSlide(1)}>➡</button>
      </div>

      {/* Sliding List */}
      <div className="relative h-[350px] overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.8, x: -20 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="absolute w-full top-0 left-0 bg-gradient-to-b from-[#1e1e29] to-[#14161a] shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-white/20 backdrop-blur-sm px-6 py-6 rounded-lg"
          >
            <AnimatePresence mode="popLayout">
              {coinLists[activeIndex].map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Suspense fallback={null}>
                    <MarketItem item={item} />
                  </Suspense>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
          {/* Bullet points */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2">
            {titles.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
      </div>
    </div>
  );
}

export default MarketSlider;
