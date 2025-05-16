
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real implementation, you would send this data to a server
    alert("Thank you! Your appointment request has been received. We'll contact you shortly to confirm.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-barber-800 text-white">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Book An Appointment</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-barber-100">
          Schedule your next grooming session with our expert barbers
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-barber-700 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-barber-100">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold-400 mr-4 mt-1" />
                <div>
                  <p className="font-medium text-lg text-barber-100">Location</p>
                  <address className="not-italic text-barber-200">
                    123 Main Street<br />
                    New York, NY 10001
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold-400 mr-4 mt-1" />
                <div>
                  <p className="font-medium text-lg text-barber-100">Phone</p>
                  <p className="text-barber-200">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-gold-400 mr-4 mt-1" />
                <div>
                  <p className="font-medium text-lg text-barber-100">Email</p>
                  <p className="text-barber-200">info@thebarbers.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-gold-400 mr-4 mt-1" />
                <div>
                  <p className="font-medium text-lg text-barber-100">Hours</p>
                  <p className="text-barber-200">Monday - Friday: 9am - 7pm</p>
                  <p className="text-barber-200">Saturday: 10am - 6pm</p>
                  <p className="text-barber-200">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4 text-barber-100">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-barber-600 p-2 rounded-full hover:bg-barber-500 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="bg-barber-600 p-2 rounded-full hover:bg-barber-500 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="bg-barber-600 p-2 rounded-full hover:bg-barber-500 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-barber-800 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barber-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-barber-800 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-barber-800 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barber-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-barber-800 mb-1">
                    Service*
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barber-500"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="haircut">Classic Haircut</option>
                    <option value="beard">Beard Trim & Shape</option>
                    <option value="full">Full Service Package</option>
                    <option value="shave">Hot Towel Shave</option>
                    <option value="color">Hair & Beard Coloring</option>
                    <option value="kids">Kids Haircut</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-barber-800 mb-1">
                    Preferred Date*
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barber-500"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-barber-800 mb-1">
                    Preferred Time*
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barber-500"
                  >
                    <option value="" disabled>Select a time</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-barber-800 mb-1">
                  Special Requests or Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-barber-500"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-barber-700 hover:bg-barber-800 text-white font-semibold py-3 px-4 rounded-md transition-colors">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
