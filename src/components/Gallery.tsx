
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80",
      alt: "Classic gentlemen's haircut",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80",
      alt: "Barber shop interior",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1635273051846-4382ee736b91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80",
      alt: "Beard trimming",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80",
      alt: "Vintage barber chair",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80",
      alt: "Barber tools",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80",
      alt: "Modern fade haircut",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.floor(galleryImages.length / 3) * 3 ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.floor(galleryImages.length / 3) * 3 : prevIndex - 3
    );
  };

  return (
    <section id="gallery" className="py-20 bg-barber-50">
      <div className="container mx-auto">
        <h2 className="section-title">Our Gallery</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-barber-700">
          A showcase of our finest work and barbershop atmosphere
        </p>

        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white transition-colors"
            aria-label="Previous images"
          >
            <ChevronLeft size={24} className="text-barber-800" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {galleryImages.slice(currentIndex, currentIndex + 3).map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10 hover:bg-white transition-colors"
            aria-label="Next images"
          >
            <ChevronRight size={24} className="text-barber-800" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(galleryImages.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentIndex === index * 3 ? "bg-barber-700" : "bg-barber-200"
              }`}
              onClick={() => setCurrentIndex(index * 3)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
