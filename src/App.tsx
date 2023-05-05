import Header from "./component/Header/Header";
import { ApplicationContext } from "./ioc/PhoneContext";
import IndexPage from "./pages/IndexPage";
import createContainer from "./ioc/ioc";

const container = createContainer()

function App() {

  return (
    <ApplicationContext.Provider value={container} >
      <div className="App">
        <Header />
        <IndexPage />
      </div>
    </ApplicationContext.Provider>
  );
}

export default (App);
