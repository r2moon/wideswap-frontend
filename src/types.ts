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

export type CurrencyGroup = Record<string, Currency[]>;

export interface TerraNetworkInfo {
  name: string;
  chainID: string;
  lcd: string;
  mantle: string;
}

export type NetworkInfo = TerraNetworkInfo;
