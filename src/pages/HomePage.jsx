import AppointmentSection from "../features/home/AppointmentSection";
import BookingSection from "../features/home/BookingSection";
import CustomerSlider from "../features/home/CustomerSlider";
import MapSection from "../features/home/MapSection";
import DoctorProfile from "../features/home/Profile";
import ServicesSection from "../features/home/ServicesSection";
import TiktokSection from "../features/home/TiktokSection";
import WhyChooseUs from "../features/home/WhyChooseUs";

function HomePage() {
  return (
    <>
      <DoctorProfile />
      <WhyChooseUs />
      <BookingSection />
      <TiktokSection />
      <ServicesSection />
      <CustomerSlider />
      <AppointmentSection />
      <MapSection />
    </>
  );
}

export default HomePage;
