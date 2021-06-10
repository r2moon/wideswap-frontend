import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Container } from "components";
import { WalletConnectProvider } from "providers";
import Swap from "./pages/Swap";

const App: React.FC = () => (
  <WalletConnectProvider>
    <Container>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Swap />
          </Route>
        </Switch>
      </Router>
    </Container>
  </WalletConnectProvider>
);

export default App;
