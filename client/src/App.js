import logo from "./logo.svg";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import ThingsAHLL from "./pages/ThingsAHLL";
import NavBar from "./pages/NavBar";
import Examples from "./pages/Examples";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/thingsahll" component={ThingsAHLL} />
            <Route exact path="/examples" component={Examples} />
            <Route component={() => <p>react router 404 path not found</p>} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;