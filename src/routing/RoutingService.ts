export interface RoutingConfig {
    routes: RouteConfig[];
  }

export interface RouteConfig {
    path: string;
    element: () => JSX.Element;
}

export interface RoutingService {
    getRoutes(): RouteConfig[];
}