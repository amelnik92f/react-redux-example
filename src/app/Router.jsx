import React from "react";

import { Switch, Route } from "react-router-dom";
import { CharacterPage } from "../components/Character";
import { HomePage } from "../components/Home";
import { LocationPage } from "../components/Location";
import { CharacterDetailPage } from "../components/CharacterDetail";

export const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/users" component={CharacterPage} />
    <Route path="/users/:id" component={CharacterDetailPage} />
    <Route path="/location" component={LocationPage} />
    <Route component={() => <h2>Page is not found :(</h2>} />
  </Switch>
);
