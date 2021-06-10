import styled from "styled-components";

const InputPanel = styled.div`
  position: relative;
  border-radius: 20px;
  z-index: 1;
  margin-top: 20px;
`;

const Container = styled.div`
  border-radius: "20px";
  border: 1px solid #b5b5b5;
  display: flex;
  flex-direction: column;
`;

const BalanceRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CurrencyInputPanel = () => (
  <InputPanel>
    <Container>
      <BalanceRow>
        <div>From</div>
        <div>Balance: 0</div>
      </BalanceRow>
      <InputRow>
        <input placeholder="0.000000" />
        <div>Balance: 0</div>
      </InputRow>
    </Container>
  </InputPanel>
);

export default CurrencyInputPanel;
