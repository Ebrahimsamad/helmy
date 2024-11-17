import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import AOS styles

const PlansSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const plans = [
    {
      title: "استشارة ",
      //   price: "$25",
      features: [
        "تمكنك من التواصل مع الدكتور لشرح وتقييم الحالة",
        "مكالمة واحدة مع الدكتور فقط",
        "بدون تحديد حمية او مكملات",
        // "لا يوجد اتصال فى هذا الباقة",
      ],
      badge: "BASE",
    },
    // {
    //   title: " المتابعة الشهرية",
    //   //   price: "$55",
    //   features: [
    //     " الاستشارة مكالمة عن طريق بوتم كوميرا ",
    //     "إرسال النظام الغذائي المخصص لكم",
    //     "المتابعة لمدة اسبوعين مع الدكتور شخصياً",
    //     "مقابلة في نهاية الشهر لتقييم الوضع الصحي وخطة العلاج",
    //   ],
    //   badge: "FULL",
    // },
    {
      title: "المتابعة الشهرية ",
      //   price: "$55",
      features: [
        "الاستشارة مكالمة عن طريق برنامج بوتم او كوميرا",
        "إرسال النظام الغذائي والمكملات المناسب لكم",
        "المتابعة يوميا ولمدة شهر كامل على الواتساب مع الدكتور شخصياً",
        // "مقابلة في نهاية الشهر لتقييم الوضع الصحي وخطة العلاج",
      ],
      badge: "FULL",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-8 font-changa">
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800"
          data-aos="fade-up"
        >
          الاستشارات الطبية
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative bg-white border-2 border-primary rounded-lg shadow-lg overflow-hidden transform transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Stagger the animations
          >
            {/* Price Section */}
            <div className="bg-primary text-white text-center py-6">
              <h3 className="text-xl font-bold">{plan.title}</h3>
              {/* <p className="text-4xl font-extrabold mt-2">{plan.price}</p> */}
            </div>

            {/* Features */}
            <ul className="p-6 text-gray-700 space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="w-3 h-3 mt-1 ml-2 bg-primary rounded-full"></span>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="px-6 pb-6 text-center">
              <button className="w-full bg-primary text-white py-3 rounded-lg shadow-md hover:bg-[#20484a] transition">
                <a href="https://wa.me/201552211942" target="_blank">
                  سجل الآن
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;
