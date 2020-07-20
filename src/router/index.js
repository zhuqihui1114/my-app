import React from "react";
import BoilingVerdict from '../pages/game/BoilingVerdict'
import TicTacToe from '../pages/game/TicTacToe'
import NameForm from '../pages/core/NameForm'
import Clock from '../pages/core/Clock'
import LifeCycle from '../pages/lifecycle/Index'
import Home from '../pages/Home'
import EX1 from '../pages/example/EX1'
import EX2 from '../pages/example/EX2'
import EX3 from '../pages/example/EX3'
import EX4 from '../pages/example/EX4'
import EX5 from '../pages/example/EX5'
import EX6 from '../pages/example/EX6'
import ProfilePage from '../pages/example/FunClass/ProfilePage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function RouterMap() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/EX1">
            <EX1 />
          </Route>
          <Route path="/EX2">
            <EX2 />
          </Route>
          <Route path="/EX3">
            <EX3 />
          </Route>
          <Route path="/EX4">
            <EX4 />
          </Route>
          <Route path="/EX5">
            <EX5 />
          </Route>
          <Route path="/EX6">
            <EX6 />
          </Route>
          <Route path="/ProfilePage">
            <ProfilePage />
          </Route>

          <Route path="/BoilingVerdict">
            <BoilingVerdict />
          </Route>
          <Route path="/TicTacToe">
            <TicTacToe />
          </Route>
          <Route path="/NameForm">
            <NameForm />
          </Route>
          <Route path="/Clock">
            <Clock />
          </Route>
          <Route path="/LifeCycle">
            <LifeCycle />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
