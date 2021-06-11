import { useState, useCallback } from "react";
import styled from "styled-components";
import { CurrencyInputPanel } from "components";
import currencies from "constants/currency";
import { Currency } from "types";

const HeaderRow = styled.div`
  margin-bottom: 20px;
`;

const StyledDiv = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
`;

const SwapDiv = styled.div`
  position: relative;
  max-width: 480px;
  width: 100%;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,
    rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
  border-radius: 24px;
  padding: 20px;
`;

const ExchangeDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ExchangeButton = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #b5b5b5;
  padding: 10px 20px;
  background: transparent;
  :hover {
    border-color: #0222ba;
  }
`;

const Swap = () => {
  const [offerCurrency, setOfferCurrency] = useState<Currency | undefined>(
    currencies.terraTestnet[0]
  );
  const [askCurrency, setAskCurrency] = useState<Currency | undefined>();

  const exchangeCurrencies = useCallback(() => {
    setOfferCurrency(askCurrency);
    setAskCurrency(offerCurrency);
  }, [offerCurrency, askCurrency]);

  return (
    <StyledDiv>
      <SwapDiv>
        <HeaderRow>Swap</HeaderRow>
        <CurrencyInputPanel
          isOffer
          currency={offerCurrency}
          onSelectCurrency={setOfferCurrency}
          showFee
        />
        <ExchangeDiv>
          <ExchangeButton onClick={exchangeCurrencies}>Exchange</ExchangeButton>
        </ExchangeDiv>
        <CurrencyInputPanel
          currency={askCurrency}
          onSelectCurrency={setAskCurrency}
        />
      </SwapDiv>
    </StyledDiv>
  );
};

export default Swap;
