// import React from "react";

// const TiktokGallery = () => {
//   const videos = [
//     { url: "https://www.tiktok.com/embed/7426449707649584417" },
//     { url: "https://www.tiktok.com/embed/7365180517240622369" },
//     { url: "https://www.tiktok.com/embed/7351552795243302177" },
//     { url: "https://www.tiktok.com/embed/7435307645961063712" },
//     { url: "https://www.tiktok.com/embed/7435354784749604128" },
//     { url: "https://www.tiktok.com/embed/7435225096538557728" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center gap-8 p-6">
//       {videos.map((video, index) => (
//         <div
//           key={index}
//           className="relative bg-black rounded-lg overflow-hidden shadow-lg w-[90%] sm:w-[300px] md:w-[320px] lg:w-[340px] aspect-[9/16]"
//         >
//           {/* Responsive iframe */}
//           <iframe
//             src={video.url}
//             allow="autoplay"
//             title={`TikTok video ${index + 1}`}
//             className="absolute top-0 left-0 w-full h-full rounded-lg"
//             style={{ border: "none" }}
//           ></iframe>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TiktokGallery;
import React, { useEffect } from "react";
import { FaTiktok } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const TiktokGallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const videos = [
    {
      title: "الفيديو 1: الحكة المستمرة تشير إلى مشاكل في الكبد",
      thumbnail: "/videos/2.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7365180517240622369",
    },
    {
      title: "الفيديو 2: اختفاء العقد الدرقية والشفاء التام",
      thumbnail: "/videos/1.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7351552795243302177",
    },
    {
      title: "الفيديو 4: تشافى من اورام الثدي",
      thumbnail: "/videos/4.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7365180517240622369",
    },
    {
      title: "الفيديو 3: اختفاء العقد الدرقية والشفاء التام",
      thumbnail: "/videos/3.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7351552795243302177",
    },
    {
      title: "الفيديو 5: مكملات مهمدة للغدة الدرقية",
      thumbnail: "/videos/5.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7436859009312836897",
    },
    {
      title: "الفيديو 6: مشروب يجدد الكلى والمعدة والامعاء",
      thumbnail: "/videos/6.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7435307645961063712",
    },
    {
      title: "الفيديو 7: مشروبات سحر لمريض السكر",
      thumbnail: "/videos/7.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7434855802663488801",
    },
    {
      title: "الفيديو 8: تليفات الرحم",
      thumbnail: "/videos/8.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7434191329204210977",
    },
    {
      title: "الفيديو 9: زيت الخروع نسف العقد والاكياس",
      thumbnail: "/videos/9.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7437459442855054614",
    },
  ];

  return (
    <div className="min-h-screen container mx-auto bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-3xl font-changa font-semibold text-primary mb-6 text-center">
        بعض من فيديوهاتنا على قناتنا على التيك توك
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Stagger the animation delays
          >
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={`Thumbnail for ${video.title}`}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        ))}
      </div>
      <a
        href="https://www.tiktok.com/@dr.helmy10"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center text-center"
      >
        <span className="text-lg font-changa text-primary">
          لمشاهدة باقى الفيديوهات
        </span>
        <span className="text-secondary text-lg flex items-center justify-center">
          <FaTiktok className="text-2xl mr-2" />
        </span>
      </a>
    </div>
  );
};

export default TiktokGallery;
