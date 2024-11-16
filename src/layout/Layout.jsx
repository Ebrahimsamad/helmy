import { Outlet } from "react-router-dom";
import Header from "../features/layout/Header";
import SecondaryHeader from "../features/layout/SecondaryHeader";
import Footer from "../features/layout/Footer";
// import ContactHeader from "../features/layout/ContactHeader";

function Layout() {
  return (
    <>
      {/* <ContactHeader /> */}
      <SecondaryHeader />
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
}

export default Layout;
