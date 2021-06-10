import styled, { ThemeContext } from "styled-components";
import { CurrencyInputPanel } from "components";

const StyledDiv = styled.div`
  background-color: rgb(247, 248, 250);
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

const Swap = () => (
  <StyledDiv>
    <SwapDiv>
      <div>Swap</div>
      <CurrencyInputPanel />
    </SwapDiv>
  </StyledDiv>
);

export default Swap;
