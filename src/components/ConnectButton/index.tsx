import { useState } from "react";
import styled from "styled-components";
import { ConnectWalletDialog } from "components";
import { useAddress } from "hooks";
import { truncate } from "utils/formatter";

const StyledConnectButton = styled.button`
  border: 1px solid red;
  height: 40px;
  border-radius: 20px;
  padding: 0 15px;
`;

const ConnectButton = () => {
  const address = useAddress();

  const [showConnectWalletDialog, setShowConnectWalletDialog] =
    useState<boolean>(false);

  const connectHandler = () => {
    if (address) {
      console.log("connected");
    } else {
      setShowConnectWalletDialog(true);
    }
  };

  return (
    <StyledConnectButton onClick={connectHandler}>
      {address && truncate(address)}
      {!address && "Connect Button"}
      {showConnectWalletDialog && (
        <ConnectWalletDialog
          onClose={() => setShowConnectWalletDialog(false)}
        />
      )}
    </StyledConnectButton>
  );
};

export default ConnectButton;
