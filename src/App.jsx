import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/404";
import WhatsAppButton from "./features/layout/Whatsapp";
import Layout from "./layout/Layout";
import PlansPage from "./pages/PlansPage";
import Medical from "./pages/Medical";
import Gerthoma from "./features/medical/Gerthoma";
import VideosPage from "./pages/VideosPage";

function App() {
  return (
    <BrowserRouter>
      <WhatsAppButton />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/about" element={<Medical />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/جرثومة-المعدة" element={<Gerthoma />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
