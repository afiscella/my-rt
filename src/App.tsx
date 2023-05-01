import Header from "./component/Header/Header";
import { MyContext } from "./ioc/ContainerContext";
import IndexPage from "./pages/IndexPage";
import { PhoneStoreImpl as UpdatePhoneServiceImpl} from "./service/impl/UpdatePhoneServiceImpl";
import { config } from "./config/app.config";


class Container {

  getPhoneService(){
    return new UpdatePhoneServiceImpl(config.baseUrl1, config.baseUrl2, config.baseUrl3);
  }
}

const container = new Container();
function App() {

  return (
    <MyContext.Provider value={container} >
      <div className="App">
        <Header />
        <IndexPage />
      </div>
    </MyContext.Provider>
  );
}

export default (App);
