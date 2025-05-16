
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
          Classic Cuts, Modern Style
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Expert grooming for the modern gentleman in a traditional barbershop setting
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary text-lg px-8 py-3">
            Book Appointment
          </a>
          <a href="#services" className="btn-secondary text-lg px-8 py-3 text-white border-white hover:bg-white/10">
            View Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
        <ChevronDown size={36} onClick={scrollToServices} />
      </div>
    </section>
  );
};

export default Hero;
