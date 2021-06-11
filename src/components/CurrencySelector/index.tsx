import { useEffect, useState } from "react";
import styled from "styled-components";
import { SelectCurrencyModal } from "components";
import { Currency } from "types";

const SelectButton = styled.button`
  border: 1px solid red;
  height: 40px;
  border-radius: 20px;
  padding: 0 15px;
`;

type Props = {
  currency?: Currency;
  onSelectCurrency: (currency: Currency | undefined) => void;
};

const CurrencySelector = ({ currency, onSelectCurrency }: Props) => {
  const [showCurrencySelectDialog, setShowCurrencySelectDialog] =
    useState<boolean>(false);

  const openSelectDialog = () => {
    setShowCurrencySelectDialog(true);
  };

  const dismissSelectDialog = () => {
    setShowCurrencySelectDialog(false);
    console.log("###");
  };

  useEffect(() => {
    console.log(showCurrencySelectDialog);
  }, [showCurrencySelectDialog]);
  return (
    <SelectButton onClick={openSelectDialog}>
      {currency && currency.symbol}
      {!currency && "Select a token"}
      <SelectCurrencyModal
        isOpen={showCurrencySelectDialog}
        onSelectCurrency={onSelectCurrency}
        onDismiss={dismissSelectDialog}
      />
    </SelectButton>
  );
};

export default CurrencySelector;
