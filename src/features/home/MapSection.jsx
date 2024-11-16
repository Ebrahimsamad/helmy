const MapSection = () => {
  return (
    <section className="bg-gray-50 font-changa py-16 px-8 md:px-16">
      <div
        className="container mx-auto text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          موقعنا على الخريطة
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          نحن هنا لتلبية احتياجاتك. يمكنك العثور علينا بسهولة باستخدام الخريطة
          أدناه.
        </p>
      </div>
      <div
        className="container mx-auto relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <iframe
          title="غذائك شفاءك"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.28716205570685!2d55.2784733!3d25.2216763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4300210735d5%3A0x1a2522a487b4e4db!2sBIBAO!5e0!3m2!1sen!2s!4v1694867507212!5m2!1sen!2s"
          className="w-full h-96 md:h-[500px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
