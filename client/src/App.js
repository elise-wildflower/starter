import logo from "./logo.svg";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import ThingsAHLL from "./pages/ThingsAHLL";
import NavBar from "./pages/NavBar";
import Examples from "./pages/Examples";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/things" component={ThingsAHLL} />
          <Route exact path="/examples" component={Examples} />
          <Route component={() => <p>react router 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;