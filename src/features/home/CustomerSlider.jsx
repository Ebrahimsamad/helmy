import React, { useState, useMemo } from "react";
import Slider from "react-slick";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/customer/1.jpg",
  "/customer/2.jpg",
  "/customer/3.jpg",
  "/customer/4.jpg",
  "/customer/5.jpg",
  "/customer/6.jpg",
  "/customer/7.jpg",
  "/customer/8.png",
  "/customer/9.png",
  "/customer/10.png",
];

const CustomerSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Disable scroll when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scroll when modal is closed
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-primary text-2xl bg-white rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-all"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <AiOutlineLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-primary text-2xl bg-white rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-all"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <AiOutlineRight />
    </button>
  );

  const settings = useMemo(
    () => ({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    []
  );

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-changa font-bold  text-center text-primary mb-8">
        آراء بعض العملاء
      </h2>
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer transition-transform transform hover:scale-105 px-2"
              onClick={() => openModal(image)}
              role="button"
              tabIndex={0}
              aria-label={`View Customer Image ${index + 1}`}
              onKeyPress={(e) => e.key === "Enter" && openModal(image)}
            >
              <div className="w-full h-64 relative overflow-hidden rounded-lg shadow-md hover:shadow-xl">
                <img
                  src={image}
                  alt={`Customer Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform transform hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/fallback.jpg";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white text-lg opacity-0 hover:opacity-100 transition-opacity">
                  Customer Image {index + 1}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300"
          onClick={handleOverlayClick}
          role="presentation"
        >
          <div className="relative max-w-3xl w-full p-4 bg-white rounded-lg shadow-lg">
            <div className="relative">
              <button
                className="absolute -top-3 z-40 -right-3 text-black text-3xl hover:text-primary transition-colors p-2 rounded-full"
                onClick={closeModal}
                aria-label="Close image"
              >
                <AiOutlineClose />
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[80vh] object-contain transition-transform transform scale-100 rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerSlider;
