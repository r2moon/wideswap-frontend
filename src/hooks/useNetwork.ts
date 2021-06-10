import { useWallet } from "@terra-money/wallet-provider";
import { FINDER, networks } from "constants/index";

const useNetwork = () => {
  const { network: extNetwork } = useWallet();

  const network = networks[extNetwork.name];

  const finder = (address: string, path: string = "account") =>
    `${FINDER}/${extNetwork.chainID}/${path}/${address}`;

  return { ...extNetwork, ...network, finder };
};

export default useNetwork;
