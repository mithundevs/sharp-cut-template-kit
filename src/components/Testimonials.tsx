
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const Testimonials = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Robert Johnson",
      role: "Regular Customer",
      comment: "Best haircut I've ever had. The attention to detail and the overall experience was exceptional. I won't go anywhere else now.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 2,
      name: "Michael Williams",
      role: "First-time Client",
      comment: "The barbers here are true artists. They took the time to understand exactly what I wanted and delivered perfectly.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      id: 3,
      name: "David Brown",
      role: "Monthly Subscriber",
      comment: "I love the traditional atmosphere combined with modern techniques. Their hot towel shave is an experience every man should try.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-barber-700">
          Don't just take our word for it, hear what our clients have to say
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-barber-100 mb-4"
                    />
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6">"{testimonial.comment}"</p>
                    <h4 className="font-semibold text-barber-800">{testimonial.name}</h4>
                    <p className="text-sm text-barber-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-barber-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-barber-800" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-barber-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-barber-800" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                activeIndex === index ? "bg-barber-700" : "bg-barber-200"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
