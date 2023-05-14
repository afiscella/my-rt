import Header from "./component/Header/Header";
import { ApplicationContext } from "./ioc/MyRtContext";
import createContainer from "./ioc/ioc";
import CurrentRoute from "./routing/CurrentRoute";
import { withRouter } from "./routing/hooks";

const container = createContainer()

function App() {

  return (
    <ApplicationContext.Provider value={container}>
        <div className="App">
          <Header />
          <CurrentRoute />
        </div>
    </ApplicationContext.Provider>
  );
}

export default withRouter(App);
