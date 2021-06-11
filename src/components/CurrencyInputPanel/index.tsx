import styled from "styled-components";
import { CurrencySelector } from "components";
import { Currency } from "types";

const InputPanel = styled.div`
  position: relative;
  border-radius: 20px;
  z-index: 1;
  margin-top: 20px;
`;

const Container = styled.div`
  border-radius: 10px;
  border: 1px solid #b5b5b5;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const DirectionLabel = styled.div`
  color: #5c5c5c;
`;

const BalanceRow = styled.div`
  color: #5c5c5c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  border: 0;
  padding: 0;
  outline: 0;
  background: transparnet;
  color: #5c5c5c;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
  ::placeholder {
    opacity: 0.5;
  }
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

type Props = {
  currency?: Currency;
  isOffer?: boolean;
  onSelectCurrency: (currency: Currency | undefined) => void;
};

const CurrencyInputPanel = ({ currency, isOffer, onSelectCurrency }: Props) => (
  <InputPanel>
    <Container>
      <BalanceRow>
        <DirectionLabel>{isOffer ? "From" : "To"}</DirectionLabel>
        <div>Balance: 0</div>
      </BalanceRow>
      <InputRow>
        <Input placeholder="0.000000" type="number" />
        <CurrencySelector
          currency={currency}
          onSelectCurrency={onSelectCurrency}
        />
      </InputRow>
    </Container>
  </InputPanel>
);

export default CurrencyInputPanel;
