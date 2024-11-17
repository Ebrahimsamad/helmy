import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "القولون العصبى",
    description:
      "القولون العصبي هو اضطراب هضمي شائع يؤثر على الأمعاء الغليظة  ويرتبط بشكل كبير بالتوتر والضغوط النفسية. ",
    image: "/1.png", // Replace with actual image URL
    link: "/القولون-العصبى",
  },
  {
    id: 3,
    title: "علاج السمنة",
    description:
      "علاج السمنة مع دكتور محمد حلمى يمثل حلاً متكاملاً لكل مريض حيث يقدم حلولاً مبتكرة وعلاج السمنة بفعالية عالية",
    image: "/3.png", // Replace with actual image URL
    link: "/علاج-السمنة",
  },
  {
    id: 4,
    title: "جرثومة المعدة",
    description:
      "هي نوع من البكتيريا التي تسبب التهاب المعدة. يمكن أن تنتقل هذه البكتيريا عن طريق تناول الطعام الملوث بالعدوى.",
    image: "/4.png", // Replace with actual image URL
    link: "/جرثومة-المعدة",
  },
];

const MedicalSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth easing
      once: true, // Only animate once
    });
  }, []);

  return (
    <section className="bg-white font-changa py-16 px-6">
      <div className="container mx-auto text-center">
        <h2
          className="text-2xl md:text-3xl font-bold text-primary mb-12"
          data-aos="fade-down"
        >
          الخدمات
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-primary  rounded-lg shadow-lg p-6 flex flex-col items-center"
              data-aos="fade-up"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4 "
              />
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white mb-4 text-center">
                {service.description}
              </p>
              <Link
                to={service.link}
                onClick={scrollToTop}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-300"
              >
                اقرأ المزيد
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalSection;
