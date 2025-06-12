import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCounter = ({ target, label, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const totalFrames = Math.round(duration * 60); // 60 FPS
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.floor(target * progress);

      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(target); // ensure exact target
      }
    }, 1000 / 60); // ~16ms/frame for 60fps

    return () => clearInterval(counter);
  }, [target, duration]);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-4xl font-bold text-blue-900">{count}+</h3>
      <p className="mt-2 text-lg text-gray-600">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { target: 250, label: "Projects Completed" },
    { target: 440, label: "Happy Clients" },
    { target: 10, label: "Years of Experience" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <AnimatedCounter
          key={index}
          target={stat.target}
          label={stat.label}
          duration={3.5} // slightly slower for visibility
        />
      ))}
    </div>
  );
};

export default Stats;
