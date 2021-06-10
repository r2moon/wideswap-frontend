import React from "react";
import { WalletProvider, NetworkInfo } from "@terra-money/wallet-provider";
import { networks } from "constants/index";

const walletConnectChainIds: Record<number, NetworkInfo> = {
  0: networks.testnet,
  1: networks.mainnet,
};

type Props = {
  children?: React.ReactNode;
};

const WalletConnectProvider: React.FC = ({ children }: Props) => (
  <WalletProvider
    defaultNetwork={networks.mainnet}
    walletConnectChainIds={walletConnectChainIds}
    connectorOpts={{ bridge: "https://walletconnect.terra.dev/" }}
  >
    {children}
  </WalletProvider>
);

export default WalletConnectProvider;
