import { motion } from "framer-motion";

const testimonials = [
  //   {
  //     name: "Jane Doe",
  //     role: "Marketing Manager at Acme Inc.",
  //     feedback:
  //       "This team exceeded our expectations. The communication, design, and delivery were top-notch.",
  //     image: "/images/jane.jpg",
  //   },
  //   {
  //     name: "John Smith",
  //     role: "CEO of StartupX",
  //     feedback:
  //       "A truly professional experience. Timely delivery and excellent results. Highly recommended!",
  //     image: "/images/john.jpg",
  //   },
  //   {
  //     name: "Emily Chen",
  //     role: "Product Designer at PixelCraft",
  //     feedback:
  //       "Working with them was seamless and creative. Their insights were invaluable to our launch.",
  //     image: "/images/emily.jpg",
  //   },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 text-center mb-12"
      >
        What Our Clients Say
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-lg font-medium text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              “{testimonial.feedback}”
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
