import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Swap from "./pages/Swap";
import Container from "./components/Container";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
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
  );
};

export default App;
