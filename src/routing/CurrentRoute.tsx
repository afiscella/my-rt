import { Route, Routes } from "react-router-dom";
import { useInject } from "../ioc/useInject";
import { types } from "../ioc/Types";
import { RoutingService } from "./RoutingService";


export default function CurrentRoute() {

    const routingStore = useInject<RoutingService>(types.ROUTING_STORE);
    const routes = routingStore.getRoutes();

    return (
        <Routes>
          {routes.map((route) => {
            let PageToDisplay = route.element;
            return (
              <Route
                path={route.path}
                element={<PageToDisplay />}
              />
            );
          })}
        </Routes>
      );
  };