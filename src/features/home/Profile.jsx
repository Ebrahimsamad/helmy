import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const DoctorProfile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      dir="ltr"
      className="relative font-changa flex items-center justify-center w-full bg-cover bg-center min-h-[400px] md:min-h-[300px]"
      style={{ backgroundImage: "url(bg.jpg)" }} // Replace with your background image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center max-w-6xl w-full px-4 sm:px-8 md:px-12 lg:px-16 text-white">
        {/* Doctor Image */}
        <div
          data-aos="fade-right"
          className="hidden lg:flex w-full lg:w-1/3  justify-center lg:justify-start mb-8 lg:mb-0"
        >
          <div className="bg-white p-2 rounded-lg shadow-md">
            <img
              src="dr.png" // Replace with the path to your doctor's image
              alt="Doctor"
              className="rounded-lg w-full h-auto object-cover"
              style={{ maxWidth: "450px", height: "250px" }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-up"
          className="lg:w-2/3 text-center lg:text-right lg:pl-12 space-y-4"
        >
          <p className="text-xl sm:text-xl lg:text-xl font-extrabold">
            الموقع الرسمي
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            للدكتور محمد حلمى
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-end space-x-1 lg:space-x-reverse gap-3">
            <button className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105">
              <a href="https://wa.me/971504233692" target="_blank">
                احجز الآن
              </a>
            </button>
            {/* <span /> */}
            <Link
              to="/plans"
              className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              الخطط
            </Link>
            {/* <button className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105">
              عن الدكتور
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
