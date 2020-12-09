import React from "react";
import Mailbox from "./Mailbox";
import Auth from "./Auth";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Mailbox />
      </Route>
      <Route exact path="/auth">
        <Auth />
      </Route>
    </Switch>
  );
};

export default withRouter(Routes);
