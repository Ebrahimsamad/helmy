import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const AppointmentSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="bg-white font-changa py-12 px-6 md:px-12 flex flex-col items-center"
      data-aos="fade-up"
    >
      <h4 className="text-primary font-medium text-sm md:text-base mb-2">
        خدمات طبية ممتازة
      </h4>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
        احجز موعدك الآن
      </h2>
      <div className="w-16 border-b-2 border-gray-400 mb-6"></div>
      <Link
        to="/plans"
        className="flex items-center justify-center bg-primary text-white px-4 py-2 rounded-full text-sm md:text-base hover:bg-primary-light transition-all shadow-md"
      >
        <span className="ml-2">من هنا</span>
        <span className="text-lg">&larr;</span>
      </Link>
    </section>
  );
};

export default AppointmentSection;
