import { useCallback } from "react";
import styled from "styled-components";
import { Modal } from "components";
import { ConnectType, useWallet } from "@terra-money/wallet-provider";

const UpperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;

  h5 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  h5:last-child {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 0;
    font-weight: 500;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WalletItem = styled.button`
  display: flex;
  align-items: center;
  background-color: #00aaaa;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;

type Props = {
  isOpen: boolean;
  onDismiss: () => void;
};

const ConnectWalletModal = ({ isOpen, onDismiss }: Props) => {
  const { connect } = useWallet();

  const connectWallet = useCallback(() => {
    connect(ConnectType.CHROME_EXTENSION);
    onDismiss();
  }, [connect, onDismiss]);

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={90}>
      <UpperSection>
        <HeaderRow>
          <span>Connect to a wallet</span>
        </HeaderRow>
        <WalletItem onClick={connectWallet}>
          <span>Terra Station</span>
        </WalletItem>
      </UpperSection>
    </Modal>
  );
};

export default ConnectWalletModal;
