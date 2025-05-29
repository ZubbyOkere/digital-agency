// components/Map.tsx
export default function Map() {
  return (
    <section className="bg-white py-12 sm:py-16 w-full max-w-[100vw] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] text-center mb-4">
          Visit Us
        </h2>
        <p className="text-[#1F2937] text-base sm:text-lg text-center max-w-3xl mx-auto mb-8">
          Find us at Bensima House, Aguiyi Ironsi Street, Maitama, Abuja,
          Nigeria. We’re here to help bring your digital vision to life.
        </p>
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.932093299377!2d7.4871439!3d9.0700587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b8f6c7b3b7b%3A0x7b8f7e8f7c7b3b7b!2sBensima%20House%2C%20Aguiyi%20Ironsi%20St%2C%20Maitama%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1697051234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Bensima House, Maitama, Abuja"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
