export type TokenData = {
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  chainId: string;
  dexId: string;
  fdv: number;
  labels: string[];
  liquidity: {
    usd: number;
    base: number;
    quote: number;
  };
  pairAddress: string;
  pairCreatedAt: number;
  priceChange: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  priceNative: string;
  priceUsd: string;
};

export type TokenDetail = {
  current_price: {
    usd: number;
  };
  total_supply: number;
  symbol: string;
  name: string;
}
