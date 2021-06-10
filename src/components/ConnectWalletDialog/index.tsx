import { Dialog } from "components";
import styled from "styled-components";
import { ConnectType, useWallet } from "@terra-money/wallet-provider";

const WalletItem = styled.button`
  display: flex;
  align-items: center;
  background-color: #00aaaa;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;

type Props = {
  onClose: () => void;
};

const ConnectWalletDialog = ({ onClose }: Props) => {
  const { connect } = useWallet();

  const connectWallet = () => {
    connect(ConnectType.CHROME_EXTENSION);
    onClose();
  };

  return (
    <Dialog title="Connect to a wallet" onClose={onClose}>
      <WalletItem onClick={connectWallet}>
        <span>Terra Station</span>
      </WalletItem>
    </Dialog>
  );
};

export default ConnectWalletDialog;
