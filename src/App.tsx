import Header from "./component/Header/Header";
import { PhoneContext } from "./ioc/PhoneContext";
import IndexPage from "./pages/IndexPage";
import Container from "./ioc/Container";

const container = new Container();

function App() {

  return (
    <PhoneContext.Provider value={container} >
      <div className="App">
        <Header />
        <IndexPage />
      </div>
    </PhoneContext.Provider>
  );
}

export default (App);
