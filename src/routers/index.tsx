import { BrowserRouter, Switch } from "react-router-dom";

import { AppRoute } from "./appRutes";

import { Home, PageNotFound } from "../pages";
import { DefaultLayout } from "../layouts";
import Subscription from "../pages/Subscription";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute exact path="/" component={Home} layout={DefaultLayout} />
        <AppRoute
          exact
          path="/subscription"
          component={Subscription}
          layout={DefaultLayout}
        />
        <AppRoute component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
