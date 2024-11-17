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
import ScrollToTopButton from "./ui/ScrollToTopButton ";
import ContactPage from "./pages/ContactPage";
import Diet from "./features/medical/Diet";
import Asaby from "./features/medical/Asaby";

function App() {
  return (
    <BrowserRouter>
      <WhatsAppButton />
      <ScrollToTopButton />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/about" element={<Medical />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/جرثومة-المعدة" element={<Gerthoma />} />
          <Route path="/علاج-السمنة" element={<Diet />} />
          <Route path="/القولون-العصبى" element={<Asaby />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
