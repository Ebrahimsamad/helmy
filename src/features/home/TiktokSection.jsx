// import React, { useEffect } from "react";
// import { FaTiktok } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// import { Link } from "react-router-dom";

// const TiktokSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out" });
//   }, []);

//   // Display only the first 3 videos for the section
//   const videos = [
//     {
//       title: "الفيديو 1: الحكة المستمرة تشير إلى مشاكل في الكبد",
//       thumbnail: "/videos/2.png",
//       url: "https://www.tiktok.com/@dr.helmy10/video/7426449707649584417",
//     },
//     {
//       title: "الفيديو 2: اختفاء العقد الدرقية والشفاء التام",
//       thumbnail: "/videos/1.png",
//       url: "https://www.tiktok.com/@dr.helmy10/video/7351552795243302177",
//     },
//     {
//       title: "الفيديو 4: تشافى من اورام الثدي",
//       thumbnail: "/videos/4.png",
//       url: "https://www.tiktok.com/@dr.helmy10/video/7365180517240622369",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="container mx-auto px-6 sm:px-8">
//         <h2 className="text-3xl font-changa font-semibold text-primary text-center mb-6">
//           استمتع ببعض فيديوهاتنا على التيك توك
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {videos.map((video, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
//               data-aos="fade-up"
//               data-aos-delay={`${index * 100}`} // Animation delay for staggered effect
//             >
//               <a href={video.url} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={video.thumbnail}
//                   alt={`Thumbnail for ${video.title}`}
//                   className="w-full h-full object-cover"
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <Link
//             to="/videos"
//             className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-secondary hover:shadow-lg transition-all duration-300"
//           >
//             شاهد المزيد <FaTiktok className="text-xl ml-2" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TiktokSection;

import React, { useEffect } from "react";
import { FaTiktok } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-router-dom";

const TiktokSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const videos = [
    {
      title: "الفيديو 1: الحكة المستمرة تشير إلى مشاكل في الكبد",
      thumbnail: "/videos/45.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7437538797312675094",
    },
    {
      title: "الفيديو 1: الحكة المستمرة تشير إلى مشاكل في الكبد",
      thumbnail: "/videos/2.png",
      url: "https://www.tiktok.com/@dr.helmy10/video/7426449707649584417",
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
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-changa font-semibold text-primary text-center mb-6">
          استمتع ببعض فيديوهاتنا على التيك توك
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              style={{ maxWidth: "250px", margin: "0 auto" }} // Larger card width
            >
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail for ${video.title}`}
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/videos"
            onClick={scrollToTop}
            className="inline-flex items-center bg-primary text-white px-8 py-3 text-lg rounded-lg shadow-md hover:bg-secondary hover:shadow-lg transition-all duration-300"
          >
            شاهد المزيد <FaTiktok className="text-2xl ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TiktokSection;
