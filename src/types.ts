export interface Currency {
  name: string;
  symbol: string;
  denom?: string;
  address?: string;
  decimals: number;
  isNative: boolean;
  network: string;
  wrappedToken?: Currency;
}

export interface CurrencyGroup {
  [network: string]: Currency[];
}
