import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: 1,
    title: "بالون المعدة",
    description:
      "عملية بالون المعدة أو 'بالون إنقاص الوزن' هي طريقة غير جراحية لعلاج السمنة وتعد إجراءً بسيطًا يساعد على إنقاص الوزن.",
    image: "/1.png", // Replace with actual image URL
    link: "#",
  },
  {
    id: 2,
    title: "حصى المرارة",
    description:
      "هي تكتلات صلبة تتكون في المرارة نتيجة وجود اضطرابات في تركيب الصفراء، وقد تؤدي إلى ارتفاع الدهون في الصفراء.",
    image: "/2.png", // Replace with actual image URL
    link: "#",
  },
  {
    id: 3,
    title: "أمراض الكبد",
    description:
      "مرض الكبد هو مصطلح يشير إلى أي حالة تؤثر على صحة الكبد ووظائفه، بعد أن يعد أحد أهم الأعضاء في الجسم.",
    image: "/3.png", // Replace with actual image URL
    link: "#",
  },
  {
    id: 4,
    title: "جرثومة المعدة",
    description:
      "هي نوع من البكتيريا التي تسبب التهاب المعدة. يمكن أن تنتقل هذه البكتيريا عن طريق تناول الطعام الملوث بالعدوى.",
    image: "/4.png", // Replace with actual image URL
    link: "#",
  },
];

const ServicesSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Smooth easing
      once: true, // Only animate once
    });
  }, []);

  return (
    <section className="bg-primary font-changa py-16 px-6">
      <div className="container mx-auto text-center">
        <h2
          className="text-2xl md:text-3xl font-bold text-white mb-8"
          data-aos="fade-down"
        >
          الخدمات
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
              data-aos="fade-up"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                {service.description}
              </p>
              <a
                href={service.link}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-300"
              >
                اقرأ المزيد
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
