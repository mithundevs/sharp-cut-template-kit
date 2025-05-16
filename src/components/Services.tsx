
import { Scissors, Shirt, Droplet } from "lucide-react";
import { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  duration: string;
}

const Services = () => {
  const [services] = useState<Service[]>([
    {
      id: 1,
      title: "Classic Haircut",
      description: "Precision cut with expert styling. Includes consultation, shampoo and styling.",
      price: "$30",
      icon: <Scissors className="w-8 h-8 text-barber-600" />,
      duration: "30 min"
    },
    {
      id: 2,
      title: "Beard Trim & Shape",
      description: "Expert beard trimming and shaping to enhance your facial features.",
      price: "$20",
      icon: <Scissors className="w-8 h-8 text-barber-600" />,
      duration: "20 min"
    },
    {
      id: 3,
      title: "Full Service Package",
      description: "Complete grooming experience with haircut, beard trim, hot towel and styling.",
      price: "$45",
      icon: <Scissors className="w-8 h-8 text-barber-600" />,
      duration: "45 min"
    },
    {
      id: 4,
      title: "Hot Towel Shave",
      description: "Traditional straight razor shave with hot towel treatment for ultimate relaxation.",
      price: "$35",
      icon: <Scissors className="w-8 h-8 text-barber-600" />,
      duration: "30 min"
    },
    {
      id: 5,
      title: "Hair & Beard Coloring",
      description: "Professional color application for hair or beard with natural results.",
      price: "$40+",
      icon: <Droplet className="w-8 h-8 text-barber-600" />,
      duration: "60 min"
    },
    {
      id: 6,
      title: "Kids Haircut",
      description: "Gentle haircuts for young gentlemen in a friendly environment.",
      price: "$20",
      icon: <Scissors className="w-8 h-8 text-barber-600" />,
      duration: "20 min"
    }
  ]);

  return (
    <section id="services" className="bg-secondary py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Our Services</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-barber-800">
          Expert grooming services delivered with precision and style, tailored to your unique preferences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-barber-800">{service.title}</h3>
              <p className="text-barber-600 font-bold mb-2">{service.price}</p>
              <p className="text-sm text-gray-500 mb-2">{service.duration}</p>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="btn-secondary w-full">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
