import React from "react";
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-primary text-white py-12 px-6 md:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">تواصل معنا</h3>
            <p className="text-sm md:text-base">
              دبي , الامارات العربية المتحدة{" "}
            </p>
            <p className="mt-2 text-sm md:text-base">ebrahim7asn@gmail.com</p>
            <a href="https://wa.me/201552211942" target="_blank">
              <p className="mt-2 text-sm md:text-base">01552211942</p>
            </a>
            <div className="flex justify-center md:justify-end gap-6 mt-6">
              <a
                href="https://www.tiktok.com/@dr.helmy10"
                target="_blank"
                aria-label="Tiktok"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaTiktok size={28} />
              </a>
              <a
                href="https://www.instagram.com/drhelmyy/"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555456072613&mibextid=LQQJ4d"
                target="_blank"
                aria-label="Facebook"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                <FaFacebook size={28} />
              </a>
            </div>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">خدماتنا</h3>
            <ul className="text-sm md:text-base">
              <li className="mt-2">الجهاز الهضمي</li>
              <li className="mt-2">علاج السمنة</li>
              <li className="mt-2">أمراض الكبد</li>
              <li className="mt-2">المرارة</li>
              <li className="mt-2">بالون المعدة</li>
            </ul>
          </div>

          {/* Main Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">روابط رئيسية</h3>
            <ul className="text-sm md:text-base text-left">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  الرئيسية
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  عن الدكتور
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className=" border-t border-gray-500 mt-8 pt-4 text-center ">
          <p className="text-sm md:text-base">
            Made with
            <a href="https://wa.me/201144369646" target="_blank">
              <span className="text-red-500">❤️</span> by{" "}
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
