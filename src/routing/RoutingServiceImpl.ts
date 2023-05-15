import { RouteConfig, RoutingConfig, RoutingService } from "./RoutingService";

export class RoutingServiceImpl implements RoutingService {

    routingConfig : RoutingConfig;

    constructor(routingConfig : RoutingConfig){
        this.routingConfig = routingConfig;
    }

    getRoutes(): RouteConfig[] {
        return this.routingConfig.routes;
    }

}