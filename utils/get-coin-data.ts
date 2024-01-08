import { TokenDetail } from '@/types/tokendata';
import { useState, useEffect } from 'react';

const useCoinData = () => {
  const [coinDetail, setCoinDetail] = useState<TokenDetail | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const detail = await getCoinDetail();
        console.log(detail?.market_data, detail?.symbol, detail?.name);
        setCoinDetail({ current_price: detail?.market_data?.current_price, total_supply: detail?.market_data?.total_supply, symbol: detail?.symbol, name: detail?.name });
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchData();
  }, []);

  return coinDetail;
};

async function getCoinDetail() {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/aegis-ai");
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}

export default useCoinData;