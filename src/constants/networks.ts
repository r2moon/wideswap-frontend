import { NetworkInfo } from "types";

const networks: Record<string, NetworkInfo> = {
  mainnet: {
    name: "mainnet",
    chainID: "columbus-4",
    lcd: "https://lcd.terra.dev",
    mantle: "https://mantle.terra.dev/",
  },
  testnet: {
    name: "testnet",
    chainID: "tequila-0004",
    lcd: "https://tequila-lcd.terra.dev",
    mantle: "https://tequila-mantle.terra.dev/",
  },
};

export default networks;
