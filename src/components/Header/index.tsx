import styled from "styled-components";

const HeaderDiv = styled.header`
  position: sticky;
  top: 0;
`;

const Header = () => {
  return <HeaderDiv> Connect Wallet</HeaderDiv>;
};

export default Header;
