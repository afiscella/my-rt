import { config } from "../config/app.config";
import { PhoneStore as UpdatePhoneService } from "../service/UpdatePhoneService";
import { PhoneStoreImpl as UpdatePhoneServiceImpl} from "../service/impl/UpdatePhoneServiceImpl";

export default class Container {

    private services: Map<Symbol, UpdatePhoneService>;
    public static phoneServiceIdentifier = Symbol("PhoneService");

    constructor(){
        this.services = new Map<Symbol, UpdatePhoneService>();
        this.add(Container.phoneServiceIdentifier, new UpdatePhoneServiceImpl(config.baseUrl1, config.baseUrl2, config.baseUrl3));
    }

    public add(identifier: Symbol, service : UpdatePhoneService){
        this.services.set(identifier, service);
    }

    public get(identifier: Symbol){
        const service = this.services.get(identifier);
        if (service) {
            return service;
        } else {
            throw new Error('No service found for identifier: ' + identifier.toString());
        }
    }

  }