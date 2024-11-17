// import React, { useState, useEffect } from "react";
// import { FaSpinner } from "react-icons/fa";

// const HealthNewsArabic = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const healthTips = [
//     "تناول طعامًا متوازنًا يحتوي على الفواكه والخضروات.",
//     "اشرب 8 أكواب من الماء يوميًا لتحافظ على ترطيب جسمك.",
//     "مارس التمارين الرياضية بانتظام للحفاظ على صحة القلب.",
//     "احرص على النوم لمدة 7-8 ساعات يوميًا لتحسين وظائف الجسم.",
//     "اغسل يديك باستمرار لتجنب الإصابة بالأمراض.",
//     "ابتعد عن التدخين للحفاظ على صحة رئتيك.",
//     "قم بالفحوصات الطبية بشكل دوري.",
//     "مارس التأمل واليقظة لتقليل التوتر وتحسين حالتك النفسية.",
//   ];

//   useEffect(() => {
//     const fetchHealthNews = async () => {
//       try {
//         const response = await fetch(
//           `https://gnews.io/api/v4/search?q=الصحة&lang=ar&token=77a39b67f74d6c3c0af6e46af1fbb926`
//         ); // Replace YOUR_API_KEY with your GNews API key
//         if (!response.ok) throw new Error("فشل في جلب الأخبار الصحية.");
//         const result = await response.json();
//         setNews(result.articles.slice(0, 5)); // Limit to 5 articles
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchHealthNews();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen">
//         <FaSpinner className="text-4xl animate-spin text-blue-500" />
//         <p className="text-xl mt-4">جاري تحميل الأخبار الصحية...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen text-center">
//         <p className="text-red-500 text-xl font-bold">
//           حدث خطأ أثناء تحميل الأخبار.
//         </p>
//         <p className="text-gray-600">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 py-10 px-5 text-right">
//       <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
//         نصائح صحية وآخر الأخبار
//       </h1>

//       {/* Health Tips Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-bold text-green-600 mb-4">نصائح صحية</h2>
//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           {healthTips.map((tip, index) => (
//             <li key={index} className="text-lg">
//               {tip}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Health News Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-bold text-blue-600 mb-4">
//           آخر الأخبار الصحية
//         </h2>
//         <ul className="space-y-4">
//           {news.map((article, index) => (
//             <li
//               key={index}
//               className="p-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition"
//             >
//               <a
//                 href={article.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-lg font-bold text-blue-700 hover:underline"
//               >
//                 {article.title}
//               </a>
//               <p className="text-gray-600 mt-2">{article.description}</p>
//               <span className="text-sm text-gray-500">
//                 المصدر: {article.source.name}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HealthNewsArabic;

import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const CACHE_KEY = "cachedHealthNews";
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

const HealthNewsArabic = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const healthTips = [
    "تناول طعامًا متوازنًا يحتوي على الفواكه والخضروات.",
    "اشرب 8 أكواب من الماء يوميًا لتحافظ على ترطيب جسمك.",
    "مارس التمارين الرياضية بانتظام للحفاظ على صحة القلب.",
    "احرص على النوم لمدة 7-8 ساعات يوميًا لتحسين وظائف الجسم.",
    "اغسل يديك باستمرار لتجنب الإصابة بالأمراض.",
    "ابتعد عن التدخين للحفاظ على صحة رئتيك.",
    "قم بالفحوصات الطبية بشكل دوري.",
    "مارس التأمل واليقظة لتقليل التوتر وتحسين حالتك النفسية.",
  ];

  const fetchHealthNews = async () => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=الصحة&lang=ar&token=77a39b67f74d6c3c0af6e46af1fbb926`
      );
      if (!response.ok) throw new Error("فشل في جلب الأخبار الصحية.");
      const result = await response.json();
      const fetchedNews = result.articles.slice(0, 5);

      const cacheData = {
        news: fetchedNews,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));

      setNews(fetchedNews);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { news: cachedNews, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_DURATION) {
        setNews(cachedNews);
        setLoading(false);
        return;
      }
    }

    fetchHealthNews();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <FaSpinner className="text-4xl animate-spin text-blue-500" />
        <p className="text-xl mt-4">جاري تحميل الأخبار الصحية...</p>
      </div>
    );
  }

  if (error || news.length === 0) {
    return (
      <div className="bg-gray-100 py-10 px-5 text-right">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          نصائح صحية
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-red-500 text-lg font-bold mb-4">
            لا توجد أخبار متوفرة حاليًا.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {healthTips.map((tip, index) => (
              <li key={index} className="text-lg">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-10 px-5 text-right">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        نصائح صحية وآخر الأخبار
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4">نصائح صحية</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {healthTips.map((tip, index) => (
            <li key={index} className="text-lg">
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          آخر الأخبار الصحية
        </h2>
        <ul className="space-y-4">
          {news.map((article, index) => (
            <li
              key={index}
              className="p-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-blue-700 hover:underline"
              >
                {article.title}
              </a>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <span className="text-sm text-gray-500">
                المصدر: {article.source.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HealthNewsArabic;
