import { PhoneStoreImpl as UpdatePhoneServiceImpl} from "../service/impl/UpdatePhoneServiceImpl";
import { config } from "../config/app.config";

export default class Container {

    getPhoneService(){
      return new UpdatePhoneServiceImpl(config.baseUrl1, config.baseUrl2, config.baseUrl3);
    }
  }