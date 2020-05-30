import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/createaccount" exact component={CreateAccount} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
