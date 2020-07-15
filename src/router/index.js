import React from "react";
import BoilingVerdict from '../pages/game/BoilingVerdict'
import FilterableProductTable from '../pages/game/FilterableProductTable'
import TicTacToe from '../pages/game/TicTacToe'
import HelloWorld from '../pages/core/HelloWorld'
import NameForm from '../pages/core/NameForm'
import Reservation from '../pages/core/Reservation'
import ListOfTenThings from '../pages/core/ListOfTenThings'
import Clock from '../pages/core/Clock'
import Home from '../pages/Home'

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
          <Route path="/BoilingVerdict">
            <BoilingVerdict />
          </Route>
          <Route path="/FilterableProductTable">
            <FilterableProductTable />
          </Route>
          <Route path="/TicTacToe">
            <TicTacToe />
          </Route>
          <Route path="/HelloWorld">
            <HelloWorld />
          </Route>
          <Route path="/NameForm">
            <NameForm />
          </Route>
          <Route path="/Reservation">
            <Reservation />
          </Route>
          <Route path="/ListOfTenThings">
            <ListOfTenThings />
          </Route>
          <Route path="/Clock">
            <Clock />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
