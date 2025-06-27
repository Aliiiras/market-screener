const coins = [
  { id: 'btc', name: 'Bitcoin',pair:'BTCUSDT', price: 68123.42,volume: 98765432,isNew: false, rank: 1,
    image: '/bitcoin.png',
   },
  { id: 'eth', name: 'Ethereum',pair:'ETHUSDT', price: 3712.18,volume: 87654321,isNew: false, rank: 2,
    image: '/ethereum.png',
   },
  { id: 'sol', name: 'Solana',pair:'SOLUSDT', price: 156.44,volume: 7654321,isNew: true, rank: 3,
    image: '/solana.png',
   },
  { id: 'doge', name: 'Dogecoin',pair:'DOGUSDT', price: 0.1548,volume: 2654321,isNew: true, rank: 4,
    image: '/dogecoin.png',
   },
  { id: 'ada', name: 'Cardano',pair:'ADAUSDT', price: 0.4121,volume: 754321,isNew: true, rank: 5,
    image: '/cardano.png',
   },
  { id: 'link', name: 'Chainlink',pair:'LINKUSDT', price: 14.87,volume: 554321,isNew: true, rank: 6,
    image: '/chainlink.png',
   },
  { id: 'dot', name: 'Polkadot',pair:'DOTUSDT', price: 6.24,volume: 2254321,isNew: true, rank: 7,
    image: '/polkadot-new.png',
   },
  { id: 'avax', name: 'Avalanche',pair:'AVAUSDT', price: 29.73,volume: 1654321,isNew: false, rank: 8,
    image: '/avalanche.png',
   },
  { id: 'shib', name: 'Shiba',pair:'SHIBUSDT', price: 0.00073,volume: 854321,isNew: true, rank: 9,
    image: '/shiba-inu.png',
   },
];

export function getMockMarketData() {
  // deep clone to avoid mutation
  return coins.map((coin) => ({ ...coin }));
}

// Simulate new prices + rank changes
export function updateMarketData(data) {
  // Update prices with random +/- % fluctuation
    const updated = data.map((coin) => {
    const oldPrice = coin.price;
    const fluctuation = (Math.random() - 0.2) * 0.05; // +/- 5%
    const newPrice = coin.price * (1 + fluctuation);
    const percentageChange = getPercentageChange(newPrice, oldPrice);
    coin.volume = Math.floor(Math.random() * 1000000); // changing volume
    return {
      ...coin,
      price: parseFloat(newPrice.toFixed(8)),
      percentageChange: parseFloat(percentageChange),
    };
  });


  // Re-sort by price descending and assign new ranks
  updated.sort((a, b) => b.price - a.price);
  updated.forEach((coin, index) => {
    coin.rank = index + 1;
  });

  return updated;
}


//Get percentage change
function getPercentageChange(newPrice, oldPrice) {
  if (oldPrice === 0) return 0; // برای جلوگیری از تقسیم بر صفر
  const change = ((newPrice - oldPrice) / oldPrice) * 100;
  return change.toFixed(2); // برگردوندن تا ۲ رقم اعشار
}
