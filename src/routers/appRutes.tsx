import { Route, RouteComponentProps } from "react-router-dom";

interface AppRouteProps {
  component: React.ComponentType<RouteComponentProps<any>>;
  layout?: React.ComponentType<any>;
  [x: string]: any;
}

export function AppRoute({
  layout: Layout,
  component: Component,
  ...rest
}: AppRouteProps): JSX.Element {
  if (!Layout) {
    return <Route {...rest} component={Component} />;
  }

  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps<any>) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
