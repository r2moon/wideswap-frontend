import { useCallback } from "react";
import { Modal } from "components";
import styled from "styled-components";
import currencies from "constants/currency";
import { Currency } from "types";

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
  justify-content: center;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.span`
  color: #0222ba;
  font-size: 20px;
  font-weight: 700;
`;

const SearchInputContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
  border: 1px solid #0222ba;
  border-radius: 5px;
  height: 50px;
  padding: 0 10px;
`;

const SearchInput = styled.input`
  background-color: transparent;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 16px;
`;

const CurrenciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  width: 100%;
  overflow-y: auto;
  max-height: 300px;
`;

const CurrencyItem = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 0;
`;

type Props = {
  isOpen: boolean;
  onSelectCurrency: (currency: Currency | undefined) => void;
  onDismiss: () => void;
};

const CurrencySelectModal = ({
  isOpen,
  onSelectCurrency,
  onDismiss,
}: Props) => {
  const selectCurrencyHandler = useCallback(
    (currency?: Currency) => {
      if (currency) {
        onSelectCurrency(currency);
        onDismiss();
      }
    },
    [onSelectCurrency, onDismiss]
  );

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <UpperSection>
        <HeaderRow>
          <HeaderTitle>Select a token</HeaderTitle>
        </HeaderRow>
        <SearchInputContainer>
          <SearchInput placeholder="Search name or address" />
        </SearchInputContainer>
        <CurrenciesContainer>
          {currencies.terraTestnet.map((currency) => (
            <CurrencyItem
              key={currency.symbol}
              onClick={() => selectCurrencyHandler(currency)}
            >
              <span>{currency.symbol}</span>
            </CurrencyItem>
          ))}
        </CurrenciesContainer>
      </UpperSection>
    </Modal>
  );
};

export default CurrencySelectModal;
