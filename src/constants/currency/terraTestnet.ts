import { Currency } from "types";

const Luna: Currency = {
  name: "Luna",
  symbol: "LUNA",
  denom: "uluna",
  address: undefined,
  decimals: 6,
  isNative: true,
  network: "terra-testnet",
  wrappedToken: undefined,
};

const UST: Currency = {
  name: "UST",
  symbol: "UST",
  denom: "uusd",
  address: undefined,
  decimals: 6,
  isNative: true,
  network: "terra-testnet",
  wrappedToken: undefined,
};

export default {
  Luna,
  UST,
};
