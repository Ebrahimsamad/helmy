import React from "react";

const TiktokGallery = () => {
  const videos = [
    { url: "https://www.tiktok.com/embed/7426449707649584417" },
    { url: "https://www.tiktok.com/embed/7365180517240622369" },
    { url: "https://www.tiktok.com/embed/7351552795243302177" },
    { url: "https://www.tiktok.com/embed/7435307645961063712" },
    { url: "https://www.tiktok.com/embed/7435354784749604128" },
    { url: "https://www.tiktok.com/embed/7435225096538557728" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center gap-8 p-6">
      {videos.map((video, index) => (
        <div
          key={index}
          className="relative bg-black rounded-lg overflow-hidden shadow-lg w-[90%] sm:w-[300px] md:w-[320px] lg:w-[340px] aspect-[9/16]"
        >
          {/* Responsive iframe */}
          <iframe
            src={video.url}
            allow="autoplay"
            title={`TikTok video ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            style={{ border: "none" }}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default TiktokGallery;
