import { FaInstagram, FaTiktok } from "react-icons/fa";

const SecondaryHeader = () => {
  return (
    <header className="font-changa bg-primary text-white py-2">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between flex-wrap">
          {/* Button Section */}
          <button className="p-3 bg-white text-primary rounded-lg mb-4 md:mb-0">
            <a target="_blank" href="https://wa.me/971504233692">
              احجز الان
            </a>
          </button>

          {/* Icons Section */}
          <div className="icons flex justify-center gap-5 items-center">
            <a href="https://www.instagram.com/drhelmyy/" target="_blank">
              <FaInstagram className="text-2xl hover:text-gray-200 transition-all" />
            </a>
            <a href="https://www.tiktok.com/@dr.helmy10" target="_blank">
              <FaTiktok className="text-2xl hover:text-gray-200 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SecondaryHeader;
