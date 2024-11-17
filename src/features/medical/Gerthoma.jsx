import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Gerthoma() {
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
            src="/medical/1.png"
            alt="جرثومة المعدة"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>

        {/* Description Section */}
        <div className="text-center md:text-right">
          <h2
            className="text-2xl md:text-3xl font-semibold text-primary mb-6"
            data-aos="fade-up" // Adding AOS animation
          >
            جرثومة المعدة
          </h2>
          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            data-aos="fade-up"
          >
            إذا كنت تعاني من آلام مستمرة في المعدة، حرقة، أو شعور بالغثيان، فقد
            تكون جرثومة المعدة هي السبب الرئيسي. د. عمر الديب، استشاري أمراض
            الجهاز الهضمي، يقدم لك الحل الأمثل لتشخيص وعلاج جرثومة المعدة بأحدث
            التقنيات الطبية. لا تدع الألم يؤثر على حياتك أكثر، اتخذ القرار الآن
            واستشر د. عمر الديب لضمان صحة جهازك الهضمي والعودة لحياتك اليومية
            بكل راحة. أحجز موعدك الآن لتتخلص من الأعراض المزعجة.
          </p>

          <h3
            className="text-2xl md:text-3xl font-semibold text-primary mb-4"
            data-aos="fade-up"
          >
            أعراض الإصابة بجرثومة المعدة
          </h3>
          <ul
            className="list-disc list-inside text-gray-700 mb-6"
            data-aos="fade-up"
          >
            <li>القئ.</li>
            <li>ألم المعدة.</li>
            <li>الغثيان.</li>
            <li>حرقة المعدة.</li>
            <li>فقدان الشهية.</li>
            <li>نقصان الوزن.</li>
          </ul>
          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            data-aos="fade-up"
          >
            من الجدير بالذكر أن أعراض جرثومة المعدة لا تختلف بين النساء والرجال،
            حيث يعاني كلاهما من واحد أو أكثر من الأعراض المذكورة سابقًا.
          </p>

          <h3
            className="text-2xl md:text-3xl font-semibold text-primary mb-4"
            data-aos="fade-up"
          >
            علاج جرثومة المعدة نهائي مع دكتور محمد حلمى
          </h3>
          <p
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
            data-aos="fade-up"
          >
            من الممكن وجود الجرثومة بدون أي أعراض أو أن تصاحبها أعراض الأمراض
            التي تتسبب الجرثومة في حدوثها، مثل أعراض قرحة المعدة والأثني العشر،
            يقدم دكتور عمر الديب برنامجًا علاجيًا متكاملاً وفعالًا للقضاء علي
            جرثومة المعدة بشكل نهائي، بالإضافة إلي أتباع نظام غذائي صحي لتعزيز
            فاعلية العلاج، ويختلف نوع العلاج من حالة إلي أخري حسب التشخيص الطبي
            لها حيث يوجد أكثر من بروتوكول للعلاج حسب ما يراه الطبيب وفقًا لحالة
            كل مريض.
          </p>

          <a
            href="https://wa.me/201552211942"
            target="_blank"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
            data-aos="fade-up"
          >
            لا تتردد في التواصل مع دكتور محمد حلمى لعلاج جرثومة المعدة بشكل
            نهائي وبأسرع وقت ممكن.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gerthoma;
