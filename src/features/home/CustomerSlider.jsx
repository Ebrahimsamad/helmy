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
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = "auto";
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const PrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-white bg-primary rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <AiOutlineLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-white bg-primary rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
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

  const navigateImage = (direction) => {
    if (direction === "next") {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-changa font-bold text-center text-primary mb-8">
        آراء بعض العملاء
      </h2>
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer px-2"
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              aria-label={`View Customer Image ${index + 1}`}
              onKeyPress={(e) => e.key === "Enter" && openModal(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                <img
                  src={image}
                  alt={`Customer Image ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform transform hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/fallback.jpg";
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={handleOverlayClick}
          role="presentation"
        >
          <div className="relative max-w-4xl w-full p-4">
            <button
              className="absolute -top-4 -right-4 text-gray-300 text-3xl hover:text-primary transition-colors p-2"
              onClick={closeModal}
              aria-label="Close image"
            >
              <AiOutlineClose />
            </button>
            <button
              className="absolute top-1/2 -left-0 transform -translate-y-1/2 text-white bg-primary rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
              onClick={() => navigateImage("prev")}
              aria-label="Previous Image"
            >
              <AiOutlineLeft />
            </button>
            <img
              src={images[selectedImageIndex]}
              alt={`Selected Customer ${selectedImageIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-1/2 -right-0 transform -translate-y-1/2 text-white bg-primary rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
              onClick={() => navigateImage("next")}
              aria-label="Next Image"
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerSlider;
