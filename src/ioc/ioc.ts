import { Container } from "./Container";
import { PhoneStoreImpl as UpdatePhoneServiceImpl} from "../service/impl/UpdatePhoneServiceImpl";
import { EmailStoreImpl as UpdateEmailServiceImpl} from "../service/impl/UpdateEmailServiceImpl";
import { config } from "../config/app.config";
import ContainerImpl from "./ContainerImpl";
import { types } from "./Types";

export default function createContainer () : Container{

    const container = new ContainerImpl();
    container.add(types.PHONE_STORE, new UpdatePhoneServiceImpl(config.spidIdentityBaseUrl, config.spidCredentialBaseUrl, config.updatePhoneBaseUrl));
    container.add(types.EMAIL_STORE, new UpdateEmailServiceImpl(config.spidIdentityBaseUrl, config.spidCredentialBaseUrl, config.updateEmailBaseUrl));
    container.add(Symbol.for("fake"), {} );
    return container;
}

