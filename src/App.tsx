import Header from "./component/Header/Header";
import { ApplicationContext } from "./ioc/MyRtContext";
import IndexPage from "./pages/IndexPage";
import PhonePage from "./pages/PhonePage";
import EmailPage from "./pages/EmailPage";
import NoPage from "./pages/NoPage";
import createContainer from "./ioc/ioc";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = createContainer()

function App() {

  return (
    
    <ApplicationContext.Provider value={container}>
      <BrowserRouter>
        <div className="App">
          <Header />
            <Routes>
              <Route path="/" element={<IndexPage />}/>
              <Route path="email" element={<EmailPage />}/>
              <Route path="phone" element={<PhonePage />}/>
              <Route path="*" element={<NoPage />}/>
            </Routes>
        </div>
      </BrowserRouter>
    </ApplicationContext.Provider>

  );
}

export default (App);
