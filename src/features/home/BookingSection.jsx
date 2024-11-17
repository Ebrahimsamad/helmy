import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BookingSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth easing
    });
  }, []);

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white  py-10 px-6">
      <h2
        className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-0"
        data-aos="fade-right"
      >
        هل تبحث عن طبيب مثالي؟
      </h2>
      <a
        href="https://wa.me/971504233692"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-left"
        className="bg-primary hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
      >
        احجز الآن
      </a>
    </div>
  );
};

export default BookingSection;
