import EmailPage from "../pages/EmailPage";
import IndexPage from "../pages/IndexPage";
import NoPage from "../pages/NoPage";
import PhonePage from "../pages/PhonePage";
import { RoutingConfig } from "../routing/RoutingService";

export const config = {
    spidIdentityBaseUrl: "/spid-ks/spididentity/bySpidCode/",
    spidCredentialBaseUrl: "/spid-ks/spidcredential/spididentity/",
    updatePhoneBaseUrl: "/spid-ks/spiduser/phone/",
    updateEmailBaseUrl: "/spid-ks/spiduser/email/"
}

export const routingConfig: RoutingConfig = {
    routes: [
      {
        element: IndexPage,
        path: "/",
      },
      {
        element: PhonePage,
        path: "/phone",
      },
      {
        element: EmailPage,
        path: "/email",
      },
      {
        element: NoPage,
        path: "*",
      },
    ],
  };