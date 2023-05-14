import { Route, Routes } from "react-router-dom";
import EmailPage from "../pages/EmailPage";
import PhonePage from "../pages/PhonePage";
import IndexPage from "../pages/IndexPage";
import NoPage from "../pages/NoPage";

export default function CurrentRoute() {

    return (
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="phone" element={<PhonePage />} />
        <Route path="email" element={<EmailPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    );
  };