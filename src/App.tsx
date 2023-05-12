import Header from "./component/Header/Header";
import { ApplicationContext } from "./ioc/MyRtContext";
import PhonePage from "./pages/PhonePage";
import EmailPage from "./pages/EmailPage";
import createContainer from "./ioc/ioc";

const container = createContainer()

function App() {

  return (
    <ApplicationContext.Provider value={container} >
      <div className="App">
        <Header />
        <PhonePage />
        <EmailPage />
      </div>
    </ApplicationContext.Provider>
  );
}

export default (App);
