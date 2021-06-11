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
`;

const SearchInputContainer = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  display: flex;
  align-items: center;
  background-color: #00aaaa;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
`;

const CurrenciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  width: 100%;
  overflow-y: scroll;
  max-height: 300px;
`;

const CurrencyItem = styled.button`
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

const SelectCurrencyModal = ({
  isOpen,
  onSelectCurrency,
  onDismiss,
}: Props) => {
  const selectCurrencyHandler = (currency?: Currency) => {
    if (currency) {
      onSelectCurrency(currency);
      onDismiss();
    }
  };

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <UpperSection>
        <HeaderRow>
          <span>Select a token</span>
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

export default SelectCurrencyModal;
