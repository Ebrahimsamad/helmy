import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Diet() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set duration for animation
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <div className="bg-gray-100 font-changa py-8 px-6 md:px-20">
      <div className="container mx-auto max-w-screen-lg">
        {/* Image Section */}
        <div
          className="flex justify-center mb-8"
          data-aos="fade-up" // Adding AOS animation
        >
          <img
            src="/medical/2.png"
            alt="علاج السمنة "
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>

        {/* Description Section */}
        <div className="text-center md:text-right">
          <h2
            className="text-2xl md:text-3xl font-semibold text-primary mb-6"
            data-aos="fade-up" // Adding AOS animation
          >
            علاج السمنة{" "}
          </h2>
          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            data-aos="fade-up"
          >
            علاج السمنة مع دكتور محمد حلمى يمثل حلاً متكاملاً لكل مريض حيث يقدم
            حلولاً مبتكرة لانقاص الوزن وعلاج السمنة بفعالية عالية باستخدام أحدث
            التقنيات الطبية كما يتم تصميم خطة علاجية شاملة ومخصصة لكل حالة تحت
            إشراف فريق متخصص لضمان الوصول إلى أفضل النتائج الصحية وتحقيق الوزن
            المثالي.
          </p>

          <h3
            className="text-2xl md:text-3xl font-semibold text-primary mb-4"
            data-aos="fade-up"
          >
            نتائج إنقاص الوزن مع دكتور محمد حلمى
          </h3>

          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            data-aos="fade-up"
          >
            نتائج إنقاص الوزن مع دكتور محمد حلمى تضمن لك تحقيق أهدافك الصحية
            بفعالية حيث يقوم الدكتور باتباع خطوات متكاملة تشمل:
          </p>
          <ul
            className="list-disc list-inside text-gray-700 mb-6"
            data-aos="fade-up"
          >
            <li>تشخيص دقيق لأسباب عدم فقدان الوزن.</li>
            <li>اختيار أفضل الطرق المناسبة لكل حالة.</li>
            <li>متابعة شاملة لجميع الحالات لضمان نتائج مثالية.</li>
          </ul>

          <h3
            className="text-2xl md:text-3xl font-semibold text-primary mb-4"
            data-aos="fade-up"
          >
            طرق علاج السمنة وإنقاص الوزن مع دكتور محمد حلمى
          </h3>
          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            data-aos="fade-up"
          >
            تحت إشراف دكتور محمد حلمى يتوفر برنامج متكامل لعلاج السمنة من خلال
            نظام غذائي طبيعي وعلاجات طبية مخصصة وتتمثل أهم تلك الطرق في التالي:
          </p>
          <ul
            className="list-disc list-inside text-gray-700 mb-6"
            data-aos="fade-up"
          >
            <li>وصفات طبية لتقليل مضاعفات السمنة.</li>
            <li>استشارات حول تعديل نمط الحياة</li>
            <li>متابعة شاملة لجميع الحالات لضمان نتائج مثالية.</li>
          </ul>

          <a
            href="https://wa.me/971504233692"
            target="_blank"
            className="text-primary hover:text-blue-700 transition-colors duration-300"
            data-aos="fade-up"
          >
            إذا كنت تسعى للوصول إلى وزن مثالي والاستمتاع بصحة أفضل، تواصل الآن
            مع دكتور محمد حلمى الآن للحصول على استشارة وخطة علاجية مخصصة تناسب
            حالتك الصحية.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Diet;
