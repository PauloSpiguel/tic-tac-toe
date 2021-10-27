import { BrowserRouter, Switch } from "react-router-dom";

import { AppRoute } from "./appRutes";

import { Home, PageNotFound } from "../pages";
import { DefaultLayout } from "../layouts";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute exact path="/" component={Home} layout={DefaultLayout} />
        <AppRoute component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
