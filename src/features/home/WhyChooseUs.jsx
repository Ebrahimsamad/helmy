import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHeartbeat,
  FaUserMd,
} from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { AiOutlineTool, AiOutlineExclamationCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      offset: 100, // Trigger animation 100px before element enters viewport
      easing: "ease-in-out", // Smooth easing
    });
  }, []);

  const features = [
    {
      // icon: <MdOutlinePrivacyTip />,
      text: "طبيب مؤهل ومتميز وعلى قدر كبير من العلم والمعرفة الطبية ",
    },
    // { icon: <AiOutlineTool />, text: "أحدث المعدات" },
    // { icon: <FaShieldAlt />, text: "الجودة والسلامة" },
    { icon: <FaMapMarkerAlt />, text: "يراعى خصوصيتك " },
    // { icon: <FaHeartbeat />, text: "رعاية المرضى" },
    {
      // icon: <FaUserMd />,
      text: "يقوم بعمل خطة علاجية فعالة وله العديد من النتائج الرائعة ",
    },
    // { icon: <FaShieldAlt />, text: "خطة العلاج الشخصية" },
    // { icon: <AiOutlineExclamationCircle />, text: "مساعدة الطوارئ" },
  ];

  return (
    <div className="text-primary font-changa py-12 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          لماذا دكتور محمد حلمى هو اختيارك الأمثل؟
        </h2>
        <hr className="mx-auto  border-t-2  border-primary mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Adding staggered delay for animations
            >
              {/* <div className="text-5xl text-primary mb-4">{feature.icon}</div> */}
              <p className="text-lg font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
