import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Asaby() {
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
            src="/medical/3.png"
            alt="القولون العصبى  "
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>

        {/* Description Section */}
        <div className="text-center md:text-right">
          <h2
            className="text-2xl md:text-3xl font-semibold text-primary mb-6"
            data-aos="fade-up" // Adding AOS animation
          >
            القولون العصبى
          </h2>
          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            data-aos="fade-up"
          >
            إذا كنت تعاني من أعراض مرض القولون العصبي فلا تتردد في استشارة دكتور
            محمد حلمى الذي يتمتع بخبرة واسعة في هذا المجال حيث أن هذا المرض يمكن
            أن يؤثر بشكل كبير على حياتك، لذا من المهم التعرف على الأسباب وطرق
            العلاج.
          </p>

          <h3
            className="text-2xl md:text-3xl font-semibold text-primary mb-4"
            data-aos="fade-up"
          >
            أسباب القولون العصبي
          </h3>

          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            data-aos="fade-up"
          >
            يرتبط السبب الرئيسي بعدة عوامل مختلفة تتفاعل مع بعضها وتتمثل هذه
            العوامل في التالي:
          </p>
          <ul
            className="list-disc list-inside text-gray-700 mb-6"
            data-aos="fade-up"
          >
            <li>التوتر والضغط النفسي.</li>
            <li>التغيرات الهرمونية.</li>
            <li>حساسية لبعض الأطعمة.</li>
            <li>اضطرابات في حركة الأمعاء.</li>
            <li>التهابات معوية.</li>
          </ul>

          <h3
            className="text-2xl md:text-3xl font-semibold text-primary mb-4"
            data-aos="fade-up"
          >
            علاج القولون العصبي نهائيًا مع دكتور محمد حلمى
          </h3>
          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            data-aos="fade-up"
          >
            إذا كنت تعاني من القولون العصبي فلا داعي للقلق بعد الآن! حيث يقدم
            دكتور محمد حلمى برنامج علاجي شامل ومصمم خصيصًا للقضاء على هذه
            المشكلة المزعجة. يشمل البرنامج:
          </p>
          <ul
            className="list-disc list-inside text-gray-700 mb-6"
            data-aos="fade-up"
          >
            <li>
              العلاج الدوائي: والتي تشمل أدوية مضادة للتشنج وملينات لتخفيف
              الأعراض المزعجة.
            </li>
            <li>تغييرات غذائية: عبارة عن خطوات لتحسين عاداتك الغذائية.</li>
            <li>تقنيات إدارة الإجهاد: استراتيجيات للتخفيف من التوتر النفسي.</li>
            <li>تقنيات إدارة الإجهاد: استراتيجيات للتخفيف من التوتر النفسي.</li>
          </ul>

          <a
            href="https://wa.me/971504233692"
            target="_blank"
            className="text-primary hover:text-blue-700 transition-colors duration-300"
            data-aos="fade-up"
          >
            هل تعاني من أعراض القولون العصبي؟ لا تدع الألم يؤثر على حياتك! تواصل
            مع دكتور محمد حلمى اليوم لتحصل على استشارة مخصصة وعلاج فعّال.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Asaby;
