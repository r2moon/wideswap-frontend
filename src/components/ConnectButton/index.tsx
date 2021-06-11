import { useState } from "react";
import styled from "styled-components";
import { ConnectWalletModal } from "components";
import { useAddress } from "hooks";
import { truncate } from "utils/formatter";

const StyledConnectButton = styled.button`
  border: 1px solid #fff;
  height: 40px;
  border-radius: 20px;
  padding: 0 15px;
  background-color: transparent;
  color: #fff;
`;

const ConnectButton = () => {
  const address = useAddress();

  const [showConnectWalletModal, setShowConnectWalletModal] =
    useState<boolean>(false);

  const connectHandler = () => {
    if (address) {
      console.log("connected");
    } else {
      setShowConnectWalletModal(true);
    }
  };

  return (
    <StyledConnectButton onClick={connectHandler}>
      {address && truncate(address)}
      {!address && "Connect Button"}
      <ConnectWalletModal
        isOpen={showConnectWalletModal}
        onDismiss={() => setShowConnectWalletModal(false)}
      />
    </StyledConnectButton>
  );
};

export default ConnectButton;
