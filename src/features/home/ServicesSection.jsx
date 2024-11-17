import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const services = [
  {
    id: 10,
    title: "الحمية والمكملات لمرضى الاورام",
    description:
      "تنظيم الحمية والمكملات الغذائية اللازمة لمرضى الأورام والغدة الدرقية واللمفاوية يعد أمرًا حيويًا لدعم صحتهم وتحسين استجابتهم للعلاج. يتطلب الأمر توازنًا دقيقًا بين العناصر الغذائية لضمان تعزيز المناعة وتعويض أي نقص غذائي قد يطرأ نتيجة للمرض أو العلاج.",
    image: "/10.jpg",
    link: "/جرثومة-المعدة",
  },
  {
    id: 8,
    title: "مشاكل الغدة الدرقية ",
    description:
      "مشاكل الغدة الدرقية تشمل اضطرابات في إفراز الهرمونات، مما يؤثر على التوازن الهرموني بالجسم. أبرز هذه المشاكل هي قصور الدرقية وفرط الدرقية، التي قد تؤدي إلى تغيرات في الوزن، الطاقة، والمزاج إذا لم يتم علاجها بشكل فعال .",
    image: "/8.jpg",
    link: "/جرثومة-المعدة",
  },
  {
    id: 12,
    title: "مشاكل دهون الكبد ",
    description:
      "لحل مشكلة دهون الكبد، يجب اتباع نظام غذائي صحي منخفض الدهون، ممارسة الرياضة بانتظام، فقدان الوزن الزائد، وتقليل تناول الكحول .",
    image: "/12.jpg",
    link: "/جرثومة-المعدة",
  },
  {
    id: 14,
    title: "مريض الاورام",
    description:
      "متابعة مرضى الأورام تشمل تقييم الحالة الصحية بشكل دوري، تنظيم نظام غذائى صحى ومكملات صحية لرفع المناعة وتعويض العجز والنقص من المعادن وتقليل معدل الالتهابات لاستجابة اسرع للعلاج قد تصل الى 80% مع تنظيف الكبد وتنظيم الجسم لعدم رجوع الورم .",
    image: "/14.jpg",
    link: "/جرثومة-المعدة",
  },
  {
    id: 16,
    title: "الغدد اللمفاوية ",
    description:
      "مساعدة مرضى الغدد اللمفاوية تشمل تشخيص السبب بدقة، سواء كان عدوى أو التهابًا أو ورمًا، وتقديم العلاج المناسب ونساعدهم على التخلص من الغدد اللمفاوية عن طريق تنظيم الاكل والمكملات وتزويد جهاز المناعة والتخلص من معدل الالتهابات .",
    image: "/16.jpg",
    link: "/جرثومة-المعدة",
  },
  {
    id: 6,
    title: "مشاكل الجهاز الهضمى كاملة ",
    description:
      "مشاكل الجهاز الهضمي تشمل العديد من الاضطرابات التي تؤثر على عملية الهضم، امتصاص المواد الغذائية، وصحة الأمعاء بشكل عام. من أبرز هذه المشاكل: عسر الهضم، الانتفاخ، الإمساك، الإسهال، والتهابات الأمعاء .",
    image: "/6.jpg",
    link: "/جرثومة-المعدة",
  },
  {
    id: 1,
    title: "القولون العصبى",
    description:
      "القولون العصبي هو اضطراب هضمي شائع يؤثر على الأمعاء الغليظة  ويرتبط بشكل كبير بالتوتر والقلق والوسواس والخوف ومشاكل نفسية ومشاكل فى النوم والضغوط النفسية. ",
    image: "/1.png",
    link: "/القولون-العصبى",
  },
  {
    id: 3,
    title: "علاج السمنة",
    description:
      "علاج السمنة مع دكتور محمد حلمى يمثل حلاً متكاملاً لكل مريض حيث يقدم حلولاً مبتكرة وعلاج السمنة بفعالية عالية",
    image: "/3.png",
    link: "/علاج-السمنة",
  },
  {
    id: 4,
    title: "جرثومة المعدة",
    description:
      "هي نوع من البكتيريا التي تسبب التهاب المعدة. يمكن أن تنتقل هذه البكتيريا عن طريق تناول الطعام الملوث بالعدوى.",
    image: "/4.png",
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
    <section className="bg-primary font-changa py-16 px-6">
      <div className="container mx-auto text-center">
        <h2
          className="text-2xl md:text-3xl font-bold text-white mb-12"
          data-aos="fade-down"
        >
          الخدمات
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white  rounded-lg shadow-lg p-6 flex flex-col items-center"
              data-aos="fade-up"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4 "
              />
              <h3 className="text-lg font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-black mb-4 text-center">
                {service.description}
              </p>
              {/* <Link
                to={service.link}
                onClick={scrollToTop}
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-300"
              >
                اقرأ المزيد
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalSection;
