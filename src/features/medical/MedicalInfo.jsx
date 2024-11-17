import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

const MedicalAdviceAndNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const medicalAdvices = [
    "تناول الطعام الصحي المتوازن يوميًا.",
    "حافظ على شرب 8 أكواب من الماء يوميًا.",
    "مارس الرياضة بانتظام لتحسين صحة القلب.",
    "النوم الكافي يحسن صحة الدماغ والجهاز المناعي.",
    "احرص على غسل يديك بانتظام لتجنب الأمراض المعدية.",
    "تناول الفواكه والخضروات لدعم جهازك المناعي.",
    "ابتعد عن التدخين للحفاظ على صحة الرئة.",
    "افحص صحتك دوريًا للكشف المبكر عن الأمراض.",
  ];

  useEffect(() => {
    const fetchMedicalNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=medicine&language=ar&apiKey=25ff2d14add042f8a5b5e1d543f80454"
        );
        if (!response.ok) throw new Error("فشل في جلب الأخبار الطبية");
        const result = await response.json();
        setNews(result.articles.slice(0, 5)); // Limit to 5 articles
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMedicalNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="text-4xl animate-spin text-primary" />
        <p className="text-xl mt-4">جاري تحميل المعلومات...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <p className="text-red-500 text-xl font-bold">
          حدث خطأ أثناء تحميل المعلومات.
        </p>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">
        نصائح طبية وأخبار حديثة
      </h1>

      {/* Medical Advices */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-secondary mb-4">نصائح طبية</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {medicalAdvices.map((advice, index) => (
            <li key={index} className="text-lg">
              {advice}
            </li>
          ))}
        </ul>
      </div>

      {/* Medical News */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-secondary mb-4">
          آخر الأخبار الطبية
        </h2>
        <ul className="space-y-4">
          {news.map((article, index) => (
            <li
              key={index}
              className="p-4 border-b border-gray-200 last:border-0 hover:bg-gray-100 transition"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-primary hover:underline"
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

export default MedicalAdviceAndNews;
