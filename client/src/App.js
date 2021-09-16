import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Things from "./components/Things";
import ThingsWithAxiosHook from "./pages/ThingsWithAxiosHook";
import ThingsAHLL from "./pages/ThingsAHLL";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/things" component={ThingsAHLL} />
          <Route component={() => <p>react router 404 path not found</p>} />
        </Switch>
      </Container>
    </>
  );
}

export default App;