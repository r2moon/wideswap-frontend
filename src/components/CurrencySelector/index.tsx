import { useCallback, useState } from "react";
import styled from "styled-components";
import { CurrencySelectModal } from "components";
import { Currency } from "types";

const SelectButton = styled.button`
  border: 0;
  border-radius: 20px;
  padding: 5px 10px;
  background: transparent;

  :hover {
    background: #bbb;
  }
`;

const CurrencySpan = styled.span`
  color: #5c5c5c;
  font-weight: 600;
  font-size: 15px;
`;

type Props = {
  currency?: Currency;
  onSelectCurrency: (currency: Currency | undefined) => void;
};

const CurrencySelector = ({ currency, onSelectCurrency }: Props) => {
  const [showCurrencySelectDialog, setShowCurrencySelectDialog] =
    useState<boolean>(false);

  const openSelectDialog = useCallback(() => {
    setShowCurrencySelectDialog(true);
  }, []);

  const dismissSelectDialog = useCallback(() => {
    setShowCurrencySelectDialog(false);
  }, []);

  return (
    <SelectButton onClick={openSelectDialog}>
      {currency && <CurrencySpan>{currency.symbol}</CurrencySpan>}
      {!currency && <CurrencySpan>Select a token</CurrencySpan>}
      <CurrencySelectModal
        isOpen={showCurrencySelectDialog}
        onSelectCurrency={onSelectCurrency}
        onDismiss={dismissSelectDialog}
      />
    </SelectButton>
  );
};

export default CurrencySelector;
