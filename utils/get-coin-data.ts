import { TokenData } from '@/types/tokendata';
import { useState, useEffect } from 'react';

const useCoinData = () => {
  const [coinData, setCoinData] = useState<TokenData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCoinData();
        console.log(data?.pairs[0]);
        setCoinData(data?.pairs[0]);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchData();
  }, []);

  return coinData;
};

export default useCoinData;

async function getCoinData() {
  const res = await fetch("https://api.dexscreener.com/latest/dex/tokens/0x55A8f6c6b3Aa58ad6D1f26f6AFeDEd78F32E19f4");
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}
