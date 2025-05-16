
import { Clock, MapPin, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-barber-800">A Cut Above The Rest</h2>
            <p className="text-lg mb-6 text-barber-700">
              Since 1998, The Barbers has been providing premium grooming services to gentlemen who appreciate tradition, quality, and style.
            </p>
            <p className="text-gray-600 mb-8">
              Our master barbers bring decades of experience to every cut, delivering precision styling in a relaxed, classic barbershop environment. We blend time-honored techniques with modern trends to give you the perfect look.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                <Clock className="w-8 h-8 text-barber-600 mb-2" />
                <h3 className="font-semibold text-barber-800">25+</h3>
                <p className="text-sm text-gray-600 text-center">Years Experience</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                <Award className="w-8 h-8 text-barber-600 mb-2" />
                <h3 className="font-semibold text-barber-800">Award Winning</h3>
                <p className="text-sm text-gray-600 text-center">Master Barbers</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-secondary rounded-lg">
                <MapPin className="w-8 h-8 text-barber-600 mb-2" />
                <h3 className="font-semibold text-barber-800">Prime</h3>
                <p className="text-sm text-gray-600 text-center">Location</p>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary">Contact Us</a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80" 
                alt="Barber shop interior" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-barber-50 rounded-lg -z-0 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
