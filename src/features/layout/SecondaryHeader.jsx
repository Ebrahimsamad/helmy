import React, { useEffect } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondaryHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <header className="font-changa bg-primary text-white py-3">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div
          className="flex items-center justify-between gap-4 flex-wrap"
          data-aos="fade-down"
        >
          {/* Button Section */}
          <button
            className="p-3 px-5 bg-white text-primary text-lg rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all whitespace-nowrap"
            data-aos="zoom-in"
          >
            <a
              href="https://wa.me/971504233692"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
              aria-label="Book Now"
            >
              احجز الان
            </a>
          </button>

          {/* Icons Section */}
          <div
            className="flex gap-6 items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="https://www.instagram.com/drhelmyy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-200 transition-colors"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="https://www.tiktok.com/@dr.helmy10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-gray-200 transition-colors"
            >
              <FaTiktok className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SecondaryHeader;
