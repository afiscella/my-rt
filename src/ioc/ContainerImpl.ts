import { Container } from "./Container";

export default class ContainerImpl implements Container {

    private services: Map<Symbol, any>;

    constructor(){
        this.services = new Map<Symbol, any>();
    }

    public add(identifier: Symbol, service : any){
        this.services.set(identifier, service);
    }

    public get<T>(identifier: Symbol) : T{
        const service : T = this.services.get(identifier);
        if (service) {
            return service;
        } else {
            throw new Error('No service found for identifier: ' + identifier.toString());
        }
    }

  }