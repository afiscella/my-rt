import "reflect-metadata";
import { Container } from "inversify";
import { PhoneStore } from "../service/UpdatePhoneService";
import { PhoneStoreImpl } from "../service/impl/UpdatePhoneServiceImpl";
import { TYPES } from "./ioc.types";
import { config } from "../config/app.config";

const createContainer = (): Container => {
  const container = new Container({
    autoBindInjectable: true,
    defaultScope: "Singleton",
  });

  container
    .bind<string>(TYPES.baseUrl1)
    .toConstantValue(config.baseUrl1);

  container
    .bind<string>(TYPES.baseUrl2)
    .toConstantValue(config.baseUrl2);

  container
    .bind<string>(TYPES.baseUrl3)
    .toConstantValue(config.baseUrl3);

  container
    .bind<PhoneStore>(TYPES.PhoneStore)
    .to(PhoneStoreImpl)
    .inSingletonScope();

  return container;
};

export const container: Container = createContainer();
