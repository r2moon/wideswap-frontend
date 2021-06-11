import { CurrencyGroup } from "types";
import terraTestnetCurrencies from "./terraTestnet";

const currencies: CurrencyGroup = {
  terraTestnet: [terraTestnetCurrencies.Luna, terraTestnetCurrencies.UST],
};

export default currencies;
