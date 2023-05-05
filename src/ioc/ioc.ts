import { Container } from "./Container";
import { PhoneStoreImpl as UpdatePhoneServiceImpl} from "../service/impl/UpdatePhoneServiceImpl";
import { config } from "../config/app.config";
import ContainerImpl from "./ContainerImpl";
import { types } from "./Types";

export default function createContainer () : Container{

    const container = new ContainerImpl();
    container.add(types.PHONE_STORE, new UpdatePhoneServiceImpl(config.baseUrl1, config.baseUrl2, config.baseUrl3));
    container.add(Symbol.for("fake"), {} );
    return container;
}

