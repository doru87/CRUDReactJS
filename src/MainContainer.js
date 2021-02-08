import React from "react";
import Books from "./Books";
import Movies from "./Movies";
import EditBook from "./edit/EditBook";
import AddBook from "./AddBook";

import { Switch, Route } from "react-router-dom";
import ModalBooks from "./ModalBooks";
import EditMovie from "./edit/EditMovie";
import ModalMovies from "./ModalMovies";
import AddMovie from "./AddMovie";

import Sports from "./Sports";
import AddSport from "./AddSport";
import EditSport from "./edit/EditSport";
import ModalSports from "./ModalSports";

export default function MainContainer() {
  return (
    <div>
      <div className="main_container">
        <Switch>
          <Route exact path="/Books" component={Books} />
          <Route exact path="/Books/:id" component={ModalBooks} />
          <Route exact path="/Books/edit/:id" component={EditBook} />
          <Route exact path="/Add Book" component={AddBook} />

          <Route exact path="/Movies" component={Movies} />
          <Route exact path="/Movies/:id" component={ModalMovies} />
          <Route exact path="/Movies/edit/:id" component={EditMovie} />
          <Route exact path="/Add Movie" component={AddMovie} />

          <Route exact path="/Sports" component={Sports} />
          <Route exact path="/Sports/:id" component={ModalSports} />
          <Route exact path="/Add Sport" component={AddSport} />
          <Route exact path="/Sports/edit/:id" component={EditSport} />
        </Switch>
      </div>
    </div>
  );
}
