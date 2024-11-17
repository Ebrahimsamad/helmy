import React from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      dir="rtl"
      className="bg-primary font-changa text-white py-12 px-6 md:px-20"
    >
      <div className="container mx-auto">
        {/* Main Content with Logo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" onClick={scrollToTop}>
              <img
                src="/logo-bg-white.jpg"
                alt="Logo"
                className="h-20 md:h-24 mb-4"
              />
            </Link>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
            <p className="text-sm md:text-base">
              دبي , الامارات العربية المتحدة
            </p>
            <p className="mt-2 text-sm md:text-base">ebrahim7asn@gmail.com</p>
            <a
              href="https://wa.me/201552211942"
              target="_blank"
              rel="noreferrer"
            >
              <p className="mt-2 text-sm md:text-base">01552211942</p>
            </a>
            <div className="flex justify-center md:justify-end gap-6 mt-6">
              <a
                href="https://www.tiktok.com/@dr.helmy10"
                target="_blank"
                rel="noreferrer"
                aria-label="Tiktok"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaTiktok size={28} />
              </a>
              <a
                href="https://www.instagram.com/drhelmyy/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555456072613&mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaFacebook size={28} />
              </a>
            </div>
          </div>

          {/* Main Links Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">روابط رئيسية</h3>
            <ul className="text-sm md:text-base">
              <li className="mt-2">
                <Link
                  onClick={scrollToTop}
                  to="/dashboard"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  الرئيسية
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  onClick={scrollToTop}
                  to="/videos"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  فيديوهات
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  onClick={scrollToTop}
                  to="/plans"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  خدمات الدكتور
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  onClick={scrollToTop}
                  to="/contact"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">خدماتنا</h3>
            <ul className="text-sm md:text-base">
              <li className="mt-2">الجهاز الهضمي</li>
              <li className="mt-2">علاج السمنة</li>
              <li className="mt-2">أمراض الكبد</li>
              <li className="mt-2">المرارة</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-500 mt-8 pt-4 text-center">
          <p className="text-sm md:text-base mb-5">
            Made by{" "}
            <a
              href="https://wa.me/201144369646"
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:text-red-300 transition-colors duration-300">
                Ebrahim Samad
              </span>
            </a>{" "}
            | All rights reserved © Dr-Helmy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
